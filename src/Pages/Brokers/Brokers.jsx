import React, { useState } from "react";
import bodyBg from "../../assets/images/body_bg.webp";
import boryGroupLeft from "../../assets/images/bory_group_left.png";
import boryGroupRight from "../../assets/images/bory_group_right.png";
import "../Brokers/Brokers.css";
import key_vertical from "../../assets/images/key_vertical.svg";
import garage_door from "../../assets/images/garage_door.svg";
import add_reaction from "../../assets/images/add_reaction.svg";
import add_home from "../../assets/images/add_home.svg";
import search from "../../assets/images/search.svg";
import CustomModal from "../../Componant/Common/Modal/CustomeModal";
import Next from "../../assets/images/Next.jpg";
import CustomInput from "../../Componant/Common/Input/Custominput";
import successIcon from '../../assets/images/success_icon.svg';
import Accordion from 'react-bootstrap/Accordion';
import whatsapp from '../../assets/images/wa, whatsapp, message, communication, chat.svg';
import { Modal,} from "react-bootstrap";
import sms from '../../assets/images/sms.svg'
import email from '../../assets/images/email.svg';
import group from '../../assets/images/Group 2538.png';
import gyiphy from '../../assets/images/giphy 1.png'


const Brokers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isView, setIsView] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleOpen = () => {setIsOpen(true);};
  const handleShow = () => {setIsShow(true);};
  const handleView = () => {setIsView(true)};
  const handleSentSuccess = () => {
    setShowSuccess(false);
    setSentSuccess(true);
  }
  const handleIsShow = () => {
    setIsView(false);
    setShowSuccess(true)};

  return (
    <>
      <div className="position-absolute w-100 overflow-x-hidden top-0 z-0 ">
        <figure className="mb-0 top_bg_fig">
          <img src={bodyBg} className="w-100" alt="Background" />
          <span className="position-absolute top-0 end-0">
            <img src={boryGroupLeft} alt="left bg icon" />
          </span>
        </figure>
        <div className="bgbelow_icons">
          <img src={boryGroupRight} alt="right bg icon" />
        </div>
      </div>
      <div className="bg-white w-100 scrollbar-left mx-auto pb-4 scrollbar-content position-relative z-3 rounded-3 shadow-lg mainPage">
        <div class="px-3 px-md-4">
          <h1 class="fs-4 fw-semibold  py-4 mb-7 border-bottom text-center text-embed-500">
            הוספת נכס חדש
          </h1>
        </div>
        <div className=" px-md-5">
          <div className="card p-3 border rounded-3 mb-4">
            <h5 className=" text-embed-500 mb-4">
              סוג שיתוף הפעולה וחלוקת העמלה
            </h5>
            <form>
              <div className="mb-3 form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="commission"
                  id="sharedPool"
                  defaultChecked
                />
                <label
                  className="form-check-label fw-bold"
                  htmlFor="sharedPool"
                >
                  קופה משותפת - מחברים יחד את עמלת המוכר, ואת עמלת הקונה, וכל
                  מתווך מקבל חצי
                </label>
              </div>

              <div className="mb-3 form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="commission"
                  id="eachGetsOwn"
                />
                <label className="form-check-label" htmlFor="eachGetsOwn">
                  כל אחד מהלקוח שלו
                </label>
              </div>

              <div className="mb-3 form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="commission"
                  id="buyerPaysSeller"
                />
                <label className="form-check-label" htmlFor="buyerPaysSeller">
                  מתווך הקונה מעביר למתווך המוכר
                </label>
              </div>

              <div className="mb-3 form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="commission"
                  id="other"
                />
                <label className="form-check-label" htmlFor="other">
                  סיכום אחר
                </label>
              </div>
            </form>
          </div>
          <div className="card p-3 border  rounded-3 mb-4">
            <h5 className=" text-embed-500 mb-4">סוג העסקה</h5>
            <div className=" d-flex justify-content-start align-items-center gap-3">
              <div className="border-2 rounded-2 p-2 iconbox iconbox ">
                <img src={key_vertical} alt="" className="ms-3" />
                <span className="fs-5 fw-normal lh-base text-center px-1">
                  השכרה
                </span>
              </div>
              <div className="border-2 rounded-2 p-2 iconbox iconbox">
                <img src={garage_door} alt="" className="ms-3" />
                <span className="fs-5 fw-normal lh-base text-center px-2">
                  קנייה
                </span>
              </div>
            </div>
          </div>
          <div className="card p-3 border  rounded-3 mb-4">
            <div className="form_group mb-2 mb-xl-0 d-flex justify-content-between">
              <h5 className=" text-embed-500 mb-4">פרטי המתווכים/ות</h5>
              <button
                type="button"
                className="border text-xl mt-2 d-flex align-items-center justify-content-center shadow-lg rounded-pill py-1 px-4 search-button"
                onClick={handleOpen}
              >
                <div className="flex items-center justify-center">
                  <img className="me-1" src={add_reaction} alt="Add Client" />
                  {"add_cust"}{" "}
                </div>
              </button>
            </div>
            <div className="mb-3">
              <label for="searchInput" className="form-label fw-semibold">
                חפשו לקוחות או הוסיפו לקוחות חדשים, ניתן להוסיף יותר מלקוח אחד
              </label>
              <div className="input-group w-75">
                <input
                  type="text"
                  className="form-control border-end-0"
                  id="searchInput"
                  placeholder="התחילו להקליד את שם המתווך."
                />
                <span className="input-group-text text-success bg-transparent border-1 border-start-0">
                  <img src={search} alt="search" />
                </span>
              </div>
            </div>
          </div>
          <div className="card p-3 border  rounded-3 mb-4">
            <div className="form_group mb-2 mb-xl-0 d-flex justify-content-between">
              <h5 className=" text-embed-500 mb-4">בחירת נכסים</h5>
              <button
                type="button"
                onClick={handleShow}
                className="border text-xl mt-2 d-flex align-items-center justify-content-center shadow-lg rounded-pill py-1 px-4 search-button"
              >
                <div className="flex items-center justify-center">
                  <img className="me-1" src={add_home} alt="Add Client" />
                  {"add_cust"}{" "}
                </div>
              </button>
            </div>
            <div className="mb-3">
              <label for="searchInput" className="form-label fw-semibold">
                חפשו נכסים קיימים או הוסיפו נכס חדש, ניתן להוסיף יותר מנכס אחד
              </label>
              <div className="input-group w-75">
                <input
                  type="text"
                  className="form-control border-end-0"
                  id="searchInput"
                  placeholder="התחילו להקליד את כתובת הנכס  s"
                />
                <span className="input-group-text text-success bg-transparent border-1 border-start-0">
                  <img src={search} alt="search" />
                </span>
              </div>
            </div>
          </div>
          <div className="card p-3 border  rounded-3 mb-4">
            <h5 className=" text-embed-500 mb-4">הערות</h5>
            <div className=" px-2 pb-2">
              <textarea
                className="form-control"
                placeholder="תוכלו לכתוב כאן הערות"
                rows="4"
              ></textarea>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3 mb-4">
            <div className="form-check form-switch">
              <input
                className="form-check-input bg-embed-500 border-0"
                type="checkbox"
                id="toggleImages"
                defaultChecked
              />
              <label className="fs-5 fw-normal lh-1" htmlFor="">
                שליחת תמונות
              </label>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input bg-embed-500"
                type="checkbox"
                id="toggleDocs"
              />
              <label className="fs-5 fw-normal lh-1" htmlFor="">
                שליחת נספחי נכס
              </label>
            </div>
          </div>
          <div className="d-flex gap-3 ">
           <button className="agent-button1  rounded-pill px-5 py-2 fw-bold shadow-sm text-white" onClick={handleView}>
              שליחה
            </button>
            <button className=" agent-button2 rounded-pill px-4 py-2 fw-bold">
              הפקה ללא שליחה
            </button>
            <button className=" agent-button2 rounded-pill px-5 py-1 fw-bold">
              צפייה
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="w-100">
          <CustomModal
            show={isOpen}
            onClick={handleOpen}
            handleClose={() => setIsOpen(false)}
            header={<img src={Next} alt="next btn" />}
          >
            <h5 className=" text-embed-500 mb-2 fs-3 text-center">
              הוספה מהירה של לקוח חדש
            </h5>
            <p className="fs-5S font-normal text-center">
              תוכלו לחזור מאוחר יותר למסך לקוחות ולמלא את שאר פרטי הלקוח
            </p>
            <div className="d-flex flex-row justify-center">
              <form className=" w-100">
                <div className="container-fluid">
                  <div className="mb-3 w-100">
                    <label
                      htmlFor="email"
                      className="form-label fw-bold text-start d-block mb-1"
                    >
                      דוא״ל *
                    </label>
                    <CustomInput
                      type="email"
                      className="form-control w-100"
                      id="email"
                      required
                    />  
                  </div>

                  <div className="mb-3 w-100">
                    <label
                      htmlFor="phone"
                      className="form-label fw-bold text-start d-block mb-1"
                    >
                      טלפון *
                    </label>
                    <CustomInput
                      type="tel"
                      className="form-control w-100"
                      id="phone"
                      required
                    />
                  </div>

                  <div className="mb-3 w-100">
                    <label
                      htmlFor="fullname"
                      className="form-label fw-bold text-start d-block mb-1"
                    >
                      שם מלא *
                    </label>
                    <CustomInput
                      type="text"
                      className="form-control w-100"
                      id="fullname"
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className=" my-4">
              <button className="agent-button1  rounded-pill px-5 py-2 fw-bold shadow-sm text-white" onClick={() => setIsOpen(false)}>
                הוספה
              </button>
            </div>
          </CustomModal>
        </div>
      )}
      {isShow && (
        <div className="w-100">
          <CustomModal
            show={isShow}
            onClick={handleShow}
            handleClose={() => setIsShow(false)}
            header={<img src={Next} alt="next btn" width="32px" height='32px'/>}
          >
            <h5 className=" text-embed-500 mb-2 fs-3 text-center">
              הוספה מהירה של נכס חדש
            </h5>
            <p className="fs-5S font-normal text-center">
              תוכלו לחזור מאוחר יותר למסך לקוחות ולמלא את שאר פרטי הלקוח
            </p>
            <div className="d-flex flex-row justify-center">
              <form>
                <div className=" mb-3">
                  <label
                    for="email"
                    className="form-label fw-bold text-start d-block mb-1"
                  >
                    עיר
                  </label>
                  <CustomInput
                    type={"email"}
                    className={"w-100"}
                    id={"email"}
                    required
                  />
                </div>

                <div className=" mb-3">
                  <label
                    for="phone"
                    className="form-label fw-bold text-start d-block mb-1"
                  >
                    רחוב*
                  </label>
                  <CustomInput
                    type={"tel"}
                    className={"w-100"}
                    id={"phone"}
                    required
                  />
                </div>
                <div className="d-flex  justify-content-center">
                  <div className="row g-3 align-items-center">
                    <div className="col-md-6">
                      <label
                        for="apartmentNumber"
                        className="form-label text-start fw-bold  d-block"
                      >
                        מס׳ דירה *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="apartmentNumber"
                        required
                      />
                    </div>

                    <div className="col-md-6">
                      <label
                        for="buildingNumber"
                        className="form-label fw-bold text-start d-block"
                      >
                        מס׳ בניין *
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="buildingNumber"
                        required
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className=" my-4">
              <button className="agent-button1  rounded-pill px-5 py-2 fw-bold shadow-sm text-white" onClick={() => setIsOpen(false)}>
                הוספה
              </button>
            </div>
          </CustomModal>
        </div>
      )}
      <Modal show={isView} onHide={() => {setIsView(false)}} centered className="custom-modal">
      <Modal.Header closeButton className=" border-0">
        <img src={Next} alt="next btn" className="" />
      </Modal.Header>
      <Modal.Body className="p-4">
        <div className="text-center">
          <img src={successIcon} alt="Success" className="mx-auto w-20 h-20 mb-3" />
          <h4 className="text-embed-500 fs-3 font-semibold">ההמסמך שלכם מוכן</h4>
          <p className="fs-5 font-semibold">כיצד תרצו לשלוח אותו ?</p>
        </div>
        {/* Options Section */}
        <div className="options-container">
          <div className="option-item rounded-3 my-3">
            <Accordion defaultActiveKey={null} className="custom-accordion">
              <Accordion.Item eventKey="0 " className="custom-header">
                <Accordion.Header className=" bg-success-subtle">
                  <div className="d-flex justify-content-between w-100">
                    <div className=" d-flex align-items-center">
                       <img src={whatsapp} alt="whatsapp" />
                       <span className="ps-2 text-start fs-5">שליחה ל-WhatsApp</span>
                    </div>
                    <input className="form-check-input border border-black bg-white" type="checkbox" />
                  </div>
                </Accordion.Header>
                <Accordion.Body className="bg-success-subtle">
                <ul className="fw-bold ">
                  <li>שליחת המסמך ללא הצורך להקים אנשי קשר</li>
                  <li>שליחת המסמך בפעולה אחת</li>
                  <li>שליחת המסמך כמותעד במערכת</li>
                </ul>
                <p className="mt-3 fw-bold ">
                  השירות כרוך בבחירת חבילה ותשלום נוסף.
                  במידה ותבחר באפשרות זו, כרטיס האשראי השמור במערכת יחויב בתוספת התשלום.
                </p>
              {/* Pricing Cards */}
              <div className="row justify-content-center text-center mt-4">
                <div className="col-md-3 ">
                  <div className="border rounded p-2 bg-white  shadow-sm">
                    <h3 className="text-embed-500 fs-2 fw-bold">150</h3>
                    <p className="mb-0 text-embed-500">הודעות</p>
                    <p className="text-embed-500">₪ 70-ב</p>
                  </div>
                </div>

                <div className="col-md-3 ">
                  <div className="border rounded shadow-sm p-1 bg-white">
                    <p className="mb-0 text-embed-500">הכי משתלם</p>
                    <h3 className="text-embed-500 fs-2 fw-bold">100</h3>
                    <p className="mb-0 text-embed-500">הודעות</p>
                    <p className=" text-embed-500">₪ 50-ב</p>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="border rounded p-2 bg-white shadow-sm">
                    <h3 className="text-embed-500 fs-2 fw-bold">50</h3>
                    <p className="mb-0 text-embed-500">הודעות</p>
                    <p className="text-embed-500">₪ 30-ב</p>
                  </div>
                </div>
              </div>
        </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="option-item rounded-3 my-3">
            <Accordion defaultActiveKey={null} className="custom-accordion ">
              <Accordion.Item eventKey="0" className="custom-header">
                <Accordion.Header className=" bg-success-subtle">
                  <div className="d-flex justify-content-between w-100">
                    <div className=" d-flex align-items-center">
                       <img src={sms} alt="whatsapp" />
                       <span className=" ps-2 text-start fs-5">שליחה ב-SMs</span>
                    </div>
                    <input className="form-check-input border border-black bg-white" type="checkbox" />
                  </div>
                </Accordion.Header>
                <Accordion.Body className="custom-body bg-success-subtle">
                  <ul className="list-unstyled">
                    <li>שליחת המסמך ללא הצורך להקים אנשי קשר</li>
                    <li>שליחת המסמך בפעולה אחת</li>
                    <li>שליחת המסמך כמותעד במערכת</li>
                  </ul>
                  <p className="mt-3">
                    השירות כרוך בבחירת חבילה ותשלום נוסף. במידה ותבחר באפשרות זו, כרטיס האשראי השמור במערכת יחויב בתוספת התשלום.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="option-item rounded-3 my-3">
            <Accordion defaultActiveKey={null} className="custom-accordion ">
              <Accordion.Item eventKey="0" className="custom-header">
                <Accordion.Header className=" bg-success-subtle">
                  <div className="d-flex justify-content-between w-100">
                    <div className=" d-flex align-items-center">
                       <img src={email} alt="whatsapp" />
                       <span className="ps-2 text-start fs-5">ליחה בדוא”לש</span>
                       </div>
                    <input className="form-check-input border border-black bg-white" type="checkbox" />
                  </div>
                </Accordion.Header>
                <Accordion.Body className="custom-body bg-success-subtle">
                  <ul className="list-unstyled">
                    <li>שליחת המסמך ללא הצורך להקים אנשי קשר</li>
                    <li>שליחת המסמך בפעולה אחת</li>
                    <li>שליחת המסמך כמותעד במערכת</li>
                  </ul>
                  <p className="mt-3">
                    השירות כרוך בבחירת חבילה ותשלום נוסף. במידה ותבחר באפשרות זו, כרטיס האשראי השמור במערכת יחויב בתוספת התשלום.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="option-item rounded-3 my-3">
            <Accordion defaultActiveKey={null} className="custom-accordion ">
              <Accordion.Item eventKey="0" className=" custom-header">
                <Accordion.Header className=" bg-success-subtle">
                  <div className="d-flex justify-content-between w-100">
                    <div className=" d-flex align-items-center">
                       <img src={group} alt="whatsapp" />
                       <span className="ps-2 text-start fs-5">שליחה ב-WhatsApp בשיתוף דרך ה</span>
                       </div>
                    <input className="form-check-input border border-black bg-white" type="checkbox" />
                  </div>
                </Accordion.Header>
                <Accordion.Body className="bg-success-subtle">
                  <ul className="list-unstyled">
                    <li>שליחת המסמך ללא הצורך להקים אנשי קשר</li>
                    <li>שליחת המסמך בפעולה אחת</li>
                    <li>שליחת המסמך כמותעד במערכת</li>
                  </ul>
                  <p className="mt-3">
                    השירות כרוך בבחירת חבילה ותשלום נוסף. במידה ותבחר באפשרות זו, כרטיס האשראי השמור במערכת יחויב בתוספת התשלום.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
        {/* Buttons */}
        <div className="text-center mt-4 d-flex flex-col">
          <button className="agent-button1 mx-auto rounded-pill px-3 py-2 fw-bold shadow-sm text-white" onClick={ handleIsShow}>
              שליחה
          </button>
          <button className="btn btn-link text-muted mt-2">הפקה ללא שליחה</button>
        </div>
      </Modal.Body>
      </Modal>
      {showSuccess && (
      <div className="position-relative">
        <CustomModal 
          show={showSuccess}
          handleClose={() => setShowSuccess(false)}
          footer={` לדו”ח התאמות לקוחות`}
          onClick={handleSentSuccess}
          footer1={" לשליחת הסכם "}
        > 
          <div className="text-center z-3 position-relative">
            <img src={successIcon} alt="Success" className="mx-auto w-20 h-20 mb-3" />
            <div className="text-center">
              <p className="fs-3 text-embed-500 font-semibold">מעולה!</p>
              <h4 className="fs-3 text-embed-500 font-semibold">המסמך נשלח בהצלחה</h4>
            </div>
          </div>
          <div 
            className="position-absolute bg-transparent top-0 my-5 z-2" 
            style={{ pointerEvents: 'none' }}
          >
            <img src={gyiphy} alt="gyiphy" className="object-fit-cover" />
          </div>
        </CustomModal>
      </div>)
      }
      {
        <Modal
          show={sentSuccess}
          onHide={() => setSentSuccess(false)}
          centered
          className="custom-modal"
        >
          <div className="position-absolute bg-transparent top-0 my-5 z-2" >
            <img src={gyiphy} alt="gyiphy" className="object-fit-cover mt-[-180px] " />
          </div>
          <Modal.Header
            closeButton
            className="border-0"
            style={{ position: 'relative', zIndex: 2 }}
          />
          <Modal.Body className="p-4" style={{ position: 'relative', zIndex: 2 }}>
            <div className="text-center">
              <img
                src={successIcon}
                alt="Success"
                className="mx-auto w-20 h-20 mb-3"
              />
              <h4 className="fs-3 text-embed-500 fw-semibold">מעולה!</h4>
              <p className="fs-5 text-embed-500 fw-semibold">המסמך נשלח בהצלחה</p>
            </div>
            <div className="text-center mt-4">
              <button
                className="agent-button1 mx-auto rounded-pill px-4 py-2 fw-bold shadow-sm text-white"
              >
                להחתמת הלקוח במכשיר שלי
              </button>
            </div>
          </Modal.Body>
        </Modal>
        }
    </>
  );
};

export default Brokers;
