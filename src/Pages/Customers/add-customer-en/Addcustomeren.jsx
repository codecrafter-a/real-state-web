import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import userTypeIcon1 from "../../../assets/images/user_type_icon1.svg";
import userTypeIcon2 from "../../../assets/images/user_type_icon2.svg";
import userTypeIcon3 from "../../../assets/images/user_type_icon3.svg";
import keyVertical from "../../../assets/images/key_vertical.svg";
import garageDoor from "../../../assets/images/garage_door.svg";
import searchIcon from "../../../assets/images/search.svg";
import "../../Customers/Customer.css";
import CustomInput from "../../../Componant/Common/Input/Custominput";
import CustomSelect from "../../../Componant/Common/Select/Customeselect";
import CustomModal from "../../../Componant/Common/Modal/CustomeModal";
import successIcon from "../../../assets/images/success_icon.svg";
import Next from "../../../assets/images/Next.jpg";
import RangeSlider from "../../../Componant/Common/RangeSlider/RangeSlider";
import { Modal } from "react-bootstrap";

const AddCustomer = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    idNumber: "",
    address: "",
    userType: [],
    preferences: [],
    requestedArea: "",
    propertyType: "",
    propertyCondition: "",
    rooms: "",
    sizeMin: 0,
    sizeMax: 10000,
    priceMin: 0,
    priceMax: 10000,
    additionalFeatures: [],
    customerRequests: "",
    idCard: "",
    numberOfRooms: "",
    residentialArea: "",
  });

  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((item) => item !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const openSecondModal = () => {
    setIsFirstModalOpen(false);
    setIsSecondModalOpen(true);
  };

  return (
    <div className="bg-white shadow-lg rounded-3">
      <div className="main_wrap_hdr d-none d-md-block">
        <h1 className="bor_head_cmn text-center">{t("add_cust_form_title")}</h1>
      </div>
      <div className="main_wrap_body p-0">
        <form className="form_custom">
          <div className="custom-scrollbar overflow-y-auto overflow-x-hidden scroll-height internal_scroll_custome _mCS_2 mCS_no_scrollbar px-4 pb-4">
            <div className="row form_group">
              <h4>{t("cust_per_info")}</h4>
              <div className="col-md-4">
                <label className="form-label">{t("cust_full_name")}</label>
                <CustomInput
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">{t("cust_phone")}</label>
                <CustomInput
                  type="number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">{t("cust_UE")}</label>
                <CustomInput
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="row form_group">
              <div className=" col-12 col-md-4">
                <label className="form-label">{t("cust_TA")}</label>
                <CustomInput
                  type="text"
                  name="idCard"
                  value={formData.idCard}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
              <div className=" col-12 col-md-8">
                <label className="form-label">{t("cust_address")}</label>
                <CustomInput
                  type="text"
                  name="residentialArea"
                  value={formData.residentialArea}
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>
            <div className="row pb-3 mb-4">
              <p className="form-label mb-2">{t("cust_type")}</p>
              {[
                { id: "usertype_1", icon: userTypeIcon1, label: t("cust_type_1") },
                { id: "usertype_2", icon: userTypeIcon2, label: t("cust_type_2") },
                { id: "usertype_3", icon: userTypeIcon3, label: t("cust_type_3") },
              ].map(({ id, icon, label }) => (
                <div className="col-auto" key={id}>
                  <div className="check_custom_icon">
                    <CustomInput
                      type="checkbox"
                      id={id}
                      name="userType"
                      value={label}
                      onChange={handleChange}
                      className="btn-check"
                    />
                    <label htmlFor={id}>
                      <span className="user_type_icon">
                        <img src={icon} alt="icon" />
                      </span>
                      {label}
                    </label>
                  </div>
                </div>
              ))}
            </div>
            <div className="row pb-4">
              <h4>{t("cust_preferences")}</h4>
              {[
                { id: "user_pra1", icon: keyVertical, label: t("cust_preferences_1") },
                { id: "user_pra2", icon: garageDoor, label: t("cust_preferences_2") },
              ].map(({ id, icon, label }) => (
                <div className="col-auto" key={id}>
                  <div className="check_custom_icon">
                    <CustomInput
                      type="checkbox"
                      id={id}
                      name="preferences"
                      value={label}
                      onChange={handleChange}
                      className="btn-check"
                    />
                    <label htmlFor={id}>
                      <span className="user_type_icon">
                        <img src={icon} alt="icon" />
                      </span>
                      {label}
                    </label>
                  </div>
                </div>
              ))}
            </div>
            <div className="row form_group">
              <div className="col-md-4">
                <label className="form-label">{t("res_area")}</label>
                <div className="input-group input_grp_cus">
                  <CustomInput
                    type="text"
                    name="requestedArea"
                    value={formData.requestedArea}
                    onChange={handleChange}
                    className="form-control"
                    placeholder={t("type")}
                  />
                  <button className="btn " type="button">
                    <img src={searchIcon} alt="search" />
                  </button>
                </div>
              </div>
              <div className="col-md-4">
                <label className="form-label">{t("pro_type")}</label>
                <CustomSelect
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  options={[
                    { value: "", label: "" },
                    { value: t("option1"), label: t("option1") },
                    { value: t("option2"), label: t("option2") },
                  ]}
                  className="form-select"
                />
              </div>
              <div className="col-md-4">
                <label className="form-label">{t("pro_condition")}</label>
                <CustomSelect
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  options={[
                    { value: "", label: "" },
                    { value: t("option1"), label: t("option1") },
                    { value: t("option1"), label: t("option1") },
                  ]}
                  className="form-select"
                />
              </div>
            </div>
            <div className="row form_group">
              <div className="col-md-4">
                <label className="form-label">{t("no_rooms")}{/** Number of room */}</label>
                <div className="input-group input_grp_cus">
                  <CustomInput
                    type="text"
                    name="numberOfRooms"
                    value={formData.numberOfRooms}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-lg-4" >
                <RangeSlider label={t("size")} customStyle={{ marginRight: "10px" }} />
              </div>
              <div className="col-lg-4">
                <RangeSlider label={t("price")} customStyle={{ marginLeft: "10px" }} />
              </div>
            </div>
            <h4>{t("fetures")}</h4>
            <ul class="services_tags">
              <li><span>{t("entry_type_1")}  </span></li>
              <li><span>{t("entry_type_2")}  </span></li><br />
              {[
                { title: t("feture_1") },
                { title: t("feture_2") },
                { title: t("feture_3") },
                { title: t("feture_4") },
                { title: t("feture_5") },
                { title: t("feture_6") },
                { title: t("feture_7") },
                { title: t("feture_8") },
                { title: t("feture_9") },
              ].map((item, index) => <li key={index}><span>{item.title}</span></li>

              )}
            </ul>
            <div className="form_group">
              <label className="form-label">{t("reports")}</label>
              <textarea
                name="customerRequests"
                value={formData.customerRequests}
                onChange={handleChange}
                className="form-control"
              ></textarea>
            </div>
            <button type="button" className="btn_cmn mt-3" onClick={() => setIsFirstModalOpen(true)}>
              {t("cust_add")}
            </button>
          </div>
        </form>
      </div>
      <Modal show={isFirstModalOpen} onHide={() => setIsFirstModalOpen(false)} centered className="modal-container">
        <Modal.Header className="border-0 p-3 position-relative mt-4">
          <button
            type="button"
            className="btn-close position-absolute close-btn"
            onClick={() => setIsFirstModalOpen(false)}
          ></button>
        </Modal.Header>

        <Modal.Body className="text-center justify-center pb-4">
          <div className="d-flex justify-content-center">
            <img src={successIcon} alt="Success" className="mx-auto w-20 h-20 mb-3" />
          </div>
          <h4 className="text-emerald-500 text-2xl font-semibold">{t("add_description")}</h4>
        </Modal.Body>

        <Modal.Footer className="border-top-0 justify-content-center gap-3 mb-3">
          <button className="btn btn-success text-white px-4 py-2 rounded-pill" onClick={() => setIsFirstModalOpen(false)}>
            {t("footer")}
          </button>
          <button className="btn btn-outline-success px-4 py-2 rounded-pill" onClick={openSecondModal}>
            {t("footer1")}
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={isSecondModalOpen} onHide={() => setIsSecondModalOpen(false)} centered className="modal-container">
        <Modal.Header className="border-0 p-3 position-relative mt-4">
          <button
            type="button"
            className="btn-close position-absolute close-btn"
            onClick={() => setIsSecondModalOpen(false)}
          ></button>
        </Modal.Header>

        <Modal.Body className="text-center justify-center pb-4">
          <div className=" text-center">
            <img src={successIcon} alt="Success" className="mx-auto w-20 h-20 mb-3" />
            <h4 className=" text-2xl mb-12 font-semibold">{t("add_cust_model_description")}</h4>
          </div>
        </Modal.Body>

        <Modal.Footer className="border-top-0 justify-content-center gap-3 mb-3">
          <div className="text-center d-flex flex-column justify-center">
            <button className="modalbtn py-2 px-3 mb-4">{t("add_cust_sign_in")}</button>
            <button className="modalbtn py-2 px-3 mb-4">{t("add_proprty_owers_sign_in")}</button>
            <button className="modalbtn py-2 px-3 mb-4">{t("add_cust_broker_sign_in")}</button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default AddCustomer;


