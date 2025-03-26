import React, {useState} from 'react'
import { Col, Nav} from 'react-bootstrap';
import search from '../../assets/images/search.png';
import Tab from '../../Componant/Common/Tab/Tab';
import report from "../../assets/images/Report1.jpg";
import visa from "../../assets/images/Get a new visa.jpg";
import { useTranslation } from "react-i18next";
import Propertymatch from '../../Componant/Report/Propertymatch';
import Clientmatch from '../../Componant/Report/Clientmatch';

const Report = () => {
    const { t, i18n } = useTranslation();
    const justifyContent = i18n.language === "he" ? "start" : "end";
    const [activeTab, setActiveTab] = useState("all");
    const [propertyData, setPropertyData] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [types] = useState([
       'בית פרטי למכירה, ממ"ר',
       'בית פרטי למכירה, ממ"ר',
       'בית פרטי למכירה, ממ"ר'
      ]);

    const [clientData, setClientData] = useState(false);
    const [address] = useState([
        'Haifa, Kiryat, Nesher',
        'חיפה, קריות, נשר'
    ]);

    const handleSearch = () => {
        if (activeTab === "all") {
            const filteredProperties = types.filter(type =>
                type.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setPropertyData(filteredProperties.length > 0);
        } else if (activeTab === "recent") {
            const filteredAddress = address.filter(addr =>
                addr.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setClientData(filteredAddress.length > 0 ? filteredAddress : false);
        }
    };
  return (
    <Col className='bg-white shadow-lg rounded-3'>
       <h3 className="py-1 my-4 text-center screen-1 border-bottom d-none d-md-block"> {t("report_title")}</h3> 
       <div className='w-100 border-bottom'>
          <Nav variant="tabs" className="mx-md-3 pt-2">
          <Tab 
              className={` border-0 text-center text-md-start ${activeTab === "all" ? "active-tab" : ""}`}
              onClick={() => setActiveTab("all")}
              children= {t("tab_all")}
              tab={true}    
            />
            <Tab 
              className={`border-0 text-center text-md-start ${activeTab === "recent" ? "active-tab" : ""}`}
              onClick={() => setActiveTab("recent")}
              children={t("tab_recent")}
              tab={true}
            /> 
          </Nav>
        </div>
        <div className="custom-scrollbar overflow-y-auto overflow-x-hidden px-3 mt-4" style={{ maxHeight: "594px" }}>
            {activeTab === "all" && (
                <>
                    <div className="row px-1">
                        <div className="col-12 col-md-8">
                            <div className="mb-4 position-relative border border-[#D6D6D6] rounded py-2 px-3">
                            <div className="d-flex">
                                <input
                                type="text"
                                className="form-control border-0 p-0"
                                placeholder={t("search_placeholder_all")}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <button className="btn" type="button" onClick={handleSearch}>
                                   <img src={search} alt="Search" />
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                    { propertyData ?
                        <Propertymatch types={types}/> 
                        : 
                        <>  
                            <div>
                                <p className='fs-17 fw-normal lh-1'>{t("description_1")}</p>
                                <p className='fs-17 fw-normal lh-1'>{t("description_2")}</p>
                                <p className='fs-17 fw-normal lh-1'>{t("description_3")}</p>
                            </div>
                            <div className={`mt-5 mb-2 d-flex justify-content-${justifyContent}` }>
                               <img src={report} alt="report1" className='img-fluid h-75'/>
                            </div>
                        </>
                    }
                </>
            )}
            {activeTab === "recent" && (
                <>
                    <div className="row px-1">
                        <div className="col-12 col-md-8">
                            <div className="mb-4 position-relative border border-[#D6D6D6] rounded py-2 px-3">
                            <div className="d-flex">
                                <input
                                type="text"
                                className="form-control border-0 p-0"
                                placeholder={t("search_placeholder_recent")}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <button className="btn" type="button" onClick={handleSearch}>
                                   <img src={search} alt="Search" />
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
                {clientData ? 
                   <Clientmatch address={clientData}/> : <>
                     <div>
                        <p className='fs-17 fw-normal lh-1'>{t("description_1")}</p>
                        <p className='fs-17 fw-normal lh-1'>{t("description_4")}</p>
                        <p className='fs-17 fw-normal lh-1'>{t("description_5")}</p>
                    </div>
                    <div className={`mt-5 mb-2 d-flex justify-content-${justifyContent}` }>
                        <img src={visa} alt="visa" className='img-fluid h-75'/>
                    </div>
                   </>
                }
            </>
          )}
        
        </div>
    </Col>
  )
}

export default Report
