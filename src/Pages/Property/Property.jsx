import React, { useState } from "react";
import { useTranslation } from 'react-i18next'
import Propertyaddress from "../../Componant/property/propertyaddress/Propertyaddress";
import Propertydetails from "../../Componant/property/propertydetails/Propertydetails";
import Ownerdetails from "../../Componant/property/ownerdetail/Ownerdetails";
import Attachments from "../../Componant/property/attechment/Attechment";
import { Col } from "react-bootstrap";
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
    <>
      <Col className=" py-2">
        <p className="py-3 my-4 text-center container-fluid screen-1 border-bottom">{t("pro_tab_title")}</p>
            <div className="px-3 py-2">
              <div className="position-relative  pr-4">
                <div className="mx-auto" style={{ width: '304px' }}>
                  <div className="d-flex justify-content-around text-center">
                    {[1,2,3,4].map((step, index) => (
                      <div key={step} className="d-flex align-items-center">
                        <div
                          className={`d-flex align-items-center justify-content-center rounded-circle fw-semibold position-relative`}
                          style={{
                            width: '32px',
                            height: '32px',
                            borderWidth: '2px',
                            borderStyle: 'solid',
                            transition: 'all 0.3s',
                            backgroundColor: 
                              activeTab > step
                                ? '#00A481'
                                : activeTab === step
                                ? 'white'
                                : '#E3E3E3',
                            color:
                              activeTab > step
                                ? 'white'
                                : activeTab === step
                                ? '#00A481'
                                : 'black',
                            borderColor:
                              activeTab > step
                                ? '#00A481'
                                : activeTab === step
                                ? '#00A481'
                                : 'transparent',
                            cursor: 'pointer'
                          }}
                          onClick={() => setActiveTab(step)}
                        >
                          {step}
                          <span
                            className="position-absolute top-100 pt-1  start-50 translate-middle btn-success "
                            style={{
                              fontSize: '12px',
                              whiteSpace: 'nowrap',
                              marginTop: '5px'
                            }}
                          >
                            {step === 1
                              ? t('pro_add_set1')
                              : step === 2
                              ? t('pro_add_set2')
                              : step === 3
                              ? t('pro_add_set3')
                              : t('pro_add_set4')}
                          </span>
                        </div>

                        {index < 3 && (
                          <div
                            className="transition-all"
                            style={{
                              width: '48px',
                              height: '2px',
                              backgroundColor: activeTab > step ? '#00A481' : '#E3E3E3',
                              transition: 'all 0.3s'
                            }}
                          ></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                {renderTabContent()}
              </div>
            </div>
          </Col>
    </>
  );
}; 

export default Property;
