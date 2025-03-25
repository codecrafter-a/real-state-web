import React, {useState} from 'react';
import { Col, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Tab from '../../Componant/Common/Tab/Tab';
import search from '../../assets/images/search.png';
import "../Invocies/invocies.css";
import InvoicesTable from './InvoicesTable';
import { IoIosArrowDown } from "react-icons/io";
const Invocies = () => {
  const {t} = useTranslation();
  const [activeTab, setActiveTab] = useState("all");
  return (
    <>
      <Col>
        <p className="py-1 my-4 text-center screen-1 border-bottom">{t("invoice_title")}</p>
        <Nav variant="tabs" className="w-full row mx-md-3 pt-2 border-bottom">
          <Tab 
            className={`focus:!border-transparent hover:!border-transparent border-0 text-center text-md-start ${activeTab === "all" ? "active-tab" : ""}`}
            onClick={() => setActiveTab("all")}
            children={t("invoice_tab_title1")}
            tab={true}
          />
          <Tab 
            className={`focus:!border-transparent hover:!border-transparent border-0 text-center text-md-start ${activeTab === "recent" ? "active-tab" : ""}`}
            onClick={() => setActiveTab("recent")}
            children={t("invoice_tab_title2")}
            tab={true}    
          />
        </Nav>
        <div className="custom-scrollbar overflow-y-auto overflow-x-hidden px-3 mt-4" style={{ maxHeight: "594px" }}>
          {activeTab === "all" && (
            <>
              <div className=' d-flex justify-content-start '>
                <div className="border rounded-1 input-group responsive-width ">    
                  <input
                    type="text"
                    className="form-control border-0 "
                    id="searchInput"
                    placeholder={t("invoice_placeholder")}
                  />
                  <span className="input-group-text bg-transparent  border-0">
                    <img src={search} alt="search" />
                  </span> 
                </div>
              </div>
              <div className="d-md-none d-block">
                   <p className=' fs-16 fw-semibold lh-1 my-2 text-center text-teal'>פילטרים נוספים</p>
                   <div className='justify-content-center d-flex'><IoIosArrowDown/></div>
                </div>
              <div className=' py-4'><InvoicesTable /></div>
            </>   
          )}
          {activeTab === "recent" && (
            <div className="text-center py-4">
                <p>{t("no_invoices_page_show")}</p>
            </div>
          )}
        </div>
      </Col>
    
    </>
  )
}

export default Invocies
