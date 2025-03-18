import React from "react";
import { Modal } from "react-bootstrap";

const AgentGraphModal = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} centered className="agent-modal-container">
            <Modal.Header className="border-0 p-3 position-relative mt-4">
                <button type="button" className="btn-close position-absolute close-btn" onClick={handleClose}></button>
            </Modal.Header>
            <Modal.Body className="text-center py-0">
                <h5 className="fw-semibold">הדאשבור של רומי שפן</h5>
                <div className="mt-4 box1_color p-3 rounded-2">
                    <div className="d-flex align-items-center justify-content-center">
                        <div>
                            <h5 className="fw-bold text-teal">עמלות ועסקאות שיצאו לפועל </h5>
                            <div className="mt-3 d-flex align-items-center justify-content-center gap-4">
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="border-top-0 justify-content-center">
                <button className="px-4 py-2 text-white bg-teal border-teal rounded-pill fw-semibold" onClick={handleClose}>
                    לדאשבורד המלא של רומי
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default AgentGraphModal;
