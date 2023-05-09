import React from 'react'
import Link from 'next/link'
import MovieCard from '../components/MovieCard';
import styles from '../styles/common.module.css'
const Movie = async() => {
await new Promise(resolve=>setTimeout(resolve,2000))

  const url = process.env.RAPID;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e772aa741bmsh2676eeb4e3fd77ap103333jsnc2f52d93fadc',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
  
    const response = await fetch(url, options);
    const result = await response.json();
    const main_data=result.titles;
    
 
  return (
    <>
<section className={styles.movieSection}>
  <div className={styles.container}>
      <h1>Series & Movies</h1>
      <div className={styles.card_section}>
      {
        main_data.map(item=>{
           return <MovieCard key={item.id} {...item}/>
        })
      }
      </div></div>
      </section>
    </>
    
  )
}

export default Movie