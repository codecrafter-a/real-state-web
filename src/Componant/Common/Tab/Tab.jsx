import { Nav } from "react-bootstrap";
import React from 'react'
const Tab = ({children , onClick, className, tab}) => {
  return (
   <>
    <Nav variant="" className={`${tab ? "pt-2 border-bottom col d-block px-0" : "d-flex px-3 pt-2 px-md-4 border-bottom"}`}>
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
