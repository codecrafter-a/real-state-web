import React from "react";
import Close from "../../../assets/images/Close.jpg";
import { motion } from "framer-motion";
const CustomModal = ({ show, handleClose, title, children, footer, onClick, footer1, header }) => {
  if (!show) return null;

  return (
    <div 
    className="fixed inset-0 flex w-full items-center justify-center bg-black bg-opacity-50 z-[1000] ">
    <motion.div
      initial={{ y: -50, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }}   
      transition={{ duration: 0.3, ease: "easeOut" }} 
      className="bg-white shadow-[0_0_10px_rgba(85,205,133,0.8)] rounded-xl max-w-auto p-6"
    >
      <div>
        <div className="flex justify-between items-center pb-3">
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700 w-10 h-10">
            <img src={Close} alt="close btn" />
          </button>
          {header && <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">{header}</button>}
        </div>
        <div className=" text-center my-2">
          {title && <h2 className="text-lg font-semibold">{title}</h2>}
        </div>
      </div>
      <div className=" pb-4 text-center">
        {children}
        </div>
      <div className="flex justify-between gap-4 mt-4">
        {footer && (
          <button className="bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-[#55CD85]" onClick={handleClose}>
            {footer}
          </button>
        )}
        {footer1 && (
          <button className="border border-emerald-500 text-emerald-500 px-4 py-2 rounded-full hover:bg-[#55CD85] hover:text-white" onClick={onClick}>
            {footer1}
          </button>
        )}
      </div>
    </motion.div>
    </div>
);
};

  

export default CustomModal;
