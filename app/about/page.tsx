import Link from 'next/link'
import React from 'react'
import Styles from "../about/about.module.css";
import Head from 'next/head';

const Aboutpage = () => {
  return (
    <div className={Styles.container}>
        <h1 className={Styles.heaider}>this is about page</h1>
        <ul>
  
  <li><Link href='/'>Go to HOME page</Link></li>
  <li><Link  href='/about/about-us' target='_blank'>Go to contact page</Link></li>
  
</ul>
  
    
      
    </div>
  )
}

export default Aboutpage
