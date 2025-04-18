import React, {useState, useEffect} from 'react'
import Landregistry from './Landregistry';
import LandregistryMobile from './LandregistryMobile';

const Landregistryen = () => {
    const [isMobileView, setIsMobileView] = useState(false);
    useEffect(() => {
        const handleResize = () => {
          setIsMobileView(window.innerWidth < 867);
        };
    
        handleResize(); 
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
  return !isMobileView ? <Landregistry/> : <LandregistryMobile/>
}

export default Landregistryen
