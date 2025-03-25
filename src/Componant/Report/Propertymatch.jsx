import React from 'react'
import { Card, Row, Col, Badge, Button } from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import house from '../../assets/images/property-house.png';
const Propertymatch = ({types}) => {
  const { t } = useTranslation();
  
  return (
    <div>
      <Card className="p-3 shadow-sm border rounded my-3">
        <Row className="align-items-center">
          <Col xs="auto" className="pe-0">
            <AiOutlineClose 
              size={20} 
              className="text-dark cursor-pointer" 
              onClick={() => alert('Close clicked')} 
            />
          </Col>
          <Col>
            <div className="text-end">
              <strong className="d-block mb-1">{t('client_name')} </strong>
              <span className="text-muted">
              {t('email_phone')}
              </span>
            </div>
          </Col>
        </Row>
      </Card>
      <p className="py-1 my-4 text-center screen-1"> {t('potential_properties')}</p>
      <Row>
        {types && types?.map((type, index) => (
            <Col key={index} className="col-12 col-md-6 col-lg-4">
              <Card className="shadow-sm rounded border overflow-hidden my-3">
                <Card.Img
                  variant="top"
                  src={house}
                  alt="Property"
                  className="img-fluid rounded-1 p-2"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-1 fw-bold text-success">{t('address')}</h5>
                    <h5 className="fw-bold">{t('price1')}</h5>
                  </div>

                  <p className="text-muted mb-1">{type}</p>
                  <p className="text-muted small mb-2">{t('rooms')} </p>

                  <div className="mb-2">
                    <Badge bg="light" text="dark" className="me-2">{t('garage')}</Badge>
                    <Badge bg="light" text="dark" className="me-2">{t('balcony')}</Badge>
                    <Badge bg="light" text="dark">{t('secure_room')}</Badge>
                  </div>

                  <p className="small text-muted">
                  {t('description')}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
       </Row>
      <div className='justify-content-center d-flex'>
            <Button 
            className="btn-success rounded-pill px-4 py-2 my-2  fw-bold shadow-sm"
            style={{
                backgroundColor: '#00BFA5', 
                borderColor: '#00BFA5',
                fontSize: '18px',
                color: '#FFFFFF' 
            }}
            >
                  {t('send1_to_client')}
            </Button>
      </div>
    </div>
  )
}

export default Propertymatch
