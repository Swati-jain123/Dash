import React, { useState } from 'react'
import "react-bootstrap"
import { Button } from "@material-ui/core";
import {Modal,ModalBody,ModalHeader,Row,Col} from "reactstrap";
import { CiCirclePlus } from "react-icons/ci";
import { SocialIcon } from 'react-social-icons';
import "./Profile.css"
export default function Profile() {
  const[modal,setModal]=useState(false)
  const [toggle, setToggle]=useState(1)
  function updateToggle(id){
    setToggle(id);
  
  }
 

  const[data,setData]=useState(null);
  const[phone,setPhone]=useState(null);
  const[insta,setInsta]=useState(null);
  const[youtube,setYoutube]=useState(null);
  const[print,setPrint]=useState(false);

  function getData(val){
    setData(val.target.value);
    setPrint(false);
  }
  function getPhone(val){
    setPhone(val.target.value);
    setPrint(false);
  }
  function getInsta(val){
    setInsta(val.target.value);
    setPrint(false);
  }
  function getYoutube(val){
    setYoutube(val.target.value);
    setPrint(false);
  }
  return (
    <div>
      <Modal 
    
      isOpen={modal}
      toggle={()=>setModal(!modal)}
      >

        <ModalHeader
        toggle={()=>setModal(!modal)}>
          Add New Profile
        </ModalHeader>
        <ModalBody >
          <form>
            <Row>
              <div className='col-12 tab '>
              <ul className='d-flex' style={{marginLeft:"-20px"}}>
              <li className='flex-fill'onClick={()=>updateToggle(1)}>Basic</li>
              <li className='flex-fill' onClick={()=>updateToggle(2)}>Social</li>
              
              </ul>
              <Col lg={12}>
                <div className={toggle===1 ? "show-content" : "content"}>
                <div >
                  <label htmlFor='name'>
                    Name
                  </label>
                  <input type='text' className='form-control'style={{margin:"20px 0px"}} placeholder='Eg:John Doe' required/>
                  
                </div>
                <div>
                  <label htmlFor='email'>
                    Enter Email
                  </label>
                  <input type='email' required className='form-control'style={{margin:"20px 0px"}} placeholder='Eg:John@xyz.com' onChange={getData} />
                </div>
                <div>
                  <label htmlFor='password'>
                    Enter Phone
                  </label>
                  <input type='phone' className='form-control' placeholder='Eg. 9123456416' onChange={getPhone} required/>
                </div>
                <div style={{display:"flex",justifyContent:"flex-end"}}>
                <Button color='Primary' variant="contained"style={{width:"100px",marginTop:"10px"}} onClick={()=>updateToggle(2)}>Next </Button>
         
                </div>
               </div>

              <div className={toggle=== 2 ? "show-content": "content"}>
                <div style={{margin:"20px 0px"}}>
                  <label htmlFor='name'>
                    Instagram Link(Optional)
                  </label>
                  <input type='text' className='form-control' style={{margin:"20px 0px"}}placeholder='Eg..instagram.com/username'  onChange={getInsta}/>
                </div>
                <div style={{margin:"20px 0px"}}>
                  <label htmlFor='email'>
                    YouTube Link(Optional)
                  </label>
                  <input type='text' className='form-control' style={{margin:"20px 0px"}}placeholder='Eg. youtube/username' onChange={getYoutube}/>
                </div>
                <div style={{display:"flex",justifyContent:"flex-end",marginTop:"10px"}}>
                <Button color='Black' onClick={()=>updateToggle(1)} variant="contained" style={{width:"100px",marginRight:"10px"}}>Back </Button>
                <Button color='Primary' onClick={()=>setPrint(true)}  variant="contained"style={{width:"100px"}}>Done </Button>
                </div>
              </div>
              </Col>
              </div>
            </Row>
          </form>
        </ModalBody>
      </Modal>
        {
          print?
          <>
          <div className="dall">

            <div className='phone'>
              <div>
                
          <SocialIcon bgColor='white' fgColor='#3A9BDC' url="www.whatsapp.com" />
          {phone}
              </div>
              <div>
              
          <SocialIcon bgColor='white' fgColor='Red' url="www.instagram.com" />
          {insta}
              </div>
            </div>
            <div className='phone'> 
            <div>
            <SocialIcon bgColor='white' fgColor='blue' url="www.email.com" />
          
            {data}
            </div>
            <div>
            <SocialIcon bgColor='white' fgColor='red' url="www.youtube.com" />
          
            {youtube}
            </div>
      
            </div>
          
            </div>
           </> :
          <Button id="d" onClick={()=>setModal(true)}> Add Profile</Button>
        
        }
         
    </div>
  )
}
