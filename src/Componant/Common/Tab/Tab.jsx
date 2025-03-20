import { Nav } from "react-bootstrap";
import React from 'react'
const Tab = ({children , onClick, className}) => {
  return (
   <>
    <Nav variant="" className="d-flex px-3 pt-2 px-md-4 border-bottom">
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
