import React, { useState } from "react";
import userTypeIcon1 from "../../../assets/images/user_type_icon1.svg";
import userTypeIcon2 from "../../../assets/images/user_type_icon2.svg";
import userTypeIcon3 from "../../../assets/images/user_type_icon3.svg";
import keyVertical from "../../../assets/images/key_vertical.svg";
import garageDoor from "../../../assets/images/garage_door.svg";
import searchIcon from "../../../assets/images/search.svg";
import "../../Customers/Customer.css";
import CustomInput from "../../../Componant/Common/Input/Custominput";
import CustomSelect from "../../../Componant/Common/Select/Customeselect";
import successIcon from "../../../assets/images/success_icon.svg";
import RangeSlider from "../../../Componant/Common/RangeSlider/RangeSlider";
import { Modal } from "react-bootstrap";
import Next from "../../../assets/images/Next.jpg";
import close from "../../../assets/images/ButtonClose.png";
import { useClientService } from "../../../Services/ClientService";
import { useTranslation } from "react-i18next";

const AddCustomerMobile = () => {
  const { t } = useTranslation();
 
  const {
    isChecked, 
    formData,
    handleMainCheck,
    isFirstModalOpen,
    isSecondModalOpen,
    currentScreen,
    handleChange,
    nextScreen,
    openSecondModal,
    closeFirstModal,
    closeSecondModal,
    setIsFirstModalOpen, handleNextChecked,nextChecked, setNextChecked
  } = useClientService();

  const renderFirstScreen = () => (
    <>
      <div className="row form_group">
        <h4 className="fs-5 lh-1 fw-semibold">{t("cust_per_info")}</h4>
        <div className="col-md-4">
          <label className="form-label fs-15 lh-1 fw-semibold">
            {t("cust_full_name")}
          </label>
          <CustomInput
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <label className="form-label fs-15 lh-1 fw-semibold">
            {t("cust_phone")}
          </label>
          <CustomInput
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <label className="form-label fs-15 lh-1 fw-semibold">
            {t("cust_UE")}
          </label>
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
        <div className="col-12 col-md-4">
          <label className="form-label fs-15 lh-1 fw-semibold">
            {t("cust_TA")}
          </label>
          <CustomInput
            type="text"
            name="idCard"
            value={formData.idCard}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="col-12 col-md-8">
          <label className="form-label fs-15 lh-1 fw-semibold">
            {t("cust_address")}
          </label>
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
        <p className="form-label fs-15 lh-1 fw-semibold mb-2">
          {t("cust_type")}
        </p>
        <div className="col-auto">
          <div className="check_custom_icon">
            <input
              className="form-check-input d-none btn-check"
              type="checkbox"
              value={t("cust_type_1")}
              name="userType"
              id="usertype_1"
              
              onChange={handleMainCheck}
            />

            <label htmlFor="usertype_1">
              <span className="user_type_icon">
                <img src={userTypeIcon1} alt="icon" />
              </span>
              <span className="fs-17 lh-1 fw-normal">{t("cust_type_1")}</span>
            </label>
          </div>
        </div>

        <div className="col-auto">
          <div className="check_custom_icon">
            <CustomInput
              type="checkbox"
              // id="usertype_2"
              // name="userType"
              value={t("cust_type_2")}
              // onChange={handleMainCheck}
              // checked={isChecked}
              className="btn-check"
            />
            <label htmlFor="usertype_2">
              <span className="user_type_icon">
                <img src={userTypeIcon2} alt="icon" />
              </span>
              <span className="fs-17 lh-1 fw-normal">{t("cust_type_2")}</span>
            </label>
          </div>
        </div>

        <div className="col-auto">
          <div className="check_custom_icon">
            <CustomInput
              type="checkbox"
              // id="usertype_3"
              // name="userType"
              value={t("cust_type_3")}
              // onChange={handleMainCheck}
              className="btn-check"
            />
            <label htmlFor="usertype_3">
              <span className="user_type_icon">
                <img src={userTypeIcon3} alt="icon" />
              </span>
              <span className="fs-17 lh-1 fw-normal">{t("cust_type_3")}</span>
            </label>
          </div>
        </div>
        {isChecked && (  <div className="d-flex justify-content-center gap-2 align-items-center my-3"> 
          <input
            className="form-check-input rounded-1 border-1 border-black mt-2"
            type="checkbox"
            value="select"
            name="userType"
            id="usertype_1_duplicate"
           onChange={handleNextChecked}
           checked={nextChecked}
          />
          <label className="fs-15 fw-normal lh-1" htmlFor="customCheck1">
            {t("send_report_consent")}
          </label>
        </div>)}
      
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button type="button" className="btn_cmn mt-3" onClick={nextScreen}>
          {t("pro_next_step")}
        </button>
      </div>
    </>
  );

  const renderSecondScreen = () => (
    <>
      <div className="row pb-4">
        <h4 className="fs-5 lh-1 fw-semibold">{t("cust_preferences")}</h4>
        {[
          {
            id: "user_pra1",
            icon: keyVertical,
            label: t("cust_preferences_1"),
          },
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
                <span className="">
                  <img src={icon} alt="icon" />
                </span>
                <span className="fs-17 fw-semibold lh-1"> {label}</span>
              </label>
            </div>
          </div>
        ))}
      </div>
      <div className="row form_group">
        <div className="col-md-4">
          <label className="form-label fs-15 fw-semibold lh-1">
            {t("res_area")}
          </label>
          <div className="mb-4 position-relative border border-[#D6D6D6] rounded d-flex">
            <CustomInput
              type="text"
              name="requestedArea"
              value={formData.requestedArea}
              onChange={handleChange}
              className="form-control border-0 p-0 flex-grow-1"
              placeholder={t("type")}
            />
            <button className="btn p-0 px-3 border-0 ms-2" type="button">
              <img src={searchIcon} alt="search" />
            </button>
          </div>
        </div>
        <div className="col-md-4">
          <label className="form-label fs-15 fw-semibold lh-1">
            {t("pro_type")}
          </label>
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
          <label className="form-label fs-15 fw-semibold lh-1">
            {t("pro_condition")}
          </label>
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
      <div className="row g-4 form_group">
        <div className="col-md-4">
          <label className="form-label fs-15 fw-semibold my-1 lh-1">
            {t("no_rooms")}
          </label>
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

        <div className="col-lg-4">
          <RangeSlider label={t("size")} customStyle={{ paddingTop: "10px" }} />
        </div>

        <div className="col-lg-4">
          <RangeSlider
            label={t("price")}
            customStyle={{ paddingTop: "10px" }}
          />
        </div>
      </div>

      <h4 className="fs-5 fw-semibod lh-1">{t("fetures")}</h4>
      <ul className="services_tags">
        <li>
          <span className="fs-15 fw-normal lh-1">{t("entry_type_1")} </span>
        </li>
        <li>
          <span className="fs-15 fw-normal lh-1">{t("entry_type_2")} </span>
        </li>
        <br />
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
        ].map((item, index) => (
          <li key={index}>
            <span className="fs-15 fw-normal lh-1">{item.title}</span>
          </li>
        ))}
      </ul>
      <div className="form_group">
        <label className="form-label fs-15 fw-semibold lh-1">
          {t("reports")}
        </label>
        <textarea
          name="customerRequests"
          value={formData.customerRequests}
          onChange={handleChange}
          placeholder={t("request_placeholder")}
          className="form-control"
        ></textarea>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button
          type="button"
          className="btn_cmn mt-3"
          onClick={() => setIsFirstModalOpen(true)}
        >
          {t("cust_add")}
        </button>
      </div>
    </>
  );

  return (
    <div className="bg-white shadow-lg rounded-3">
      <div className="d-none d-md-block px-3">
        <h3 className="py-4 my-2 text-center screen-1 border-bottom">
          {t("add_cust_form_title")}
        </h3>
      </div>
      <div className="p-0">
        <form className="form_custom">
          <div className="custom-scrollbar overflow-y-auto overflow-x-hidden scroll-height px-3 pb-4">
            {currentScreen === 1 ? renderFirstScreen() : renderSecondScreen()}
          </div>
        </form>
      </div>

      <Modal
        show={isFirstModalOpen}
        onHide={closeFirstModal}
        centered
        className="modal-container"
      >
        <Modal.Header className="border-0 p-3 d-flex justify-content-end mt-4">
          <button
            type="button"
            className="btn p-0 border-0 bg-transparent"
            onClick={closeFirstModal}
          >
            <img src={close} alt="close" />
          </button>
        </Modal.Header>
        <div className="d-flex justify-content-center">
          <img src={successIcon} alt="Success" className="img-fluid mb-2" />
        </div>
        <Modal.Body className="text-center my-1">
          <div className="d-flex justify-content-center">
            <h4 className="text-teal fs-4 lh-1 fw-semibold">
              {t("add_description")}
            </h4>
          </div>
        </Modal.Body>

        <Modal.Footer className="border-top-0 d-flex align-items-center justify-content-center gap-4 mb-3">
          <button
            className="fs-5 lh-1 fw-semibold agent-btn-responsive1 w-50 text-white py-2 rounded-pill"
            onClick={closeFirstModal}
          >
            {t("footer")}
          </button>
          <button
            className="fs-5 lh-1 fw-semibold agent-btn-responsive2 w-40 py-2 rounded-pill"
            onClick={openSecondModal}
          >
            {t("footer1")}
          </button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={isSecondModalOpen}
        onHide={closeSecondModal}
        centered
        className="modal-container"
      >
        <Modal.Header className="border-0 p-3 mt-4">
          <div className="d-flex justify-content-between align-items-center w-100">
            <img src={Next} alt="next btn" />

            <button
              type="button"
              className="btn p-0 border-0 bg-transparent"
              onClick={closeSecondModal}
            >
              <img src={close} alt="close" />
            </button>
          </div>
        </Modal.Header>
        <Modal.Body className="text-center">
          <div className="d-flex justify-content-center my-2">
            <img src={successIcon} alt="Success" className="img-fluid mb-3" />
          </div>
          <h4 className="fs-4 lh-1 fw-semibold">
            {t("add_cust_model_description")}
          </h4>
        </Modal.Body>

        <Modal.Footer className="border-top-0 d-flex justify-content-center mb-3">
          <div className="text-center d-flex flex-column gap-3">
            <button className="fs-5 lh-1 fw-semibold agent-btn-responsive2 w-100 py-3 px-3 shadow rounded-pill">
              {t("add_cust_sign_in")}
            </button>
            <button className="fs-5 lh-1 fw-semibold agent-btn-responsive2 w-100 py-3 px-3 shadow rounded-pill">
              {t("add_proprty_owers_sign_in")}
            </button>
            <button className="fs-5 lh-1 fw-semibold agent-btn-responsive2 w-100 py-3 px-3 shadow rounded-pill">
              {t("add_cust_broker_sign_in")}
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddCustomerMobile;
