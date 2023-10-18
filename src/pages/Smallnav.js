import React from 'react'
import "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiBell } from "react-icons/bi";
import {BiUserCircle} from "react-icons/bi";
import "./Smallnav.css"
export default function Smallnav() {
  return (
    <div>
    <nav className="navbar navbar-light bg-light" id="bar">
  <div className="container-fluid">
    <a className="navbar-brand">Dashboard</a>
    <form className="d-flex">
      <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
      <BiBell style={{height:"40px",width:"40px"}}/> &nbsp;
      <BiUserCircle style={{height:"40px",width:"40px"}}/>
      
   </form>
   </div>
     </nav>
    </div>
  )
}
