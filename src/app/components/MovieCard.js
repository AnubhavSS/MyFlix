import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/common.module.css'
const MovieCard = (item) => {
    const {id,type,title,synopsis}=item.jawSummary
  return (
    <>
    <div className={styles.card}>
<div className={styles.card_image}>
<Image src={item.jawSummary.backgroundImage.url} alt={title} width={260} height={200} />
</div>

<div className={styles.card_data}>
                    <h2>{title.substring(0,18)}</h2>
                    <p>
                        {`${synopsis.substring(0,66)} ...`}
                    </p>

                    <Link href={`/movie/${id}`}>
                        <button>
                            Read More
                        </button>
                    </Link>
                </div>
    </div>
    
    </>
  )
}

export default MovieCard