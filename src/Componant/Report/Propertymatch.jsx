import React from "react";
import {
  Card,
  Row,
  Col,
  Badge,
} from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import house from "../../assets/images/property-house.png";
const Propertymatch = ({ types }) => {
  const { t } = useTranslation();

  return (
    <div>
      <Card className="p-3 shadow-sm border mb-3 mb-md-0 rounded">
        <div className="align-items-center row">
          <div className="d-flex justify-content-between align-item-center">
            <div className="d-flex flex-column">
              <strong className="d-block mb-1 fs-15">
                {t("client_name")}{" "}
              </strong>
              <span className="text-muted fs-15">{t("email_phone")}</span>
            </div>
            <AiOutlineClose
              size={20}
              className="text-dark cursor-pointer my-2"
              onClick={() => alert("Close clicked")}
            />
          </div>
        </div>
      </Card>
      <p className=" my-2 text-center d-none d-md-block text-teal fw-semibold fs-5 lh-1">
        {t("potential_properties")}
      </p>
      <Row>
        {types &&
          types?.map((type, index) => (
            <Col key={index} className="col-12 col-md-6 col-lg-4">
              <Card className="shadow-sm border d-none d-md-block overflow-hidden my-3">
                <div className="p-3">
                  <Card.Img
                    variant="top"
                    src={house}
                    alt="Property"
                    className="img-fluid border rounded-2"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </div>
                <Card.Body className="p-0">
                  <div className="d-none d-md-block p-3">
                    <div className="d-flex justify-content-between py-2  gap-3 align-items-center">
                      <h5 className="mb-1 fw-bold text-success fs-6">
                        {t("address")}
                      </h5>
                      <h5 className="fw-bold fs-5 lh-1">{t("price1")}</h5>
                    </div>
                    <div className="d-flex flex-column">
                      <p className=" fs-15 fw-normal lh-1 mb-1">{type}</p>
                      <p className="fs-15 fw-normal lh-1 mb-2">{t("rooms")} </p>
                    </div>
                    <div className="mb-2 ">
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
                    <div className="justify-content-center d-flex ">
                      <button className=" agent-btn-responsive1 w-75 py-1 rounded-pill text-white">
                        {t("send1_to_client")}
                      </button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default Propertymatch;
