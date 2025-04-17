import React, { useState } from "react";
import { Col, Row, Modal } from "react-bootstrap";
import "../Setting/setting.css";
import Toggle from "../../Componant/Common/Toggle/Toggle";
import sms from "../../assets/images/sms.svg";
import email from "../../assets/images/email.svg";
import whatsapp from "../../assets/images/wa, whatsapp, message, communication, chat.svg";
import { useTranslation } from "react-i18next";
import Next from "../../assets/images/Next.jpg";
import CustomInput from "../../Componant/Common/Input/Custominput";
const Setting = () => {
  const { t } = useTranslation();
  const [isView, setIsView] = useState(false);
  const [ownerData, setOwnerData] = useState(false);

  const handleOwnerData = () => {
    setOwnerData(!ownerData);
    setIsView(false);
  };

  const [settings, setSettings] = useState({
    lable1: false,
    lable2: false,
    lable3: false,
    showCommissionAmounts: false,
    usertype_1: false,
    usertype_2: true,
    usertype_3: false,
    receivePerformanceReports: true,
    notifyOnPropertyMatch: true,
    sendMessageToInterestedClients: true,
    firstReminderOnceAMonth: true,
    firstReminderEveryTwoWeeks: false,
    secondReminderOnceAMonth: false,
    secondReminderEveryTwoWeeks: false,
    sendMessageToAllClients: true,
    exclusivePropertyExpiry: true,
    reminderOnceAMonth: false,
    reminderEveryTwoWeeks: false,
    interestedClientsNoAgreement: true,
    agreementOnceAMonth: true,
    agreementEveryTwoWeeks: true,
    viaSMS: false,
    viaEmail: false,
    viaWhatsapp: false,
  });

  const handleToggleChange = (key) => (e) => {
    setSettings((prev) => ({ ...prev, [key]: e.target.checked }));
  };

  const handleRadioChange = (groupKeys, selectedKey) => () => {
    const updatedGroup = groupKeys.reduce((acc, key) => {
      acc[key] = key === selectedKey;
      return acc;
    }, {});
    setSettings((prev) => ({ ...prev, ...updatedGroup }));
  };

  return (
    <Col className="py-2 px-4 bg-white shadow-lg rounded-3">
      <h3 className=" text-center screen-1 border-bottom mb-0 p-2_5 d-none d-md-block">
        {t("settings")}{" "}
      </h3>
      <div className="custom-scrollbar overflow-y-auto overflow-x-hidden my-3_5 scroll-height mt-3 px-1">
        <Row>
          <div>
            <div className="subscription-sec-toggle ">
              <p className="fw-normal fs-17 lh-1 mb-0">
                {t("subscriptionSettings")}
              </p>
              {ownerData ? (
                <>
                  <div className="py-4_5">
                    <h4 className="text-teal fs-5 fw-sibold lh-1">
                      {t("ownertitle")}
                    </h4>
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-center">
                        <Toggle
                          checked={settings.lable1}
                          onChange={handleToggleChange("lable1")}
                          defaultChecked={false}
                          type={"checkbox"}
                          id="toggleImages"
                        />
                        <label className="fs-6 fw-normal lh-1" htmlFor="">
                          {t("lable1")}
                        </label>
                      </div>
                      <div className="d-flex align-items-center">
                        <Toggle
                          checked={settings.lable2}
                          onChange={handleToggleChange("lable2")}
                          defaultChecked={false}
                          type={"checkbox"}
                          id="toggleImages"
                        />
                        <label className="fs-6 fw-normal lh-1" htmlFor="">
                          {t("lable2")}
                        </label>
                      </div>
                      <div className="d-flex align-items-center">
                        <Toggle
                          checked={settings.lable3}
                          onChange={handleToggleChange("lable3")}
                          defaultChecked={false}
                          type={"checkbox"}
                          id="toggleImages"
                        />
                        <label className="fs-6 fw-normal lh-1" htmlFor="">
                          {t("lable3")}
                        </label>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="py-4_5 owner-section">
                    <h4 className="text-teal fs-5 fw-sibold lh-1">
                      {" "}
                      {t("showCommissionAmounts")}
                    </h4>
                    <div className="d-flex align-items-center">
                      <Toggle
                        checked={settings.showCommissionAmounts}
                        onChange={handleToggleChange("showCommissionAmounts")}
                        // defaultChecked
                        type={"checkbox"}
                        id="toggleImages"
                      />
                      <label className="fs-6 fw-normal lh-1" htmlFor="">
                        {t("showCommissionAmounts")}
                      </label>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="pt-md-0 pt-3">
              <div>
                <p className=" fw-normal lh-1 fs-17 mb-0 pb-md-0 pb-3">
                  {t("notificationsSettings")}
                </p>
                <span className="fw-bold lh-1 fs-17">
                  {t("selectChannels")}
                </span>
              </div>
              <div className="d-flex pt-3">
                <div className="check_custom_icon">
                  <CustomInput
                   type="checkbox"
                   id="usertype_1"
                   name="userType"
                   value={t("email")}
                   className="btn-check"
                   checked={settings.usertype_1}
                   onChange={handleToggleChange("email")}
                  />
                  <label htmlFor="usertype_1">
                    <span className="user_type_icon">
                      <img src={email} alt="icon" />
                    </span>
                    <span className="fw-semibold fs-17 text-teal mb-0">
                      {t("email")}
                    </span>
                  </label>
                </div>
                <div className="check_custom_icon mx-3">
                  <CustomInput
                    type="checkbox"
                    id="usertype_2"
                    name="userType"
                    value={t("whatsapp")}
                    className="btn-check"
                    checked={settings.usertype_2}
                    onChange={handleToggleChange("whatsapp")}
                  />
                  <label htmlFor="usertype_2">
                    <span className="user_type_icon">
                      <img src={whatsapp} alt="icon" />
                    </span>
                    <span className="fw-semibold fs-17 text-teal mb-0">
                      {t("whatsapp")}
                    </span>
                  </label>
                </div>
                <div className="check_custom_icon">
                  <CustomInput
                    type="checkbox"
                    id="usertype_3"
                    name="userType"
                    value={t("sms")}
                    className="btn-check"
                    checked={settings.usertype_3}
                    onChange={handleToggleChange("sms")}
                  />
                  <label htmlFor="usertype_3">
                    <span className="user_type_icon">
                      <img src={sms} alt="icon" />
                    </span>
                    <span className="fw-semibold fs-17 text-teal mb-0">
                      {t("sms")}
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </Row>
        <Row className="pt-md-5 pt-4 d-flex">
          <Col className="setting-left-sec">
            <div>
              <div className="d-flex flex-column gap-2 ">
                <h4 className="text-teal fs-5 fw-sibold lh-1 mb-0">
                  {t("report")}
                </h4>
                <div className="d-flex align-items-center">
                  <Toggle
                    checked={settings.receivePerformanceReports}
                    onChange={handleToggleChange("receivePerformanceReports")}
                    type={"checkbox"}
                    id="toggleImages"
                  />
                  <label className="fs-6 fw-normal lh-1" htmlFor="">
                    {t("receivePerformanceReports")}
                  </label>
                </div>
                <span
                  className="fw-semibold fs-12 lh-1 text-primary text-decoration-underline cursor-pointer"
                  onClick={() => setIsView(true)}
                >
                  {" "}
                  {t("changeReportsSettings")}{" "}
                </span>
              </div>
              <div className="py-4_5 d-flex flex-column gap-2">
                <h4 className="text-teal fs-5  fw-sibold lh-1 mb-0">
                  {" "}
                  {t("automaticPushNotifications")}
                </h4>
                <div className="d-flex align-items-center">
                  <Toggle
                    checked={settings.notifyOnPropertyMatch}
                    onChange={handleToggleChange("notifyOnPropertyMatch")}
                    type={"checkbox"}
                    id="toggleImages"
                  />
                  <label className="fs-6 fw-normal lh-1" htmlFor="">
                    {t("notifyOnPropertyMatch")}
                  </label>
                </div>
                <div className="d-flex align-items-center ">
                  <Toggle
                    checked={settings.toClientsWhoShowedInterest}
                    onChange={handleToggleChange("toClientsWhoShowedInterest")}
                    type={"checkbox"}
                    id="toggleImages"
                  />
                  <label className="fs-6 fw-normal lh-1" htmlFor="">
                    {t("sendMessage", {
                      spanText: (
                        <span className="fw-semibold">
                          {t("toClientsWhoShowedInterest")}
                        </span>
                      ),
                    })}
                  </label>
                </div>
                <div className="d-flex align-items-center">
                  <Toggle
                    checked={settings.toAllClientsFoundSuitable}
                    onChange={handleToggleChange("toAllClientsFoundSuitable")}
                    type={"checkbox"}
                    id="toggleImages"
                  />
                  <label className="fs-6 fw-normal lh-1" htmlFor="">
                    <span className="fw-semibold">
                      {t("toAllClientsFoundSuitable")}
                    </span>
                    {t("sendMessageTags")}
                  </label>
                </div>
                <span
                  className="fw-semibold fs-12 lh-1 text-primary text-decoration-underline cursor-pointer"
                  onClick={() => setIsView(true)}
                >
                  {" "}
                  {t("changePushNotificationSettings")}{" "}
                </span>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} className="setting-right-sec">
            <div>
              <h4 className="text-teal fs-5 fw-sibold lh-1 pb-2 mb-0">
                {t("reminders")}
              </h4>
              <div className=" d-flex flex-column gap-2_5">
                <p className="fs-6 fw-semibold lh-1 mb-0">
                  {t("receiveReminderWhen")}
                </p>
                <div className="d-flex align-items-center">
                  <Toggle defaultChecked type={"checkbox"} id="toggleImages" />
                  <label className="fs-6 fw-normal lh-1" htmlFor="">
                    {t("exclusivePropertyExpiry")}
                  </label>
                </div>
                <div className="d-flex gap-3 align-items-center">
                  <div className=" d-flex align-items-center  gap-2">
                    <Toggle
                      checked={settings.firstReminderOnceAMonth}
                      onChange={handleRadioChange(
                        [
                          "firstReminderOnceAMonth",
                          "firstReminderEveryTwoWeeks",
                        ],
                        "firstReminderOnceAMonth"
                      )}
                      type="radio"
                      name="optionGroup1"
                      id="toggleImages"
                    />
                    <label className="fs-6 fw-normal lh-1" htmlFor="">
                      {t("onceAMonth")}
                    </label>
                  </div>
                  <div className=" d-flex align-items-center gap-2">
                    <Toggle
                      checked={settings.firstReminderEveryTwoWeeks}
                      onChange={handleRadioChange(
                        [
                          "firstReminderOnceAMonth",
                          "firstReminderEveryTwoWeeks",
                        ],
                        "firstReminderEveryTwoWeeks"
                      )}
                      type="radio"
                      name="optionGroup1"
                      id="toggleImages"
                    />
                    <label className="fs-6 fw-normal lh-1" htmlFor="">
                      {t("onceEveryTwoWeeks")}
                    </label>
                  </div>
                </div>
              </div>
              <div className="py-3_5 d-flex flex-column gap-2">
                <div className="d-flex align-items-center">
                  <Toggle defaultChecked type={"checkbox"} id="toggleImages" />
                  <label className="fs-6 fw-normal lh-1" htmlFor="">
                    {t("interestedClientsNoAgreement")}
                  </label>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div className=" d-flex align-items-center  gap-2">
                    <Toggle
                      checked={settings.secondReminderOnceAMonth}
                      onChange={handleRadioChange(
                        [
                          "secondReminderOnceAMonth",
                          "secondReminderEveryTwoWeeks",
                        ],
                        "secondReminderOnceAMonth"
                      )}
                      type="radio"
                      name="optionGroup"
                      id="toggleImages"
                    />
                    <label className="fs-6 fw-normal lh-1" htmlFor="">
                      {t("onceAMonth")}
                    </label>
                  </div>
                  <div className=" d-flex align-items-center gap-2">
                    <Toggle
                      checked={settings.secondReminderEveryTwoWeeks}
                      onChange={handleRadioChange(
                        [
                          "secondReminderOnceAMonth",
                          "secondReminderEveryTwoWeeks",
                        ],
                        "secondReminderEveryTwoWeeks"
                      )}
                      type="radio"
                      name="optionGroup"
                      id="toggleImages"
                    />
                    <label className="fs-6 fw-normal lh-1" htmlFor="">
                      {t("onceEveryTwoWeeks")}
                    </label>
                  </div>
                </div>
                <span
                  className="fw-semibold fs-12 lh-1 text-primary text-decoration-underline"
                  onClick={() => setIsView(true)}
                  role="button"
                >
                  {t("changeReminderSettings")}
                </span>
              </div>
              <Modal
                show={isView}
                onHide={() => {
                  setIsView(false);
                }}
                centered
                className="modal-container"
              >
                <Modal.Header closeButton className="border-0 p-3 mt-4">
                  <div className="d-flex justify-content-between align-items-center w-100">
                    <img src={Next} alt="next btn" />

                    <button
                      type="button"
                      className=" p-0 border-0 bg-transparent"
                      onClick={() => setIsView(false)}
                    />
                  </div>
                </Modal.Header>
                <Modal.Body className="p-4">
                  <div className="text-center d-flex flex-column gap-3">
                    <h4 className="fs-5 lh-1 fw-semibold py-2">
                      {t("changeReminderTitle")}
                    </h4>
                    <p className="fs-5 text-center lh-1 fw-normal">
                      {t("changeReminderSubtext")}
                    </p>
                  </div>
                  <div className="px-3">
                    <div className="bg-success bg-opacity-10 ">
                      <div className="d-flex justify-content-between p-3">
                        <div className=" d-flex align-items-center">
                          <img src={sms} alt="whatsapp" />
                          <span className="ps-2 text-start fs-5">
                            {t("viaSMS")}
                          </span>
                        </div>
                        <input
                          className="form-check-input border-2 border-black bg-white"
                          type="checkbox"
                          checked={settings.viaSMS}
                          onChange={handleToggleChange("viaSMS")}
                        />
                      </div>
                    </div>
                    <div className="bg-success bg-opacity-10 my-3">
                      <div className="d-flex justify-content-between p-3">
                        <div className=" d-flex align-items-center">
                          <img src={email} alt="whatsapp" />
                          <span className="ps-2 text-start fs-5">
                            {t("viaEmail")}
                          </span>
                        </div>
                        <input
                          className="form-check-input border-2 border-black bg-white"
                          type="checkbox"
                          checked={settings.viaEmail}
                          onChange={handleToggleChange("viaEmail")}
                        />
                      </div>
                    </div>
                    <div className="bg-success bg-opacity-10 mb-3">
                      <div className="d-flex justify-content-between p-3">
                        <div className=" d-flex align-items-center">
                          <img src={whatsapp} alt="whatsapp" />
                          <span className="ps-2 text-start fs-5">
                            {t("viaWhatsapp")}
                          </span>
                        </div>
                        <input
                          className="form-check-input border-2 border-black bg-white"
                          type="checkbox"
                          checked={settings.viaWhatsapp}
                          onChange={handleToggleChange("viaWhatsapp")}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <button
                      className="agent-button1 mx-auto rounded-pill px-3 py-2 fw-bold shadow-sm text-white"
                      onClick={handleOwnerData}
                    >
                      {t("update")}
                    </button>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
export default Setting;
