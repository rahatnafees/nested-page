import Link from 'next/link'
import React from 'react'
import styles from "../contact/contact.module.css";

const Contactpage = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.header}>this is Contac tpage</h1>
        <ul>
  
  <li><Link href='/'>Go to HOME page</Link></li>
  <li><Link  href='/about' target='_blank'>Go to About page</Link></li>
  <li><Link href='/service' target='_blank'>Go to Sercice page</Link></li>
</ul>
  
    
      
    </div>
  )
}

export default Contactpage
