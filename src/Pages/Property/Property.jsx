import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Propertyaddress from "../../Componant/property/propertyaddress/Propertyaddress";
import Propertydetails from "../../Componant/property/propertydetails/Propertydetails";
import Ownerdetails from "../../Componant/property/ownerdetail/Ownerdetails";
import Attachments from "../../Componant/property/attechment/Attechment";
import { Col, Row, Container } from "react-bootstrap";
import "./Prooerty.css";

const Property = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(1);

  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return <Propertyaddress setActiveTab={setActiveTab} />;
      case 2:
        return <Propertydetails setActiveTab={setActiveTab} />;
      case 3:
        return <Ownerdetails setActiveTab={setActiveTab} />;
      case 4:
        return <Attachments setActiveTab={setActiveTab} />;
      default:
        return <Propertyaddress setActiveTab={setActiveTab} />;
    }
  };
                       
  return (
    <Container fluid className="py-4">
      <Row className="justify-content-center ">
        <Col lg={10} sm={12} className="bg-white shadow-lg rounded-3 p-3">
          <p className="pb-3 mb-4 screen-1 text-center border-bottom d-none d-md-block">
            {t("pro_tab_title")}
          </p>
          <div className="py-2">
            <div className="stepper-container text-center d-flex flex-wrap justify-content-center">
              {[1, 2, 3, 4].map((step, index) => (
                <div key={step} className="d-flex align-items-center">
                  <div
                    className={`step-circle ${activeTab > step
                        ? "completed"
                        : activeTab === step
                          ? "active"
                          : "pending"
                      }`}
                    onClick={() => setActiveTab(step)}
                  >
                    {step}
                    <span className="step-label">
                      {t(`pro_add_set${step}`)}
                    </span>
                  </div>
                  {index < 3 && <div className={`step-line ${activeTab > step ? "line-active" : ""}`}></div>}
                </div>
              ))}
            </div>
            <div className="mt-4">{renderTabContent()}</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Property;