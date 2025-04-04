import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import add_file from "../../../assets/images/add_file.svg";
import add_img from "../../../assets/images/add_img.svg";
import deleteIcon from "../../../assets/images/delete.svg";
import { Form, Row, Col, Button } from "react-bootstrap";
import download from "../../../assets/images/Download.png";
const Attechment = ({ setActiveTab }) => {
  const { t } = useTranslation();

  const [files, setFiles] = useState({
    tabo: null,
    cityApproval: null,
    additionalDocs: null,
  });

  const [imageSizes, setImageSizes] = useState({});

  const [previews, setPreviews] = useState({
    tabo: null,
    cityApproval: null,
    additionalDocs: null,
  });

  useEffect(() => {
    Object.keys(previews).forEach((key) => {
      const img = new Image();
      img.onload = () => {
        setImageSizes((prev) => ({
          ...prev,
          [key]: { width: img.width, height: img.height },
        }));
      };
      img.src = previews[key];
    });
  }, [previews]);
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

  const formatFileSize = (bytes) => {
    if (bytes >= 1024 * 1024) {
      return (bytes / (1024 * 1024)).toFixed(1) + " MB";
    } else {
      return (bytes / 1024).toFixed(1) + " KB";
    }
  };

  const fileInputs = [
    { key: "tabo", label: t("pro_add_attch_doc_1") },
    { key: "cityApproval", label: t("pro_add_attch_doc_2") },
    { key: "additionalDocs", label: t("pro_add_attch_doc_3") },
  ];

  return (
    <>
      <Form className="px-4">
        <h4 className="text-teal fs-5 fw-semibold lh-1 my-3 pt-3 ">
          {t("pro_add_set4")}
        </h4>
        <p className="fs-15 lh-1 fw-semibold">{t("pro_add_attch_doc_note")}</p>
        <div className="carddashed row">
          {fileInputs.map(({ key, label }) => (
            <div key={key} className=" col-12 col-md-4">
              <div className="border-dashed p-2">
                <Form.Label className="d-flex align-items-center cursor-pointer position-relative">
                  <Form.Control
                    type="file"
                    className="position-absolute w-100 h-100 opacity-0"
                    onChange={(e) => handleFileChange(e, key)}
                  />
                  <img
                    src={add_file}
                    alt="Upload Icon"
                    className="me-2 cursor-pointer px-1"
                  />
                  <span className=" fw-medium lh-1  text-teal">{label}</span>
                </Form.Label>
              </div>
              {files[key] && (
                <div className="mt-3 d-flex align-items-center justify-content-between border border-secondary border-opacity-25 rounded-2  p-2">
                  <div className="d-flex flex-column"> 
                    <span className=" fs-6 fw-medium lh-1  text-teal">
                      {files[key]?.name}
                    </span>
                    <span className="fs-12 fw-normal lh-1 py-1">
                      {formatFileSize(files[key].size)}
                    </span>
                  </div>
                  <div className="d-flex ">
                    <Button variant="link" className="p-0">
                      <img src={download} alt="download" />
                    </Button>
                    <Button
                      variant="link"
                      className="p-0"
                      onClick={() => handleRemoveFile(key)}
                    >
                      <img src={deleteIcon} alt="Delete" />
                    </Button>
                  </div>
                  
                </div>
              )}
            </div>
          ))}
        </div>
        <Row className="my-4">
          <Col md={12}>
            <div className=" border-dashed rounded p-3">
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
                      style={{ width: "50px" }}
                    />
                  </div>
                  <p className="text-success d-none d-md-block  mt-2">
                    {t("pro_add_attch_doc_des_1")}
                    <br />
                    <span>{t("pro_add_attch_doc_des_2")}</span>
                  </p>
                  <Button className="agent-btn-responsive2 my-2 rounded-pill">
                    {t("pro_add_attch_img_btn")}
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="d-flex justify-content-center justify-content-md-between mt-4 pb-3">
          <Button
            onClick={() => setActiveTab(3)}
            className="agent-btn-responsive2 responsive-btn d-none d-md-block  rounded-pill shadow-lg"
          >
            {t("Pro_add_pev_btn")}
          </Button>

          <Button className="agent-btn-responsive1 responsive-btn  rounded-pill shadow-lg">
            {t("pro_add_next_btn")}
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Attechment;
