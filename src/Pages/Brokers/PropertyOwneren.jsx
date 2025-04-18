import React, {useState, useEffect} from 'react'
import PropertyOwner from './PropertyOwner';
import PropertyOwnermobile from './PropertyOwnermobile';

const Property_owneren = () => {
   const [isMobileView, setIsMobileView] = useState(false);
      useEffect(() => {
          const handleResize = () => {
            setIsMobileView(window.innerWidth < 867);
          };
      
          handleResize(); 
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
        }, []);
      
    return !isMobileView ? <PropertyOwner/> : <PropertyOwnermobile/>
}

export default Property_owneren
