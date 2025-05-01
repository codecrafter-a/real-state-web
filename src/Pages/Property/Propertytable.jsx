import React, {useState, useEffect} from "react";
import { useTranslation } from "react-i18next";
import table_arrrow from "../../assets/images/table_arrrow.svg";
import CustomButton from "../../Componant/Common/Button/Button";
import edit from "../../assets/images/edit.svg";
import deleteIcon from "../../assets/images/delete.svg";
import { usePropertyservices } from "../../Services/PropertyServices";
import Carousel from 'react-bootstrap/Carousel';
import { Image } from "react-bootstrap";
import  imagedoc  from '../../assets/images/image-progress.png';
const Propertytable = ({filter}) => {
  const { t } = useTranslation();

  const [selectAll, setSelectAll] = useState(false); 
  const [expandedRows, setExpandedRows] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]); 
  const { slides} = usePropertyservices();
 
  
    const toggleRow = (index) => {
      setExpandedRows((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    };

    const handleSelectAllChange = () => {
      const newSelectAll = !selectAll;
      setSelectAll(newSelectAll);
      if (newSelectAll) {
        setSelectedRows(filter.map((_, index) => index)); // Select all rows
      } else {
        setSelectedRows([]); // Deselect all rows
      }
    };
  
    const handleCheckboxChange = (index) => {
      setSelectedRows((prevSelectedRows) =>
        prevSelectedRows.includes(index)
          ? prevSelectedRows.filter((i) => i !== index) // Uncheck
          : [...prevSelectedRows, index] // Check
      );
    };
    useEffect(() => {
      if (selectedRows.length === filter.length && filter.length > 0) {
        setSelectAll(true);
      } else {
        setSelectAll(false);
      }
    }, [selectedRows, filter.length]);


  console.log("fillterss" , filter);
  

  return (
    <>
      <table className="table text-center d-none d-md-table">
        <thead>
          <tr>
            <th className="table-head">
              <div className="d-flex align-items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAllChange}
                  className="form-check-input"
                />
                <span>{t("pro_add_set1")} </span>
              </div>
            </th>
            <th className="table-head">{t("transition_type")}</th>
            <th className="table-head">{t("pro_type3")}</th>
            <th className="table-head">{t("property_status3")}</th>
            <th className="table-head">{t("area_sqm_label")}</th>
            <th className="table-head">{t("floor_label")}</th>
            <th className="table-head">{t("rooms_label")}</th>
            <th className="table-head">{t("price_label")}</th>
            <th className="table-head">{t("owner_label")}</th>
          </tr>
        </thead>
        <tbody className="border border-[#E6E6E6] rounded-3">
          {filter.map((client, index) => (
            <React.Fragment key={index}>
              <tr>
                <td className="px-4 py-3">
                  <div className="d-flex align-items-center gap-2">
                    <input
                      type="checkbox"
                       checked={selectedRows.includes(index)}
                      onChange={() => handleCheckboxChange(index)}
                      className="form-check-input "
                    />
                    {client.property_address}
                  </div>
                </td>
                <td className="px-4 py-3">{client.sale}</td>
                <td className="px-4 py-3">{client.property_type}</td>
                <td className="px-4 py-3">{client.renovation}</td>
                <td className="px-4 py-3">{client.area_sqm}</td>
                <td className="px-4 py-3">{client.floor}</td>
                <td className="px-4 py-3">{client.rooms}</td>
                <td className="px-4 py-3">{client.price}</td>
                <td className="px-4 py-3">{client.owner}</td>
                <td className="px-4 py-3">
                  <span className="badge bg-warning">{client.status}</span>
                </td>
                <td className="text-center px-4 py-3">
                  <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleRow(index);
                      }}
                      className="bg-transparent border-0"
                      >
                    <img
                      src={table_arrrow}
                      alt="toggle"
                      className={`transition-transform ${expandedRows.includes(index) ? "rotate-180" : "rotate-0"}`}
                      style={{ width: "1rem", height: "1rem", transition: "transform 0.3s" }}
                    />
                  </button>
                </td>
              </tr>
             
              {expandedRows.includes(index) && (
                <tr>
                  <td colSpan={11} className="px-4 py-2">
                    <div className="align-items-center d-flex justify-content-between gap-4 mt-3">
                      <div>
                        <h5 className="fs-15 lh-1 fw-semibold d-flex align-items-center">
                          {t("genral_prop")}
                        </h5>
                        <p className="text-wrap fw-normal  mb-0 text-start">
                          {t("4-room")} 
                        </p>
                        <p className="text-wrap fw-normal  mb-0 text-start"> 
                          {t("2-child")}
                        </p>
                      </div>
                      <div>
                        <h5 className="fs-15 lh-1 fw-semibold d-flex align-items-center">
                          {t("cust_additional_features")}
                        </h5>
                        <div className="d-flex flex-nowrap align-items-center gap-2 mt-2">
                          {t("cust_additional_features_value")
                            .split(",")
                            .map((feature, index) => (
                              <span key={index} className="custom-badge ">
                                {feature.trim()}
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>
                    <Carousel data-bs-theme="dark" interval={null}>
                      {slides.map((slide, idx) => (
                        <Carousel.Item key={idx} >
                          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', padding: '1rem' }}>
                            {slide.map((src, index) => (
                              <Image
                                key={index}
                                src={src}
                                className="img-fluid"
                                style={{ width: '210px', height: '119px', borderRadius: '8px' }}
                              />
                            ))}
                          </div>
                        </Carousel.Item>
                      ))}
                    </Carousel>
                    <div className="mt-3 d-flex justify-content-start align-item-center">
                      <div className="d-flex flex-column align-item-center">
                        <h5 className="fs-15 lh-1 fw-semibold mb-2 d-flex align-items-center">
                          {t("interested_clients")}
                        </h5>
                        <ul className="list-unstyled mb-0 text-start">
                          <li className="mb-1">
                            {t("client_3")}
                          </li>
                          <li>{t("client_4")}</li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center my-3">
                      <CustomButton
                        type="button"
                        className="fs-17 lh-1 fw-semibold  agent-btn-responsive2 w-20 py-2 mx-1 rounded-pill"
                        children={t("view_att")}
                      />
                      <div className="d-flex align-items-center">
                      <img src={imagedoc} alt="imagedoc" />
                        <img src={edit} alt={"editbtn"} className="px-1" />
                        <img
                          src={deleteIcon}
                          alt={"deletebtn"}
                          className="px-1"
                          style={{ cursor: "pointer" }}
                        />
                        
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Propertytable;
