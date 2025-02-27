import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../Modal/modal.css"

const   CustomModal = ({ show, handleClose, title, children, footer, onClick, footer1 }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
   
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {children}
          <div className="d-flex justify-content-center gap-3 mt-3">
            
          </div>
        </Modal.Body>
      <Modal.Footer>
        <Button className="btn_cmn_56 rounded-pill " data-bs-dismiss="modal" onClick={handleClose}>{footer}</Button> 
          <Button variant="outline-success" className="btn_bor rounded-pill" onClick={onClick}>
            {footer1} 
          </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
