
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import add_file from "../../../assets/images/add_file.svg";
import add_img from "../../../assets/images/add_img.svg";
import CustomButton from "../../../Componant/Common/Button/Button";
import deleteIcon from "../../../assets/images/delete.svg";
import {Form, Row, Col, Button } from 'react-bootstrap';

const Attechment = ({ setActiveTab }) => {
  const { t } = useTranslation();

  const [files, setFiles] = useState({
    tabo: null,
    cityApproval: null,
    additionalDocs: null,
  });

  const [previews, setPreviews] = useState({
    tabo: null,
    cityApproval: null,
    additionalDocs: null,
  });

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      setFiles((prev) => ({ ...prev, [type]: file }));
      setPreviews((prev) => ({ ...prev, [type]: URL.createObjectURL(file) }));
    }
  };

  const handleRemoveFile = (type) => {
    setFiles((prev) => ({ ...prev, [type]: null }));
    setPreviews((prev) => ({ ...prev, [type]: null }));
  };

  const fileInputs = [
    { key: "tabo", label: t("pro_add_attch_doc_1") },
    { key: "cityApproval", label: t("pro_add_attch_doc_2") },
    { key: "additionalDocs", label: t("pro_add_attch_doc_3") },
  ];

  return (
    <>
    <Form className="px-4">
      <h4 className="fs-4 fw-semibold text-success py-1 mt-3 mb-1 text-start">
        {t('pro_add_attch')}
      </h4>
      <p className="fs-6 fw-normal">{t('pro_add_attch_doc_note')}</p>

      {/* File Upload Section */}
      <Row>
        {fileInputs.map(({ key, label }) => (
          <Col key={key} md={4} className=" py-2">
            <div className="border border-success border-dashed rounded p-3">
              <Form.Label className="d-flex align-items-center fw-semibold text-success cursor-pointer position-relative">
                <Form.Control
                  type="file"
                  className="position-absolute w-100 h-100 opacity-0"
                  onChange={(e) => handleFileChange(e, key)}
                />
                <img
                  src={add_file}
                  alt="Upload Icon"
                  className="me-2 cursor-pointer"
                />
                <span>{label}</span>
              </Form.Label>
            </div>

            {files[key] && (
              <div className="mt-3 d-flex align-items-center border border-success border-dashed rounded p-2">
                <Button
                  variant="link"
                  className="text-danger me-2 p-0"
                  onClick={() => handleRemoveFile(key)}
                >
                  <img src={deleteIcon} alt="Delete" />
                </Button>
                <span className="flex-grow-1">{files[key]?.name}</span>
                {previews[key] && (
                  <img
                    src={previews[key]}
                    alt="Preview"
                    className="rounded-circle object-fit-cover"
                    style={{ width: '40px', height: '40px' }}
                  />
                )}
              </div>
            )}
          </Col>
        ))}
      </Row>

      {/* Image Upload Section */}
      <Row className="my-4">
        <Col md={12}>
          <div className="border border-success border-dashed rounded p-3">
            <div className="d-flex justify-content-center text-center">
              <div>
                <div className="position-relative">
                  <Form.Control
                    type="file"
                    className="position-absolute w-100 h-100 opacity-0"
                  />
                  <img
                    src={add_img}
                    alt="Upload Icon"
                    className="cursor-pointer"
                    style={{ width: '50px' }}
                  />
                </div>
                <p className="text-success mt-2">
                  {t('pro_add_attch_doc_des_1')}
                  <br />
                  <span>{t('pro_add_attch_doc_des_2')}</span>
                </p>
                <CustomButton
                  className="btn btn-outline-success px-4 py-2 rounded-pill shadow-sm"
                >
                  {t('pro_add_attch_img_btn')}
                </CustomButton>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* Buttons */}
      <div className="d-flex justify-content-between mt-4 pt-5 pb-3">
        <Button
          onClick={() => setActiveTab(3)}
          className="px-5 py-2 rounded-pill shadow-lg"
          style={{
            backgroundColor: '#ffffff',
            color: '#00A481',
            border: '1px solid #00A481',
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#55CD85';
            e.target.style.color = '#ffffff';
            e.target.style.borderColor = '#55CD85';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#ffffff';
            e.target.style.color = '#00A481';
            e.target.style.borderColor = '#00A481';
          }}
        >
          {t('Pro_add_pev_btn')}
        </Button>

        <Button
          className="px-5 py-2 rounded-pill shadow-lg text-white"
          style={{
            backgroundColor: '#00A481',
            borderColor: '#00A481',
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#55CD85';
            e.target.style.borderColor = '#55CD85';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#00A481';
            e.target.style.borderColor = '#00A481';
          }}
        >
          {t('pro_add_next_btn')}
        </Button>
      </div>
    </Form>
    </>
  );
};

export default Attechment;
