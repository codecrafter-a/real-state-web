import React from 'react';
import {Accordion, AccordionItem, AccordionHeader, AccordionBody, Badge} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import house from "../../assets/images/property-house.png";
const Propertymatch_mobile = ({ properties }) => {
      const { t } = useTranslation();
  return (
    <div>
      <p className=" my-2 text-center text-teal fw-semibold fs-5 lh-1">
        {t("potential_properties")}
      </p>
      <div className='row'>
         {properties &&
          properties?.map((property, index) => {
            return(<>
                <div className="p-3 bg-white border shadow my-3 rounded-3" key={index}>
                  <img
                    variant="top"
                    src={house}
                    alt="Property"
                    className="img-fluid border rounded-2"
                    style={{ height: "200px", objectFit: "cover" }}
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
                          <p className=" fs-15 fw-normal lh-1 mb-1">{t(property.address)}</p>
                          <p className="fs-15 fw-normal lh-1 mb-2">
                            {t("rooms")}{" "}
                          </p>
                        </div>
                      </AccordionHeader>
                      <AccordionBody>
                        <div className="mb-2">
                          <Badge bg="light" text="dark" className="me-2">
                            {t("garage")}
                          </Badge>
                          <Badge bg="light" text="dark" className="me-2">
                            {t("balcony")}
                          </Badge>
                          <Badge bg="light" text="dark">
                            {t("secure_room")}
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
            </>)
          })
         }
      </div>
    </div>
  )
}

export default Propertymatch_mobile
