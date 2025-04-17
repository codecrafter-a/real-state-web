import React, {useState, useEffect} from 'react'
import Landregistry from './Landregistry';
import Landregistry_mobile from './Landregistry_mobile';

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
    
  return !isMobileView ? <Landregistry/> : <Landregistry_mobile/>
}

export default Landregistryen
