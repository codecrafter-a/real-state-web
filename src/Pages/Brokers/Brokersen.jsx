import React, {useState, useEffect} from 'react'
import Brokers from './Brokers';
import Brokersmobile from './Brokersmobile';

const Brokersen = () => {
    const [isMobileView, setIsMobileView] = useState(false);
    useEffect(() => {
        const handleResize = () => {
          setIsMobileView(window.innerWidth < 867);
        };
    
        handleResize(); 
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
  return !isMobileView ? <Brokers/> : <Brokersmobile/>
}

export default Brokersen
