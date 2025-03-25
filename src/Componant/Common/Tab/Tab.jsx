import { Nav } from "react-bootstrap";
import React from 'react'
const Tab = ({children , onClick, className, tab}) => {
  return (
   <>
    <Nav variant="" className={`border-bottom ${tab ? "pt-2 col px-0" : "px-3 pt-2 px-md-4"} d-flex d-md-block`}>
        <Nav.Item>
            <Nav.Link className={className} onClick={onClick} >
                {children}
            </Nav.Link> 
        </Nav.Item>
    </Nav>
   </>
  )
}

export default Tab
