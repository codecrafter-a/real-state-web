import React, { useState, useEffect, useRef } from "react";
import {
  Card,
  Accordion,
  AccordionItem,
  AccordionBody,
  AccordionHeader,
  Badge,
} from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowDown } from "react-icons/io";
import house from "../../assets/images/property-house.png";
import { useReportServices } from "../../Services/ReportServices";
import { useTranslation } from "react-i18next";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { AiOutlineDown } from "react-icons/ai";
import { Pagination, Navigation } from 'swiper/modules';
const Clientmatch_mobile = () => {
  const [reportData, setReportData] = useState([]);

  const { getReportServices } = useReportServices();
  const { t } = useTranslation();
  useEffect(() => {
    const data = getReportServices();
    setReportData(data);
  }, []);
  const scrollRef = useRef(null);

  const features = t("cust_additional_features_value")
    .split(",")
    .map((feature) => feature.trim());
    const sampleImages = [
      house,
      house,
      house
    ];
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

    console.log(scroll, "adsdfwjrgijerioguou");
  };

  return (
    <>
      <div className="row bg-light">
        <div className=" col-12">
          <div className="p-3 bg-white border shadow my-3 rounded-3">
            {/* <Card.Img
              variant="top"
              src={house}
              alt="Property"
              className="img-fluid border rounded-2 object-fit-cover w-100"
              style={{ height: "200px" }}
            /> */}
            <div className="p-3">
                  <Swiper
                     pagination={{
                      clickable: true,
                      bulletClass: 'swiper-pagination-bullet',
                      bulletActiveClass: 'swiper-pagination-bullet-active',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="property-swiper"
                  >
                    {sampleImages.map((img, imgIndex) => (
                      <SwiperSlide key={imgIndex}>
                        <Card.Img
                          variant="top"
                          src={img}
                          alt={`Property ${imgIndex + 1}`}
                          className="img-fluid border rounded-2"
                          style={{ height: "200px", objectFit: "cover", width: "100%" }}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  </div>
            <Accordion className="border-0 d-block d-lg-none">
              <AccordionItem className="border-0">
                <div className="d-flex justify-content-between py-2 px-3 gap-3 align-items-center">
                  <h5 className="mb-1 fw-bold text-success fs-6">
                    {t("address")}
                  </h5>
                  <h5 className="fw-bold fs-5 lh-1">{t("price1")}</h5>
                </div>
                <AccordionHeader className="border-0 d-flex align-items-center justify-content-between">
                  <div className="d-flex flex-column me-2">
                    <p className="mb-1 fs-6 fw-normal">{t("property_type")}</p>
                    <p className="mb-0 fs-6 fw-normal">{t("rooms")}</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <AiOutlineDown size={18} />
                  </div>
                </AccordionHeader>
                <AccordionBody>
                  <div className="mb-2">
                    <Badge bg="light" text="dark" className="me-2">
                      {t("garage1")}
                    </Badge>
                    <Badge bg="light" text="dark" className="me-2">
                      {t("balcony1")}
                    </Badge>
                    <Badge bg="light" text="dark">
                      {t("secure_room1")}
                    </Badge>
                  </div>
                  <p className="small text-muted">{t("description")}</p>
                  <div className="justify-content-center d-flex">
                    <button className=" agent-btn-responsive1 w-75 py-1 rounded-pill text-white">
                      {t("send1_to_client")}
                    </button>
                  </div>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <p className="py-1 my-4  fs-5 fw-semibold lh-1 text-teal">
        {t("potential_clients")}{" "}
      </p>
      <Accordion className="d-block p-0 d-md-none bg-light d-flex flex-column gap-3">
        {reportData.map((row, index) => (
          <Accordion.Item
            eventKey={index.toString()}
            key={row.id}
            className="border-2  border-top rounded-3 overflow-visible"
          >
            <Accordion.Header>
              <div className="d-flex justify-content-between w-100">
                <div className="d-flex gap-2">
                  <input
                    type="checkbox"
                    className="form-check-input border-2 border-black mx-1 "
                  />
                  <div className="ms-3">
                    <p className="fw-semibold lh-1 fs-6 mb-0">
                      {t("customer_name")}
                    </p>
                    <p className=" fw-normal fs-6 lh-1 my-1">
                      {t("client_property_type")}
                    </p>
                    <p className="fw-normal fs-15 lh-1 mb-0 text-decoration-underline">{row.phone}</p>
                  </div>
                </div>
                <div className="me-2 d-flex align-items-center justify-content-between">
                <IoIosArrowDown />
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
            {/* <div className="fs-12 fw-normal lh-1">{row.details.comments}</div> */}
            <Accordion.Body className="p-0">
            <div className="fs-12 fw-normal lh-1 my-1 px-3"><span>{row.details.comments}</span></div>
              {/* <div className="px-3 border-bottom">
                <div>
                  {row.details.features.map((feature, index) => {
                    return (
                      <>
                        <Button
                          key={index}
                          className="bg-success bg-opacity-10 fw-bold border-success rounded-pill  text-success"
                        >
                          {feature}
                        </Button>
                      </>
                    );
                  })}
                  <div>{row.details.comments}</div>
                </div>
              </div> */}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
};

export default Clientmatch_mobile;
