import React from 'react'
import house from '../../assets/images/property-house.png';
import { Card, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import DataTable from './Reporttable';



const Clientmatch = ({address}) => {
    const { t } = useTranslation();

  return (
    <div>
      <Card className=" mb-3 shadow-sm border my-2 rounded-4">
        <Row>
            <Col md={3}> 
              <div className="p-3">
                  <Card.Img
                    variant="top"
                    src={house}
                    alt="Property"
                    className="img-fluid border rounded-2 object-fit-cover"
                    style={{ height: "200px" }}
                  />
                </div>
            </Col>
            <Col md={7}>          
                <div className='row my-3'>
                  <div className="col-3">
                    <div className='px-2'>
                      <p className='lh-1 fs-17 fw-semibold mb-0'> {t('property_address')} </p>
                      <p className='lh-1 fs-15 fw-normal mb-0'>{t('property_type')}</p>
                      <p className='lh-1 fs-15 fw-normal mb-0'>{t('property_details')}</p>
                    </div>
                  </div>
                  <div className="col-9">
                    <div className='fw-normal lh-1 fs-12'>
                        <p>
                        {t('property_description')}
                          <span>{t('furniture_details')}</span>
                        </p>
                    </div>
                  </div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex gap-2'>
                        <div className=' border w-50 h-75 py-1 bg-secondary bg-opacity-10 rounded-pill px-3  text-center'><p style={{fontSize: '14px'}}>{t('garage1')}</p></div>
                        <div className=' border w-50 h-75 py-1 px-3 bg-secondary  bg-opacity-10 rounded-pill text-center'><p style={{fontSize: '14px'}}>{t('balcony1')}</p></div>
                        <div className=' border w-100 h-75 py-1 px-3 bg-secondary bg-opacity-10 rounded-pill text-center'><p style={{fontSize: '14px'}}>{t('secure_room1')}</p></div>
                    </div>
                    <h2 className=' fs-3'>{t('price2')}</h2>
                </div>
            </Col>
        </Row>
      </Card>
      <p className="py-1 my-4 text-center screen-1">{t('potential_clients')}</p>
      <div className='my-3'>
        <DataTable data={address.map((addr) => ({ area: addr }))}/>
      </div>
    </div>
  )
}

export default Clientmatch
