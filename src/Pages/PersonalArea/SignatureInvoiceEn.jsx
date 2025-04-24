import React, {useState, useEffect} from 'react'
import SignatureInvoiceMobile from './SignatureInvoiceMobile';
import SignatureInvoice from './SignatureInvoice';

const SignatureInvoiceEn = () => {
  const [active, setActive] = useState("");
      useEffect(() => {
           const handleResize = () => {
              setActive(window.innerWidth < 867);
           };
       
           handleResize(); 
           window.addEventListener("resize", handleResize);
           return () => window.removeEventListener("resize", handleResize);
         }, []);

   return active ? <SignatureInvoiceMobile/> : <SignatureInvoice/>
}

export default SignatureInvoiceEn
