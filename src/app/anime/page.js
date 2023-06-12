import React from 'react'
import Link from 'next/link'
import MovieCard from '../components/MovieCard';
import styles from '../styles/common.module.css'

export const metadata = {
  title: 'MyFlix-Anime',
  description: 'Read about anime',
}
const Anime = async() => {

 

  const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=50';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key':  process.env.NEXT_PUBLIC_X_RapidAPI_Key,
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};
  
    const response = await fetch(url, options);
    const result = await response.json();
    
    const main_data=result.data;
  return (
    <div>
      <section className={styles.movieSection}>
  <div className={styles.container}>
      <h1>Anime</h1>
      <div className={styles.card_section}>
      {
        main_data.map(item=>{
           return <MovieCard key={item.id} id={item._id} title={item.title} synopsis={item.synopsis} bgUrl={item.image} type={'anime'} />
        })
      }
      </div></div>
      </section>
    </div>
  )
}

export default Anime