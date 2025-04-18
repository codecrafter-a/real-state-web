import React, {useState, useEffect} from 'react'
import { Card, Accordion, AccordionItem, AccordionBody, AccordionHeader, Badge, Button } from 'react-bootstrap';
import house from "../../assets/images/property-house.png";
import { useReportServices } from '../../Services/ReportServices';
import { useTranslation } from "react-i18next";
const Clientmatch_mobile = () => {
    const [reportData, setReportData] = useState([]);
    const { getReportServices } = useReportServices();
    const { t } = useTranslation();      
    useEffect( () => {
     const data = getReportServices();
     setReportData(data);
    }, [getReportServices]);
  return (
     <>
        <div className='row '>
            <div className=' col-12'>
                <div className="p-3 bg-white border shadow my-3 rounded-3">
                    <Card.Img
                        variant="top"
                        src={house}
                        alt="Property"
                        className="img-fluid border rounded-2 object-fit-cover w-100"
                        style={{ height: "200px" }}
                    />
                    <Accordion className="border-0 d-block d-md-none">
                <AccordionItem className="border-0">
                <div className="d-flex justify-content-between py-2 px-3 gap-3 align-items-center">
                    <h5 className="mb-1 fw-bold text-success fs-6">
                    {t("address")}
                    </h5>
                    <h5 className="fw-bold fs-5 lh-1">{t("price1")}</h5>
                </div>
                <AccordionHeader className="border-0 ">
                    <div className="d-flex flex-column">
                    <p className=" fs-15 fw-normal lh-1 mb-1"></p>
                    <p className="fs-15 fw-normal lh-1 mb-2">{t("rooms")} </p>
                    </div>
                </AccordionHeader>
                <AccordionBody>
                    <div className="mb-2">
                    <Badge bg="light" text="dark" className="me-2">
                        {t("garage1")}
                    </Badge>
                    <Badge bg="light" text="dark" className="me-2">
                        {t("balcony1")}
                    </Badge>
                    <Badge bg="light" text="dark">
                        {t("secure_room1")}
                    </Badge>
                    </div>
                    <p className="small text-muted">{t("description")}</p>
                    <div className="justify-content-center d-flex">
                    <button className=" agent-btn-responsive1 w-75 py-1 rounded-pill text-white">
                        {t("send1_to_client")}
                    </button>
                    </div>
                </AccordionBody>
                </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
        <p className="py-1 my-4  fs-5 fw-semibold lh-1 text-teal">{t("potential_clients")} </p>
        <Accordion className="d-block p-0 d-md-none d-flex flex-column gap-3">
            {reportData.map((row, index) => (
                <Accordion.Item
                  eventKey={index.toString()}
                  key={row.id}
                  className="border-2  border-top rounded-3 overflow-visible"
                >     
                  <Accordion.Header>
                    <div>
                      <p className='fw-semibold lh-1 fs-6 mb-0'>{t("customer_name")}</p>
                      <p className=' fw-normal fs-6 lh-1 my-1'>{t("client_property_type")}</p>
                      <p className='fw-normal fs-15 lh-1 mb-0'>{row.phone}</p>
                    </div>
                  </Accordion.Header>
                    <Accordion.Body className="p-0">
                        <div className="px-3 border-bottom">
                        <div>
                            {row.details.features.map((feature, index) => {
                            return (<>
                                <Button
                                    key={index}
                                    
                                    className='bg-success bg-opacity-10 fw-bold border-success text-success'
                                >
                                    {feature}
                                </Button>
                            </>)
                            })}
                            <div >
                            {row.details.comments}
                            </div>
                        </div> 
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
     </>
  )
}

export default Clientmatch_mobile
