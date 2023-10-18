import React from 'react'
import './Home.css';
 import { SocialIcon } from 'react-social-icons';
import Signup from './Signup';

export default function Home() {
  return (
    
    <div className="Main">
      <div className='left-side'>
        <h1> Board.</h1>

        <div className='flex' >
          <SocialIcon bgColor='white' fgColor='#3A9BDC' url="www.github.com" />
          <SocialIcon bgColor='white' fgColor='#3A9BDC' url="www.twitter.com" />
          <SocialIcon bgColor='white' fgColor='#3A9BDC' url="www.linkedin.com" />
          <SocialIcon bgColor='white' fgColor='#3A9BDC' url="www.discord.com" />
        </div>

      </div>

      <div className='right-side'>
       <Signup/>
    
      </div>
    </div>
   
   

    

    
  )
}
