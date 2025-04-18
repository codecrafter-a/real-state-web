import React, {useState, useEffect} from 'react'
import Report from './Report';
import ReportMobile from './ReportMobile';

const ReportEn = () => {
    const [isMobileView, setIsMobileView] = useState(false);
    useEffect(() => {
        const handleResize = () => {
          setIsMobileView(window.innerWidth < 867);
        };
    
        handleResize(); 
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    
  return !isMobileView ? <Report/> : <ReportMobile/>
}

export default ReportEn
