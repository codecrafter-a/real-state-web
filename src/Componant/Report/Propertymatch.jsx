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

const Propertymatch = ({ properties }) => {
  const { t } = useTranslation();

  return (
    <div>
      <p className=" mb-2 mt-4 text-center d-none d-md-block text-teal fw-semibold fs-5 lh-1">
        {t("potential_properties")}
      </p>
      <Row>
        {properties &&
         properties.map((property, index) => (
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
                    <h5 className="fw-bold fs-5 lh-1">{t(property.price)}</h5>
                  </div>
                  <div className="d-flex flex-column">
                    <p className="fs-15 fw-normal lh-1 mb-1">{t(property.address)}</p>
                    <p className="fs-15 fw-normal lh-1 mb-2">{t(property.rooms)}</p>
                  </div>
                  <div className="mb-2">
                    {property.features.map((feature, i) => (
                      <Badge key={i} bg="light" text="dark" className="me-2">
                        {t(feature)}
                      </Badge>
                    ))}
                  </div>
                  <p className="small text-muted">{t(property.description)}</p>
                  <div className="justify-content-center d-flex">
                    <button className="agent-btn-responsive1 w-75 py-1 rounded-pill text-white">
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
