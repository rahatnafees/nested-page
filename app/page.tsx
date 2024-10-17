import Link from 'next/link'
import React from 'react'

const Homepage = () => {
  return (
    <div>
      <h1>this is Homepage</h1>
      <ul>
  
  <li><Link href='/'>Go to HOME page</Link></li>
  <li><Link  href='/about' target='_blank'>Go to About page</Link></li>
  <li><Link href='/service' target='_blank'>Go to Service page</Link></li>
  <li><Link href='/contact'>Go to Contact page</Link></li>
  <Link href="/about/about-us" target='_blank'>About-us</Link>
</ul>
  
    
      
    </div>
  )
}

export default Homepage
