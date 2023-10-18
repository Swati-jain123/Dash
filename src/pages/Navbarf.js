import React from 'react'
import './navbar.css'
import {CiSettings} from "react-icons/ci";
import{CiClock2} from "react-icons/ci";
import {CiUser} from "react-icons/ci";
import {FiFolderPlus} from "react-icons/fi";
import {BiPurchaseTagAlt} from "react-icons/bi";
export default function Navbarf() {
  return (
 
    <>
    <div className="sidenav">
       
    <h2 className='board'>Board.</h2> 
    <a href="#about"> < CiClock2/> &nbsp; Dashboard</a>
    <a href="#services">< BiPurchaseTagAlt/>&nbsp; Transactions</a>
    <a href="#clients"><FiFolderPlus/>&nbsp; Schedules</a>
    <a href="#contact"><CiUser/>&nbsp; Users</a>
    
    <a href="#contact"> <CiSettings/>&nbsp; Settings</a>


    <div className='smallside'>
    <a href="#contact">Help</a>
    
    <a href="#contact">Contact us</a>
    </div>
    
</div></>


  )
}
