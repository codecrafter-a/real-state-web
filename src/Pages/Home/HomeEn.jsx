import React, {useState, useEffect} from 'react'
import HomeMobile from './HomeMobile';
import Home from './Home';
const HomeEn = () => {
  const [isMobileView, setIsMobileView] = useState(false);
      useEffect(() => {
          const handleResize = () => {
            setIsMobileView(window.innerWidth < 768);
          };
      
          handleResize(); 
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
        }, []);
      
    return !isMobileView ? <Home/> : <HomeMobile/>
}

export default HomeEn
