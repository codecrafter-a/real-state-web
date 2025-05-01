import React, {useState, useEffect} from 'react'
import Agreements from './Agreementes';
import AgreementsMobile from './AgreementsMobile';

const Agreementsen = ({show, setShow}) => {
     const [isMobileView, setIsMobileView] = useState(false);
    useEffect(() => {
        const handleResize = () => {
          setIsMobileView(window.innerWidth < 867);
        };
    
        handleResize(); 
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
  return !isMobileView ? <Agreements/> : <AgreementsMobile show={show} setShow={setShow}/>
}

export default Agreementsen
