import React from "react";
import { Modal, Button } from "react-bootstrap";

const CustomModal = ({ show, handleClose, title, children, footer }) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      {footer && (
        <Modal.Footer>
          {footer}
          <Button variant="outline-success" pill onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default CustomModal;
