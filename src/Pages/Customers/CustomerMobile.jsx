import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import { IoIosArrowUp } from "react-icons/io";
import add_reaction from "../../assets/images/add_reaction.svg";
import searchIcon from "../../assets/images/search.svg";
import whiteSearchIcon from "../../assets/images/white-search-icon.svg";
import editIcon from "../../assets/images/edit.svg";
import deleteIcon from "../../assets/images/delete.svg";
// import CustomButton from "../../Componant/Common/Button/Button";
import { useClientService } from "../../Services/ClientService";
import search from "../../assets/images/search.svg";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import search_icon2 from "../../assets/images/search_icon2.svg";
import RangeSlider from "../../Componant/Common/RangeSlider/RangeSlider";
import { Modal } from "react-bootstrap";
import close from "../../assets/images/ButtonClose.png";

const CustomerMobile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const { getClientData, getClients, filteredClients, setFilteredClients } =
    useClientService();
  const [clientNameInput, setClientNameInput] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);

  const scrollRef = useRef(null);

  const features = t("cust_additional_features_value")
    .split(",")
    .map((feature) => feature.trim());

  console.log(scrollRef, "saafsfsfsdgsgdfgdfg");
  const scroll = (direction) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = 120; 
      const currentScroll = container.scrollLeft;

      let newScroll =
        direction === "right"
          ? currentScroll + scrollAmount
          : currentScroll - scrollAmount;
 
      newScroll = Math.max(
        0,
        Math.min(newScroll, container.scrollWidth - container.clientWidth)
      );

      container.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
    }

    console.log(scroll, "adsdfwjrgijerioguou")
  };

  const filtered = () => {
    const results = getClientData({
      clientName: clientNameInput,
    });
    setFilteredClients(results);
  };
  useEffect(() => {
    const fetchedClients = getClients();
    setFilteredClients(fetchedClients);
  }, []);

  console.log("filtererererer", filtered);
  return (
    <>
      <div className="d-block  bg-transparent px-3 bg-white mx-0 py-2">
        <div className="bg-white p-3 rounded-3 ">
          <div className="d-flex justify-content-between align-items-center pt-3">
            <button
              type="button"
              className="btn btn-outline-success d-flex align-items-center fs-15 justify-content-center rounded-pill py-1 gap-2"
              onClick={() => navigate(`/${lang}/customers/add-customers`)}
            >
              <img src={add_reaction} alt="Add Client" />
              {t("add_cust")}
            </button>

            <button
              type="button"
              className="btn btn-outline-success rounded-pill py-1 px-4 d-flex align-items-center"
            >
              <img src={deleteIcon} alt="Delete" className="pr-1" />
              {t("cust_delete")}
            </button>
          </div>
          <div className="my-4 position-relative border rounded py-2 px-3 d-flex w-100 w-md-75 mx-auto">
            <input
              type="text"
              className="form-control border-0 p-0 flex-grow-1 mb-0"
              placeholder={t("filter_cust")}
              value={clientNameInput}
              onChange={(e) => setClientNameInput(e.target.value)}
            />
            <button
              className="btn border-0 p-0 ms-2"
              type="button"
              onClick={filtered}
            >
              <img src={searchIcon} alt="Search" />
            </button>
          </div>
          <div>
            <button
              type="button"
              className="agent-btn-responsive1  text-white d-flex align-items-center justify-content-center rounded-pill py-2 px-3"
              onClick={() => setShowModal(true)}
            >
              <img
                className="me-2"
                src={whiteSearchIcon}
                alt="Advanced Search"
              />
              {t("advance_search")}
            </button>
          </div>
        </div>
        <div className="mt-4 bg-transparent p-3 rounded-3">
          <Accordion className="d-flex flex-column gap-3">
            {filteredClients.map((client, index) => (
              <Accordion.Item
                eventKey={index.toString()}
                key={client.id}
                className="border-top-2 border-top rounded-3  "
                style={{ borderInlineStart: "6px solid #2CAC74" }}
              >
                <Accordion.Header>
                  <div className="d-flex justify-content-between w-100">
                    <div className="d-flex gap-2">
                      <input
                        type="checkbox"
                        className="form-check-input border-2 border-black mx-1 "
                      />
                      <div className="ms-3">
                        <p className="mb-1 fw-semibold fs-6 lh-1">
                          {client.name}
                        </p>
                        <p className="mb-1 fs-15 fw-normal lh-1">
                          {client.type}
                        </p>
                        <p className="mb-1 fs-15 fw-normal text-nowrap lh-1 text-decoration-underline">
                          {client.phone}
                        </p>
                      </div>
                    </div>
                    <div className="me-2 d-flex align-items-center justify-content-between">
                      <span className="badge bg-warning">{client.status}</span>
                      <IoIosArrowUp className="mx-3" />
                    </div>
                  </div>
                </Accordion.Header>
                <div className="position-relative my-3 px-2">
                  <div className="d-flex align-items-center">
                  <button
                      className="btn-circle ms-2"
                      onClick={() => scroll("right")}
                    >
                      <FaChevronRight />
                    </button>
                    
                    <div
                      ref={scrollRef}
                      className="scroll-container d-flex flex-nowrap overflow-auto align-items-center gap-2"
                      style={{
                        scrollBehavior: "smooth",
                        whiteSpace: "nowrap",
                        width: "100%",
                      }}
                    >
                      {features.map((feature, id) => (
                        <span key={id} className="custom-badge px-3 py-1">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <button
                      className="btn-circle me-2"
                      onClick={() => scroll("left")}
                    >
                      <FaChevronLeft />
                    </button>
                  </div>
                </div>
                <Accordion.Body>
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-1">
                      <span className="fs-15 fw-semibold lh-1">
                        {t("cust_property_type")}
                      </span>
                      <p className="mb-0 lh-1 fs-15 fw-normal">
                        {t("cust_property_type_value")}
                      </p>
                    </div>

                    <div className="d-flex align-items-center gap-2 mb-1">
                      <span className="fs-15 fw-semibold lh-1">
                        {t("cust_Property_Condition")}
                      </span>
                      <p className="fw-normal lh-1 fs-15 mb-0">
                        {t("cust_Property_Condition_value")}
                      </p>
                    </div>

                    <div className="d-flex align-items-center gap-2 mb-1">
                      <span className="fs-15 fw-semibold lh-1">
                        {t("cust_no_rooms")}
                      </span>
                      <p className="fw-normal lh-1 fs-15 mb-0">
                        {t("cust_no_rooms_value")}
                      </p>
                    </div>

                    <div className="d-flex align-items-center gap-2 mb-1">
                      <span className="fs-15 fw-semibold lh-1">
                        {t("cust_apartment_size")}
                      </span>
                      <p className="fw-normal lh-1 fs-15 mb-0">
                        {t("cust_apartment_size_value")}
                      </p>
                    </div>

                    <div className="d-flex align-items-center gap-2 mb-1">
                      <span className="fs-15 fw-semibold lh-1">
                        {t("cust_floor")}
                      </span>
                      <p className="fw-normal lh-1 fs-15 mb-0">4,5</p>
                    </div>

                    <div className="d-flex align-items-center gap-2 mb-1">
                      <span className="fs-15 fw-semibold lh-1">
                        {t("cust_price")}:
                      </span>
                      <p className="fw-normal lh-1 fs-15 mb-0">1000 - 3000 ₪</p>
                    </div>

                    <div className="d-flex align-items-center gap-2 mb-1">
                      {/* <strong>{t("cust_additional_comments")}</strong> */}
                      <p className="text-wrap fs-12 fw-normal lh-1">
                        {t("cust_additional_comments_value")}
                      </p>
                    </div>

                    <div className="mt-3 ">
                      <span className="fs-15 fw-semibold lh-1 mb-1">
                        {t("recent_agreements")}:
                      </span>
                      <p className="mb-1 primary-text fs-12 lh-1 fw-normal text-decoration-underline">
                        {t("recent_agreements_value_1")}
                      </p>
                      <p className="mb-1 primary-text fs-12 lh-1 fw-normal text-decoration-underline">
                        {t("recent_agreements_value_2")}
                      </p>
                    </div>
                  </div>

                  <div className="d-flex justify-content-between mt-3">
                    <p className="fw-semibold fs-12 lh-base primary-text text-decoration-underline">
                      {t("all_age")}
                    </p>

                    <div className="d-flex align-items-center">
                      <img src={editIcon} alt="Edit" className="px-1" />
                      <img
                        src={deleteIcon}
                        alt="Delete"
                        className="px-1"
                        style={{ cursor: "pointer" }}
                        onClick={handleShowModal}
                      />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
        <Modal
          show={showModal}
          onClick={() => setShowModal(false)}
          centered
          className="modal-container"
          // dialogClassName="modal-dialog-bottom"
        >
          <Modal.Header className="border-0 p-3 d-flex justify-content-end mt-3">
            <button
              type="button"
              className="btn p-0 border-0 bg-transparent"
              onClick={() => setShowModal(false)}
            >
              <img src={close} alt="close" />
            </button>
          </Modal.Header>
          <h3 className="py-3 px-2 mb-3 text-center screen-1  d-none d-md-block">
            {t("addtional_filter")}
            <hr className="border-secondary" />
          </h3>

          <Modal.Body
            className=" px-5 py-0 modal-body-scrollable"
            style={{ maxHeight: "600px" }}
          >
            <div className="d-block d-md-none">
              <div className="flex-grow-1 text-start">
                <label className="mb-1 fs-15 lh-1 fw-semibold">
                  {t("cust_filter_1")}
                </label>
                <select className="form-select">
                  <option disabled selected>
                    Select Option
                  </option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>
              <div className="flex-grow-1 text-start">
                <label className="mb-1 fs-15 lh-1 fw-semibold ">
                  {t("cust_filter_2")}
                </label>
                <div className="position-relative border border-[#D6D6D6] rounded py-2 px-3 d-flex mx-auto">
                  <input
                    type="text"
                    className="form-control border-0 p-0 mb-0"
                    placeholder={t("cust_filter_place_2")}
                  />
                  <button
                    className="btn border-0 p-0 ms-2"
                    type="button"
                    aria-label="Search"
                  >
                    <img src={search} alt="Search" />
                  </button>
                </div>
              </div>
              <div className="flex-grow-1 text-start">
                <label className="form-label fs-15 lh-1 fw-semibold">
                  {t("cust_serch")}
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={t("cust_typing")}
                />
              </div>

              <div className="flex-grow-1 text-start">
                <label className="mb-1 fs-15 lh-1 fw-semibold">
                  {t("cust_Property_type")}
                </label>
                <select className="form-select">
                  <option disabled selected>
                    Select Option
                  </option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>

              <div className="flex-grow-1 text-start">
                <label className="mb-1 fs-15 lh-1 fw-semibold">
                  {t("cust_Property_condition")}
                </label>
                <select className="form-select">
                  <option disabled selected>
                    Select Option
                  </option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4 mb-4">
              <div className="col">
                <label className="d-block text-secondary text-start fs-15 lh-1 fw-semibold mb-1">
                  {t("cust_modal_no_rooms")}
                </label>
                <div className="position-relative d-flex align-items-center border rounded px-2 py-1">
                  <input
                    type="text"
                    placeholder="התחילו להקליד..."
                    className="w-100 border-0 text-secondary"
                  />
                  <button
                    className="btn btn-outline-none py-0"
                    type="button"
                    aria-label="Search"
                  >
                    <img src={search_icon2} alt="Search" />
                  </button>
                </div>
              </div>
              <div className="col">
                <label className="d-block text-secondary text-start  fs-15 lh-1 fw-semibold mb-1">
                  {t("floor")}
                </label>
                <select className="form-select">
                  <option></option>
                  <option>בחר</option>
                </select>
              </div>
            </div>
            <div className="d-flex flex-column gap-4 mb-4">
              <RangeSlider label={t("cust_slider_label")} />
              <RangeSlider label={t("cust_slider_label2")} />
            </div>
            <h3 className="lh-1 fs-5  font-semibold text-teal mb-3">
              {t("addtional_feature")}
            </h3>
            <div className="d-flex flex-wrap gap-2 justify-content-start">
              {Array.from({ length: 9 }, (_, i) => (
                <button
                  key={i}
                  className="bg-gray-200 px-3 py-1 rounded-pill text-secondary fs-15 fw-normal lh-1 border-0"
                >
                  {t(`addtional_feature_${i + 1}`)}
                </button>
              ))}
            </div>
          </Modal.Body>

          <Modal.Footer className="border-top-0 justify-content-between gap-3 mb-3 px-4">
            <button
              className="fs-17 lh-1 gap-1 fw-semibold mt-md-4 w-25 agent-btn-responsive2 py-2 mx-1 rounded-pill"
              onClick={() => setShowModal(false)}
            >
              {t("cust_model_footer")}
            </button>
            <button className="fs-17 lh-1 gap-1 fw-semibold mt-md-4 w-25 agent-btn-responsive1 text-white  py-2 mx-1 rounded-pill">
              {t("cust_model_footer1")}
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default CustomerMobile;
