import React, {useState, useEffect} from 'react'
import Allproperty from './Allproperty';
import Allpropertymobile from './Allpropertymobile';

const Allpropertyen = () => {
    const [isMobileView, setIsMobileView] = useState(false);
        useEffect(() => {
            const handleResize = () => {
              setIsMobileView(window.innerWidth < 867);
            };
        
            handleResize(); 
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
          }, []);
        
      return !isMobileView ? <Allproperty/> : <Allpropertymobile/>
}

export default Allpropertyen
