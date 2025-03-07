import React from 'react'
import { Col } from 'react-bootstrap'
const Datacard = ({ amount, text, icon }) => {
  return (
    <Col className="col-12 col-sm-12 col-md-6 col-lg-4 my-1 py-2">
      <div className="border rounded-3 bg-white d-flex px-3 py-3 justify-content-between">
        <div><img src={icon} alt="icon" /></div>
        <div className="text-end">
          <h5 className="screen-6">{amount}</h5>
          <p className="screen-3 mb-0">{text}</p>
        </div>
      </div>
    </Col>
  )
}

export default Datacard;
