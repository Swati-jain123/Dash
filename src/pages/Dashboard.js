import React from 'react';
import Navbarf from './Navbarf';
import Smallnav from './Smallnav';
import Cards from './Cards';
import Barcharts from "./Barcharts";
import Piechart from "./Piechart";
import Profile from './Profile';
export default function Dashboard() {
  return (
     <div>
  

      <Navbarf/>
      <Smallnav/>
      <Cards/>
      <Barcharts/>
      <Piechart/>
      <Profile/>
    
    </div>
    
  )
}
