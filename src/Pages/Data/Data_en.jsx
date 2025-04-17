import React, {useState, useEffect} from "react";
import Data_mobile from "./Data_mobile";
import Data from "./Data";
const Data_en = () => {
     const [isMobileView, setIsMobileView] = useState(false);
        useEffect(() => {
            const handleResize = () => {
              setIsMobileView(window.innerWidth < 867);
            };
        
            handleResize(); 
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
          }, []);
        
      return !isMobileView ? <Data/> : <Data_mobile/>
}

export default Data_en;
