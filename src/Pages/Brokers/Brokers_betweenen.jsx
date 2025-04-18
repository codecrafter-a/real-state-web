import React, {useState, useEffect} from 'react'
import BrokersBetweenmobile from './BrokersBetweenmobile';
import BrokersBetween from "./BrokersBetween";
const Brokers_betweenen = () => {
     const [isMobileView, setIsMobileView] = useState(false);
        useEffect(() => {
            const handleResize = () => {
              setIsMobileView(window.innerWidth < 867);
            };
        
            handleResize(); 
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
          }, []);
        
      return !isMobileView ? <BrokersBetween/> : <BrokersBetweenmobile/>
}

export default Brokers_betweenen
