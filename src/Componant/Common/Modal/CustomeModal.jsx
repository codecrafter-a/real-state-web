import React from "react";
import Close from "../../../assets/images/Close.jpg";
import { motion } from "framer-motion";
const CustomModal = ({ show, handleClose, title, children, footer, onClick, footer1, header }) => {
  if (!show) return null;

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50" style={{ zIndex: 999 }}>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white rounded-3 p-4"
        style={{ maxWidth: "auto", boxShadow: "0 0 10px rgba(85, 205, 133, 0.8)" }}
      >
        <div>
          <div className="d-flex justify-content-between align-items-center pb-3">
            <button onClick={handleClose} className="btn p-0">
              <img src={Close} alt="close btn" />
            </button>
            {header && (
              <button onClick={handleClose} className="btn text-secondary">
                {header}
              </button>
            )}
          </div>
          <div className="text-center my-2">
            {title && <h2 className="h5 fw-semibold">{title}</h2>}
          </div>
        </div>
        <div className="pb-4 text-center">{children}</div>
        <div className="d-flex justify-content-between gap-3 mt-4">
          {footer && (
            <button className="btn btn-success text-white px-4 py-2 rounded-pill" onClick={handleClose}>
              {footer}
            </button>
          )}
          {footer1 && (
            <button className="btn btn-outline-success px-4 py-2 rounded-pill" onClick={onClick}>
              {footer1}
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};



export default CustomModal;
