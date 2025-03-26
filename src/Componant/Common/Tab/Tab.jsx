import { Nav } from "react-bootstrap";
import React from 'react'
const Tab = ({children , onClick, className, tab}) => {
  return (
   <>
    <Nav variant="" className={`${tab ? "pt-2 px-0 row col col-md-2" : "px-3 pt-2 px-md-4"}`}>
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
