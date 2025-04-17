import React, {useState, useEffect} from 'react'
import CustomerMobile from './CustomerMobile';
import Customer from './Customers';

const Customeren = () => {
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobileView(window.innerWidth < 867);
      };
  
      handleResize(); 
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return isMobileView ? <CustomerMobile /> : <Customer />;
  };


export default Customeren;
