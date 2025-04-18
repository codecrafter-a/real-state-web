import { useEffect, useState } from 'react';
import { Table, Form, Accordion, Card, Button, } from 'react-bootstrap';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useTranslation } from "react-i18next"
import { useReportServices } from '../../Services/ReportServices';
const DataTable = () => {
  const [selectedRows, setSelectedRows] = useState({});
  const [expandedRows, setExpandedRows] = useState({});
  const { t } = useTranslation();
  const [reportData, setReportData] = useState([]);
  const { getReportServices } = useReportServices();
  
  useEffect(() => {
    const data = getReportServices();
    setReportData(data);
  }, []);

  const handleSelect = (id) => {
    setSelectedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleExpand = (id) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div style={styles.tableContainer}>
      <Table responsive hover style={styles.customTable} className='border  rounded-pill'>
        <thead>
          <tr className=''>
            <th>
              <Form.Check type="checkbox" />
            </th>
            <th className='fw-semibold fs-6'>{t("customer_name")} </th>
            <th className='fw-semibold fs-6'>{t("customer_type")} </th>
            <th className='fw-semibold fs-6'>{t("phone")}</th>
            <th className='fw-semibold fs-6'>{t("client_email")}</th>
            <th className='fw-semibold fs-6'> {t("desired_area")}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((row) => (
            <>
              <tr key={row.id} >
                <td style={{ paddingTop: "25px", paddingBottom: "25px" }}>
                  <Form.Check
                    type="checkbox"
                    checked={selectedRows[row.id] || false}
                    onChange={() => handleSelect(row.id)}
                  />
                </td>

                <td className='fs-17 fw-normal lh-1' style={{ paddingTop: "25px", paddingBottom: "25px" }}>{row.name}</td>
                <td className='fs-17 fw-normal lh-1' style={{ paddingTop: "25px", paddingBottom: "25px" }}>{row.type}</td>
                <td className='fs-17 fw-normal lh-1' style={{ paddingTop: "25px", paddingBottom: "25px" }}>{row.phone}</td>
                <td className='fs-17 fw-normal lh-1' style={{ paddingTop: "25px", paddingBottom: "25px" }}>{row.email}</td>
                <td className='fs-17 fw-normal lh-1' style={{ paddingTop: "25px", paddingBottom: "25px" }}>{row.details.type}</td>
                <td className='fs-17 fw-normal lh-1' style={{ paddingTop: "25px", paddingBottom: "25px" }}>
                  {expandedRows[row.id] ? (
                    <FaChevronUp
                      style={{ ...styles.dropdownIcon, color: '#00A6A4' }}
                      onClick={() => handleExpand(row.id)}
                    />
                  ) : (
                    <FaChevronDown
                      style={{ ...styles.dropdownIcon, color: '#00A6A4' }}
                      onClick={() => handleExpand(row.id)}
                    />
                  )}
                </td>
              </tr>

              {expandedRows[row.id] && (
                <tr>
                  <td colSpan="7">
                    <Accordion defaultActiveKey="0">
                      <Card style={styles.accordionCard}>
                        <Card.Body>
                          <div style={styles.detailsContainer} className=' d-flex gap-5 justify-content-between'>
                            <div className='d-flex flex-column'>
                              <span className='text-[#686868]'>{t("client_property_type")}:</span> {row.details.type}
                            </div>
                            <div className='d-flex flex-column'>
                              <span className='text-[#686868]'>{t("property_status")}:</span> {row.details.status}
                            </div>
                            <div className='d-flex flex-column'>
                              <span className='text-[#686868]'>{t("client_rooms")}:</span> {row.details.rooms}
                            </div>
                            <div className='d-flex flex-column'>
                              <span className='text-[#686868]'>{t("client_size")}:</span> {row.details.size}
                            </div>
                            <div className='d-flex flex-column'>
                              <span className='text-[#686868]'>{t("client_floor")}:</span> {row.details.floor}
                            </div>
                            <div className='d-flex flex-column'>
                              <span className='text-[#686868]'>{t("client_price")}:</span> {row.details.price}
                            </div>
                          </div>
                          <div className='row' >
                            <div className='col-6'>
                              <p className='mb-1'>{t("title_comments")}</p>
                              <div style={styles.comments}>
                                {row.details.comments}
                              </div>
                            </div>
                            <div className=' col-6'>
                              <p className='mb-1'>{t("title_feature")}</p>
                              <div style={styles.featuresContainer}>
                                {row.details.features.map((feature, index) => (
                                  <Button
                                    key={index}
                                    style={styles.featureButton}
                                    className='bg-success bg-opacity-10 fw-bold border-success'
                                  >
                                    {feature}
                                  </Button>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Accordion>
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </Table>

    </div>
  );
};

const styles = {
  tableContainer: {
    padding: '20px',
  },
  customTable: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  dropdownIcon: {
    cursor: 'pointer',
    fontSize: '16px',
  },
  accordionCard: {
    border: 'none',
    boxShadow: 'none',
  },
  detailsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    marginBottom: '12px',
  },
  featuresContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '12px',
  },
  featureButton: {
    fontSize: '14px',
    padding: '4px 12px',
    borderRadius: '20px',
    color: "#00A481",
    fontWeight: "400"
  },
  comments: {
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.5',
  },
};

export default DataTable;
