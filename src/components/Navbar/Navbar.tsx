import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";
import styles from './Navbar.module.css'

function Navbar() {
  const { pathname } = useRouter()

  return (
    <div className={styles.container}>
      <Link href="/" ><img className={styles.logo} src="logo-bicevida.svg" alt="" /></Link>
      <div className={styles.nav}>
        <Link href="/selecciona-un-seguro" >
          <a className={pathname == "/selecciona-un-seguro" ? "active" : ""}>Seleccciona</a></Link>

        <Link href="/seguros">
          <a className={pathname == "/seguros" ? "active" : ""}>Seguros</a>
        </Link>


      </div>
    </div>
  )
}

export default Navbar
