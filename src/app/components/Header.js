import React from 'react'
import styles from '../styles/navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Nav from './Nav'

const Header = () => {
  return (
    <header className={styles.main_header}>
       <div className={styles.navbar_brand}>
        <Link href="/">
            <Image alt='my logo image' src='/myflix.png'  width={150} height={40}/>
        </Link>
       </div>
    <Nav/>
    </header>
  )
}

export default Header