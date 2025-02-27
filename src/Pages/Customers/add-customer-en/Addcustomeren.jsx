import React, { useState } from "react";
import bodyBg from "../../../assets/images/body_bg.webp";
import boryGroupLeft from "../../../assets/images/bory_group_left.png";
import boryGroupRight from "../../../assets/images/bory_group_right.png";
import userTypeIcon1 from "../../../assets/images/user_type_icon1.svg";
import userTypeIcon2 from "../../../assets/images/user_type_icon2.svg";
import userTypeIcon3 from "../../../assets/images/user_type_icon3.svg";
import keyVertical from "../../../assets/images/key_vertical.svg";
import garageDoor from "../../../assets/images/garage_door.svg";
import searchIcon from "../../../assets/images/search.svg";
import "../add-customer-en/Add-customer-en.css";
import CustomInput from "../../../Componant/Common/Input/Custominput";
import CustomSelect from "../../../Componant/Common/Select/Customeselect";
import dashLine from "../../../assets/images/dash_line.svg";
import CustomModal from "../../../Componant/Common/Modal/CustomeModal";
import successIcon from "../../../assets/images/success_icon.svg";




const AddCustomer = () => {
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
    setIsFirstModalOpen(false); // Hide First Modal
    setIsSecondModalOpen(true); // Show Second Modal
  };

  
  return (
    <main>
      <div className="top_bg_image">
        <figure className="mb-0 top_bg_fig">
          <img src={bodyBg} width="100%" alt="Background" />
          <span className="bgupper_icons">
            <img src={boryGroupLeft} alt="left bg icon" />
          </span>
        </figure>
        <div className="bgbelow_icons">
          <img src={boryGroupRight} alt="right bg icon" />
        </div>
      </div>
      <div className="main_wrapper ">
        <div className="main_wrap_hdr">
          <h1 className="bor_head_cmn text-center">הוספת לקוח חדש</h1>
        </div>
        <div className="main_wrap_body p-0">
          <form className="form_custom">
            <div className="internal_scroll mCustomScrollbar _mCS_2 mCS_no_scrollbar ">
              <div className="row form_group">
                <h4>פרטים אישיים {/* Personal Detail */}</h4>
                <div className="col-md-4">
                  <label className="form-label">שם מלא*</label>
                    <CustomInput
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="col-md-4">
                  <label className="form-label">טלפון*</label>
                  <CustomInput 
                      type="number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form_mobile form-control"
                  />                 
                </div>
                <div className="col-md-4">
                  <label className="form-label">דוא”ל*</label>
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
                    <label className="form-label">ת”ז</label>
                    <CustomInput 
                     type="text"
                     name="idCard"
                     value={formData.idCard}
                     onChange={handleChange}
                     className="form-control"
                    />     
                </div>
                <div className=" col-12 col-md-8">
                    <label className="form-label">כתובת מגורים מלאה</label>
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
                <p className="form-label mb-2">סוג לקוח</p>
                {[
                  { id: "usertype_1", icon: userTypeIcon1, label: "מתעניין" },
                  { id: "usertype_2", icon: userTypeIcon2, label: "בעל נכס" },
                  { id: "usertype_3", icon: userTypeIcon3, label: "מתווך" },
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
                <h4>העדפות לקוח</h4>
                {[
                  { id: "user_pra1", icon: keyVertical, label: "מהשכרה" },
                  { id: "user_pra2", icon: garageDoor, label: "בקנייה" },
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
                  <label className="form-label">איזור מגורים מבוקש</label>
                  <div className="input-group input_grp_cus">
                    <CustomInput 
                     type="text"
                     name="requestedArea"
                     value={formData.requestedArea}
                     onChange={handleChange}
                     className="form-control"
                     placeholder="התחילו להקליד..."
                    />     
                    <button className="btn " type="button">
                      <img src={searchIcon} alt="search" />
                    </button>
                  </div>
                </div>
                <div className="col-md-4">
                  <label className="form-label">סוג הנכס</label>
                    <CustomSelect
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        options={[
                            { value: "", label: "" },
                            { value: "option1", label: "Option 1" },
                            { value: "option2", label: "Option 2" },
                        ]}
                        className="form-select"
                    />
                </div>
                <div className="col-md-4">
                  <label className="form-label">מצב הנכס</label>
                    <CustomSelect
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        options={[
                            { value: "", label: "" },
                            { value: "option1", label: "Option 1" },
                            { value: "option2", label: "Option 2" },
                        ]}
                        className="form-select"
                    />
                </div>
              </div>
                <div className="row form_group">
                    <div className="col-md-4">
                    <label className="form-label">מספר חדרים {/** Number of room */}</label>
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
                    <label className="form-label"> גודל  (מ”ר) </label>
                    <div id="slider1" className="slider-wrapper">
                        <div className="price-input">
                        <div className="field">
                            <input type="number" className="form-control input-min" value="0" />
                        </div>
                        <div className="separator"><img src={dashLine} alt="separator" className="mCS_img_loaded" /></div>
                        <div className="field">
                            <input type="number" className="form-control input-max" value="10000" />
                        </div>
                        </div>
                        <div className="slider">
                        <div className="progress"></div>
                        </div>
                        <div className="range-input">
                        <input type="range" className="range-min" min="0" max="10000" value="0" step="100" />
                        <input type="range" className="range-max" min="0" max="10000" value="10000" step="100" />
                        </div>
                    </div>  
                    </div>    
                    <div className="col-lg-4">
                  <label className="form-label"> מחיר (ש”ח)  </label>
                  <div id="slider2" className="slider-wrapper">
                    <div className="price-input">
                      <div className="field">
                        <input type="number" className="form-control input-min" value="0" />
                      </div>
                      <div className="separator"><img src={dashLine} alt="separator" className="mCS_img_loaded" /></div>
                      <div className="field">
                        <input type="number" className="form-control input-max" value="10000" />
                      </div>
                    </div>
                    <div className="slider">
                      <div className="progress"></div>
                    </div>
                    <div className="range-input">
                      <input type="range" className="range-min" min="0" max="10000" value="0" step="100" />
                      <input type="range" className="range-max" min="0" max="10000" value="10000" step="100" />
                    </div>
                  </div>
                    </div>
                </div>
                <h4>מאפיינים נוספים</h4>
                <ul class="services_tags">
                  <li><span>כניסה מיידית  </span></li>
                  <li><span>כניסה גמישה  </span></li><br />
                  {[
                    {title: "מרפסת"},
                    {title: "גישה לנכים"},
                    {title: "מעלית "},
                    {title: "מחסן"},
                    {title: "ממ”ד"},
                    {title: "מזגן"},
                    {title: "מרוהט "},
                    {title: "חניה "},
                    {title: "סורגים "},
                  ].map((item) => <li><span>{item.title}</span></li>

                  )}
                </ul>
              <div className="form_group">
                <label className="form-label">בקשות הלקוח</label>
                <textarea
                  name="customerRequests"
                  value={formData.customerRequests}
                  onChange={handleChange}
                  className="form-control"
                ></textarea>
              </div> 
              <button type="button" className="btn_cmn mt-3"  onClick={() => setIsFirstModalOpen(true)}>
                הוספה
              </button>
            </div>
          </form>
        </div>
      </div>
      {/** Add Customer Successfully */}
      <div className="modalcontent">
        {
          isFirstModalOpen && 
          <CustomModal
          show={isFirstModalOpen}
          handleClose={() => setIsFirstModalOpen(false)}
          onClick={openSecondModal}
          footer={"לדו”ח התאמות נכסים"}
          footer1={'לשליחת הסכם'}
          >
          <figure class="succ_pop_icon text-center"><img src={successIcon} alt="Success" /></figure>
          <h4 className="pop_head color_green text-center">הלקוח נוסף בהצלחה</h4>
          </CustomModal>
        }

        {
          isSecondModalOpen && 
          <CustomModal
          show={isSecondModalOpen}
          handleClose={() => setIsSecondModalOpen(false)}
          footer={"לדו”ח התאמות נכסים"}
          footer1={'לשליחת הסכם'}
          >
            <figure class="succ_pop_icon text-center"><img src={successIcon} alt="Success" /></figure>
            <h4 className="pop_head  text-center">הלקוח נוסף בהצלחה</h4>
            <div className="text-center ">
              <button className=" modalbtn mb-4">  לשליחת הסכם החתמת מתעניין  </button>
              <button className="modalbtn mb-4">  לשליחת הסכם החתמת בעל נכס  </button>
              <button className=" modalbtn mb-4">  לשליחת הסכם שת”פ בין מתווכים </button>
            </div>
          </CustomModal>
        }
      </div>
    </main>
  );
};

export default AddCustomer;


