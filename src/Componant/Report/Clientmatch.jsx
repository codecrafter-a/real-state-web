import React, { useState } from "react";
import house from "../../assets/images/property-house.png";
import {
  Card,
  Col,
  Badge,
} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import DataTable from "./Reporttable";
import greek from "../../assets/images/greek.png";

const Clientmatch = ({ properties }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {properties.map((property) => (
          <Card key={property.id} className="mb-3 d-none d-md-block shadow-sm border my-2 rounded-4">
            <div className="border-0">
              <div className="border-0 rounded-4">
                <div
                  className="accordion-header cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <div className="d-flex flex-column flex-md-row justify-content-between p-3">
                    <div className="d-flex w-100 gap-4">
                      {isOpen && (
                        <Col md={3}>
                          <div className=" px-2">
                            <Card.Img
                              variant="top"
                              src={house}
                              alt="Property"
                              className="img-fluid border rounded-2 w-100 object-fit-cover "
                              style={{ height: "140px"}}
                            />
                          </div>
                        </Col>
                      )}
                      <div className={`${isOpen ? 'd-flex flex-column justify-content-between' : 'd-flex gap-4'}`}>
                        <div className={`${isOpen ? 'd-flex flex-column gap-2' : 'd-flex gap-4 align-items-center'}`}>
                          <p className="lh-1 fs-17 fw-semibold text-success text-md-start mb-0">
                            {property.address}
                          </p>
                          <div className={`d-flex flex-column ${isOpen ? 'gap-2' : ''}`}>
                            <p className="lh-1 fs-15 fw-normal text-md-start mb-0">
                              {property.type}
                            </p>
                            <p className="lh-1 fs-15 fw-normal text-md-start mb-0">
                              {property.details} |  {property.subTitle}
                              
                            </p>
                            
                          </div>
                        </div>
                        <div className="d-flex gap-2 flex-wrap align-items-center">
                          {property.features.map((feature, index) => (
                            <Badge key={index} bg="light" text="dark" className="h-fit fw-normal">
                              {t(feature)}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      {isOpen && (
                        <div className="col-md-5">
                          <div className="fw-normal lh-1 fs-12 text-md-start">
                            {property.description}
                            <p className="my-1 py-2 fw-normal lh-1 fs-12 text-md-start">
                                {property.rowHouseDescription}
                              </p>
                          </div>
                        </div>
                      )}

                    </div>
                    <div className="col-md-1 d-flex flex-column justify-content-between">
                      <div className="d-flex justify-content-end">
                        <img src={greek} alt="greek arrow" className="img-fluid" />
                      </div>
                      <div className="row">
                        <div className="d-flex justify-content-between align-items-center flex-wrap w-100">
                          <h2 className="fs-5 fw-bold lh-1 text-lg-end">{property.price2}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
      ))}

      {properties.length > 0 && (
        <>
          <p className="py-1 my-4 d-none d-md-block fs-5 fw-semibold lh-1 text-teal text-center">
            {t("potential_clients")}
          </p>
          <div className="my-3 d-none d-md-block">
            <DataTable
              data={properties.map(prop => ({
                area: prop.address,
                clientInfo: prop.clientInfo
              }))}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Clientmatch;