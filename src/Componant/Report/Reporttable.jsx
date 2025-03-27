import { useEffect, useState } from 'react';
import { Table, Form, Accordion, Card, Button,} from 'react-bootstrap';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useTranslation } from "react-i18next"
import { useReportServices } from '../../Services/ReportServices';
const DataTable = () => {
  const [selectedRows, setSelectedRows] = useState({});
  const [expandedRows, setExpandedRows] = useState({});
  const { t } = useTranslation();
  const [reportData, setReportData] = useState([]);
  const { getReportServices } = useReportServices();
  
  useEffect( () => {
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
            <th></th>
            
            <th className='fw-semibold lh-1 fs-6'>{t("customer_name")} </th>
            <th className='fw-semibold lh-1 fs-6'>{t("customer_type")} </th>
            <th className='fw-semibold lh-1 fs-6'>{t("phone")}</th>
            <th className='fw-semibold lh-1 fs-6'>{t("client_email")}</th>
            <th className='fw-semibold lh-1 fs-6'> {t("client_property_type")}</th>
            <th>
              <Form.Check type="checkbox" />
            </th>
          </tr>
        </thead>
        <tbody>
          {reportData.map((row) => (
            <>
              <tr key={row.id}>
                <td>
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
                
                <td>{row.name}</td>
                <td>{row.type}</td>
                <td>{row.phone}</td>
                <td>{row.email}</td>
                <td>{row.details.type}</td>
                <td>
                  <Form.Check
                    type="checkbox"
                    checked={selectedRows[row.id] || false}
                    onChange={() => handleSelect(row.id)}
                  />
                </td>
              </tr>

              {expandedRows[row.id] && (
                <tr>
                  <td colSpan="7">
                    <Accordion defaultActiveKey="0">
                      <Card style={styles.accordionCard}>
                        <Card.Body>
                          <div style={styles.detailsContainer} className=' d-flex gap-5 justify-content-around'>
                            <div className='d-flex flex-column'>
                              <strong>{t("client_property_type")}:</strong> {row.details.type}
                            </div>
                            <div className='d-flex flex-column'>
                              <strong>{t("property_status")}:</strong> {row.details.status}
                            </div>
                            <div className='d-flex flex-column'>
                              <strong>{t("client_rooms")}:</strong> {row.details.rooms}
                            </div>
                            <div className='d-flex flex-column'>
                              <strong>{t("client_size")}:</strong> {row.details.size}
                            </div>
                            <div className='d-flex flex-column'>
                              <strong>{t("client_floor")}:</strong> {row.details.floor}
                            </div>
                            <div className='d-flex flex-column'>
                              <strong>{t("client_price")}:</strong> {row.details.price}
                            </div>
                          </div>
                          <div className='row' >
                            <div className=' col-6'>
                              <p className='mb-1'>{t("title_feature")}</p>
                              <div style={styles.featuresContainer}>
                                  {row.details.features.map((feature, index) => (
                                  <Button
                                      key={index}
                                      style={styles.featureButton}
                                      className='bg-success bg-opacity-10 fw-bold border-success text-success'
                                  >
                                      {feature}
                                  </Button>
                                  ))}
                              </div> 
                            </div>
                            <div className='col-6'>
                              <p className='mb-1'>{t("title_comments")}</p>
                            <div style={styles.comments}>
                                {row.details.comments}
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
  },
  comments: {
    fontSize: '14px',
    color: '#555',
    lineHeight: '1.5',
  },
};

export default DataTable;
