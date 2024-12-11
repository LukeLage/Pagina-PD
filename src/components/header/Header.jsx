import React from 'react'
import Logo from '../../assets/img/logoExtensa.png'
import { Link } from 'react-router-dom'
import styles from './header.module.css'

export default function Header() {
    const LinkHeader = "https://api.whatsapp.com/send?phone=5531983109936&text=Olá!%20"


  return (
    <>
    <header className={styles.Header}>
       <Link to={"/"}> <img src={Logo} alt="projeto desenvolve logo" /> </Link>
        <Link className={styles.a} to={LinkHeader} target='.blank'>Entre em contato</Link>
    </header>
    
    </>
  )
}
