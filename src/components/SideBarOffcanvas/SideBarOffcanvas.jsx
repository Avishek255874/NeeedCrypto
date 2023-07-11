import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import "./SideBarOffcanvas.css"
import Offcanvas from 'react-bootstrap/Offcanvas';
import SideBar from '../Sidebar/SideBar';


const SideBarOffcanvas = ({show,handleClose}) => {
  return (
    <Offcanvas show={show} onHide={handleClose}   className="OffcanvasStyle">
        
        <Offcanvas.Body>
          <SideBar/>
        </Offcanvas.Body>
      </Offcanvas>
  )
}

export default SideBarOffcanvas