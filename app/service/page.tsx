import Link from 'next/link'
import React from 'react'
import styles from '../service/service.module.css';

const Servicepage = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.header}>this is service page</h1>
        <ul>
  
  <li><Link href='/'>Go to HOME page</Link></li>
  <li><Link  href='/about' target='_blank'>Go to About page</Link></li>
  <li><Link href='/contact' target='_blank'>Go to Contact page</Link></li>
</ul>
  
    
      
    </div>
  )
}

export default Servicepage
