import React, { useState } from 'react';
import report from "../../assets/images/Report1.jpg";
import visa from "../../assets/images/Get a new visa.jpg";
import { useTranslation } from "react-i18next";
import './Report.css';
import ClientmatchMobile from '../../Componant/Report/ClientmatchMobile';
import PropertymatchMobile from '../../Componant/Report/PropertymatchMobile';

const Report_mobile = () => {
  const { t, i18n } = useTranslation();
      const justifyContent = i18n.language === "he" ? "start" : "end";
      const [activeTab, setActiveTab] = useState("all");
      const [selectedSuggestion, setSelectedSuggestion] = useState(null);
      const [selectedProperties, setSelectedProperties] = useState([]);
      const [searchTermRecent, setSearchTermRecent] = useState("");
      const [filteredProperties, setFilteredProperties] = useState([]);
  return (
    <>
      <div className='bg-white shadow-lg rounded-3 px-3'>
          {activeTab === "recent" && (
                         searchTermRecent.trim() !== "" ? (
                             filteredProperties.length > 0 ? (
                                 <div className="d-block d-md-none">
                                     <ClientmatchMobile properties={filteredProperties} />
                                 </div>
                             ) : (
                                 null
                             )
                         ) : <div className={`mt-5 mb-2 d-block d-md-none justify-content-${justifyContent}`}>
                             <img src={visa} alt="report" className="img-fluid h-75" />
                         </div>
                     )}
         
                     {activeTab === "all" && (
                         selectedSuggestion ? (
                             <>
                                 <div className=' d-block d-md-none'>
                                     <PropertymatchMobile properties={selectedProperties} />
                                 </div>
                             </>
                         ) : (
                             <>
                                 <div className={`mt-5 mb-2 d-block d-md-none justify-content-${justifyContent}`}>
                                     <img src={report} alt="visa" className='img-fluid h-75' />
                                 </div>
                             </>
                         )
                     )}
                     <div className="w-100   py-2 bg-[#FFFFFFD6] d-flex justify-content-center" style={{ position: "sticky", bottom: "0" }}>
                         <button className="agent-btn-responsive1 text-white fw-bold h-25 shadow w-25 py-2 mt-3 rounded-pill">{t("send_btn")}</button>
                     </div>
      </div>
    </>
  )
}

export default Report_mobile
