import React, {useState, useEffect} from 'react'
import AgentManagementmobile from './AgentManagementmobile';
import AgentManagement from './AgentManagement';

const AgentMangementEn = () => {
   const [active, setActive] = useState("");
    useEffect(() => {
         const handleResize = () => {
            setActive(window.innerWidth < 867);
         };
     
         handleResize(); 
         window.addEventListener("resize", handleResize);
         return () => window.removeEventListener("resize", handleResize);
       }, []);
       return active ? <AgentManagementmobile/> : <AgentManagement/>
}
  
export default AgentMangementEn;
