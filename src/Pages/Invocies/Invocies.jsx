import React, {useState} from 'react';
import { Col, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Tab from '../../Componant/Common/Tab/Tab';
import search from '../../assets/images/search.png';
import "../Invocies/invocies.css";
import InvoicesTable from './InvoicesTable';
const Invocies = () => {
  const {t} = useTranslation();
  const [activeTab, setActiveTab] = useState("all");
  return (
    <>
      <Col>
        <p className="py-3 my-4 text-center container-fluid screen-1 border-bottom">{t("invoice_title")}</p>
        <Nav variant="tabs" className="d-flex px-3 pt-2 px-md-4 border-bottom">
          <Tab 
            className={`px-3 focus:!border-transparent hover:!border-transparent ${activeTab === "all" ? "active-tab" : ""}`}
            onClick={() => setActiveTab("all")}
            children={t("invoice_tab_title1")}
          />
          <Tab 
            className={`px-3 focus:!border-transparent hover:!border-transparent ${activeTab === "recent" ? "active-tab" : ""}`}
            onClick={() => setActiveTab("recent")}
            children={t("invoice_tab_title2")}
          />
        </Nav>
        <div className=' tab-content mt-4'>
          {activeTab === "all" && (
            <>
              <div className=' d-flex justify-content-end '>
                <div className=" input-group w-75">
                  <span className="input-group-text bg-transparent border-1  border-end-0">
                    <img src={search} alt="search" />
                  </span>   
                  <input
                    type="text"
                    className="form-control border-start-0 text-end"
                    id="searchInput"
                    placeholder={t("invoice_placeholder")}
                  />
                </div>
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
