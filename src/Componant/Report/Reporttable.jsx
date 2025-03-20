import { useState } from 'react';
import { Table, Form, Accordion, Card, Button } from 'react-bootstrap';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const DataTable = () => {
  const [selectedRows, setSelectedRows] = useState({});
  const [expandedRows, setExpandedRows] = useState({});

  const data = [
    {
      id: 1,
      name: 'שירי נקבלי',
      type: 'מתעניין בשכירות',
      phone: '054-4692650',
      email: 'shirims@gmail.com',
      details: {
        type: 'דירה בבניין, דירת גן, פנטהאוז / גג',
        status: 'חדש, משופץ',
        rooms: '3,4,5',
        size: '100 - 300 מ"ר',
        floor: '4,5',
        price: '1000 - 3000 ₪',
        features: ['חניה', 'מחסן', 'מרחב', 'מעלית', 'מיזוג', 'מרפסת'],
        comments: 'מעוניין בדירה מרווחת בקומה שניה של וילה. כניסה פרטית נפרדת. מאוד מיוחדת יפה ושקטה עם נוף מקסים לגינה ירוקה. אוירה פסטורלית.'
      }
    },
    {
      id: 2,
      name: 'שירי נקבלי',
      type: 'מתעניין בשכירות',
      phone: '054-4692650',
      email: 'shirims@gmail.com',
      details: {
        type: 'דירה בבניין, דירת גן, פנטהאוז / גג',
        status: 'חדש, משופץ',
        rooms: '3,4,5',
        size: '100 - 300 מ"ר',
        floor: '4,5',
        price: '1000 - 3000 ₪',
        features: ['חניה', 'מחסן', 'מרחב', 'מעלית', 'מיזוג', 'מרפסת'],
        comments: 'מעוניין בדירה מרווחת בקומה שניה של וילה. כניסה פרטית נפרדת. מאוד מיוחדת יפה ושקטה עם נוף מקסים לגינה ירוקה. אוירה פסטורלית.'
      }
    }
  ];

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
      <Table responsive hover style={styles.customTable} className='border rounded-pill'>
        <thead>
          <tr className=''>
            <th></th>
            
            <th className='fw-semibold lh-1 fs-6'>שם הלקוח</th>
            <th className='fw-semibold lh-1 fs-6'>סוג לקוח</th>
            <th className='fw-semibold lh-1 fs-6'>טלפון</th>
            <th className='fw-semibold lh-1 fs-6'>דוא"ל</th>
            <th className='fw-semibold lh-1 fs-6'>אזור מבוקש</th>
            <th>
              <Form.Check type="checkbox" />
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
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
                              <strong>סוג הנכס:</strong> {row.details.type}
                            </div>
                            <div className='d-flex flex-column'>
                              <strong>מצב הנכס:</strong> {row.details.status}
                            </div>
                            <div className='d-flex flex-column'>
                              <strong>מספר חדרים:</strong> {row.details.rooms}
                            </div>
                            <div className='d-flex flex-column'>
                              <strong>גודל דירה:</strong> {row.details.size}
                            </div>
                            <div className='d-flex flex-column'>
                              <strong>קומה:</strong> {row.details.floor}
                            </div>
                            <div className='d-flex flex-column'>
                              <strong>מחיר:</strong> {row.details.price}
                            </div>
                          </div>
                          <div className='d-flex' >
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
                            <div style={styles.comments}>
                                {row.details.comments}
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
