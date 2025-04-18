import React, {useState, useEffect} from 'react'
import Invocies from './Invocies';
import InvoicesMobile from './InvoicesMobile';

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
        
      return !isMobileView ? <Invocies/> : <InvoicesMobile/>
}

export default Invoicesen
