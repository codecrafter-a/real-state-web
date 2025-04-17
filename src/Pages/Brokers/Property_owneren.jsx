import React, {useState, useEffect} from 'react'
import Property_owner from './Property_owner';
import Property_ownermobile from './Property_ownermobile';

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
      
    return !isMobileView ? <Property_owner/> : <Property_ownermobile/>
}

export default Property_owneren
