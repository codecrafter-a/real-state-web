import React, {useState, useEffect} from 'react';
import { Col, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Tab from '../../Componant/Common/Tab/Tab';
import search from '../../assets/images/search.png';
import "../Invocies/invocies.css";
import InvoicesTable from './InvoicesTable';
import { IoIosArrowDown } from "react-icons/io";
import { useInvoiceServices } from '../../Services/InvoicesServices';
import { Button, Accordion } from 'react-bootstrap';
import { FaEye, FaDownload } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
const Invocies = () => {
  const {t} = useTranslation();
  const [activeTab, setActiveTab] = useState("all");
  const [invoiceData, setInvoiceData] = useState([])
  const { getInvoiceService } = useInvoiceServices();

  useEffect(() => {
      const data = getInvoiceService();
      setInvoiceData(data)
    }, []);
  
  return (
    <>
      <Col className='bg-white shadow-lg rounded-3 my-3'>
        <p className="py-1 my-4 text-center screen-1 border-bottom d-none d-md-block">{t("invoice_title")}</p>
        <div className='w-100 border-bottom'>
          <Nav variant="tabs" className="mx-md-3 pt-2">
            <Tab 
              className={`border-0 text-center text-md-start ${activeTab === "recent" ? "active-tab" : ""}`}
              onClick={() => setActiveTab("recent")}
              children={t("invoice_tab_title2")}
              tab={true}
            />
            <Tab 
              className={` border-0 text-center text-md-start ${activeTab === "all" ? "active-tab" : ""}`}
              onClick={() => setActiveTab("all")}
              children={t("invoice_tab_title1")}
              tab={true}    
            />
          </Nav>
        </div>
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
      <Accordion className="d-block p-0 d-md-none d-flex flex-column gap-3">
        {invoiceData.map((row, index) => (
          <Accordion.Item
            eventKey={index.toString()}
            key={row.id}
            className="border-2  border-top rounded-3 overflow-visible"
          >
            <Accordion.Header>
              <div>
                <span className="fw-semibold fs-14 d-block">
                   {row?.accountNumber} | {row?.date} 
                </span>
                <p className="fw-semibold fs-14 mb-0">
                  {t("client_names")}: <span className="fw-light">{t(row?.clientNames)}</span>
                </p>
              </div>
            </Accordion.Header>
            <Accordion.Body className="p-0">
              <div className="px-3 border-bottom">
                <p className="m-0">
                  <strong>{t("subject")}:</strong> {t(row?.subject || "N/A")}
                </p>
                <p className="m-0">
                  <strong>{t("amount")}:</strong> {row?.amount || "N/A"}
                </p>
              </div>
              <div className="border-top p-2 bg-light">
                <div className="d-flex justify-content-around  w-100">
                  <Button className="btn btn-light d-flex align-items-center p-1">
                    <FaEye size={16} />
                    <span className="fs-14 fw-normal lh-1">{t("view")}</span>
                  </Button>
                  <Button className="btn btn-light d-flex align-items-center p-1">
                    <MdEmail size={18} />
                    <span className="fs-14 fw-normal lh-1">{t("send_to_client")}</span>
                  </Button>
                  <Button className="btn btn-light d-flex align-items-center p-1">
                    <FaDownload size={16} />
                    <span className="fs-14 fw-normal lh-1">{t("download")}</span>
                  </Button>
                  <Button className="btn btn-light d-flex align-items-center p-1">
                    <BsWhatsapp size={16} />
                    <span className="fs-14 fw-normal lh-1">{t("share")}</span>
                  </Button>
                </div>
              </div>
          </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  )
}

export default Invocies
