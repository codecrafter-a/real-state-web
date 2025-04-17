import React, {useState, useEffect} from 'react'
import Invocies from './Invocies';
import Invoices_mobile from './Invoices_mobile';

const Invoicesen = () => {
    const [isMobileView, setIsMobileView] = useState(false);
        useEffect(() => {
            const handleResize = () => {
              setIsMobileView(window.innerWidth < 867);
            };
        
            handleResize(); 
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
          }, []);
        
      return !isMobileView ? <Invocies/> : <Invoices_mobile/>
}

export default Invoicesen
