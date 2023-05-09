import React from 'react'
import Image from 'next/image';
import styles from '../../styles/common.module.css'

const page = async({params}) => {
  const id=params.slug
 
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e772aa741bmsh2676eeb4e3fd77ap103333jsnc2f52d93fadc',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
  
  
    const response = await fetch(url, options);
    const result = await response.json();
    const main_data=result[0].details
 

  return (
    <div>
            <div className={styles.container}>
                <h2 className={styles.movie_title}>   Netflix \ <span> {main_data.type} </span> </h2>
                <div className={styles.card_section}>
                    <div>
                        <Image src={main_data.backgroundImage.url} alt={main_data.title} width={600} height={300} />
                    </div>
                    <div>
                        <h1>{main_data.title}</h1>
                        <p>{main_data.synopsis}</p>
                    </div>
                </div>
            </div></div>
  )
}

export default page