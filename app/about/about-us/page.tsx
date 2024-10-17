import Link from 'next/link'
import React from 'react'

const AboutUspage = () => {
  return (
    <div>
        <h1>this is AboutUs page</h1>
        <ul>
        <li><Link href="/about/about-us">This is About us page</Link></li>
        
        </ul>
        
      
    </div>
  )
}

export default AboutUspage
