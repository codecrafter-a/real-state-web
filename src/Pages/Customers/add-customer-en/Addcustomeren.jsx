import React, { useState, useEffect } from "react";
import DesktopView from "./AddCustomerDesktop";
import MobileView from "./AddCustomerMobile";

const AddCustomer = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 867);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobileView ? <MobileView /> : <DesktopView />;
};

export default AddCustomer;