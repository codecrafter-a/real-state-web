import React from "react";
import house from "../../assets/images/property-house.png";
import {
  Card,
  Row,
  Col,
  Badge,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import DataTable from "./Reporttable";
import greek from "../../assets/images/greek.png";
const Clientmatch = ({ address }) => {
  const { t } = useTranslation();

  return (
   
    <div>
      <Card className=" mb-3 d-none d-md-block shadow-sm border my-2 rounded-4">
        <Row className="align-items-center gx-md-3 gx-lg-4">
          <Col md={3}>
            <div className="p-3">
              <Card.Img
                variant="top"
                src={house}
                alt="Property"
                className="img-fluid border rounded-2 object-fit-cover w-100"
                style={{ height: "200px" }}
              />
            </div>
          </Col>
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
          <Col md={9} className="d-none d-md-block">
            <div className="d-flex flex-column flex-md-row justify-content-between px-3">
              <div className="col-md-3">
                <div className="d-flex flex-column">
                  <p className="lh-1 fs-17 fw-semibold text-success text-md-start">
                    {t("property_address")}
                  </p>
                  <p className="lh-1 fs-15 fw-normal text-md-start">
                    {t("property_type")}
                  </p>
                  <p className="lh-1 fs-15 fw-normal text-md-start">
                    {t("property_details")}
                  </p>
                </div>
              </div>
              <div className="col-md-8">
                <p className="fw-normal lh-1 fs-12 text-md-start">
                  {t("property_description")}
                  <span>{t("furniture_details")}</span>
                </p>
              </div>
              <div className="col-md-1">
                <div className=" d-flex justify-content-end">
                   <img src={greek} alt="greek arrow" className="img-fluid" />
                </div>
              </div>
            </div>

            <div className="row px-3">
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="d-flex gap-2 flex-wrap">
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
                <h2 className="fs-5 fw-bold lh-1 text-lg-end">{t("price2")}</h2>
              </div>
            </div>
          </Col>
        </Row>
      </Card>
      <p className="py-1 my-4 d-none d-md-block fs-5 fw-semibold lh-1 text-teal">
        {t("potential_clients")}
      </p>
      <div className="my-3 d-none d-md-block">
        <DataTable data={address.map((addr) => ({ area: addr }))} />
      </div>
    </div>
  );
};

export default Clientmatch;
