import React from 'react'
import { useTranslation } from 'react-i18next'
import CustomInput from '../../../Componant/Common/Input/Custominput';
import { Form, Row, Col, Button } from 'react-bootstrap';
const Ownerdetails = ({setActiveTab}) => {
    const { t } = useTranslation();
  return (
    <>
    <Form className="px-4">
        <h4 className="text-2xl screen-1 font-semibold text-[#00A481] py-3 mt-3 mb-1 text-start">
          {t('pro_add_ower_details')}
        </h4>

        {/* First Row */}
        <Row className="mb-3">
          <Col md={4}>
            <Form.Label className="text-base font-semibold">
              {t('pro_add_ower_name')}
            </Form.Label>
            <CustomInput
              className="w-100 h-auto rounded"
              type="text"
            />
          </Col>
          <Col md={4}>
            <Form.Label className="text-base font-semibold">
              {t('pro_add_ower_phone')}
            </Form.Label>
            <CustomInput
              className="w-100 h-auto rounded"
              type="text"
            />
          </Col>
        </Row>

        {/* Second Row */}
        <Row className="mt-3">
          <Col md={4}>
            <Form.Label className="text-base font-semibold">
              {t('pro_add_ower_email')}
            </Form.Label>
            <CustomInput
              className="w-100 h-auto rounded"
              type="text"
            />
          </Col>
        </Row>
      </Form>
      <div className="d-flex justify-content-between mt-4 pt-5 pb-3">
        <Button
          onClick={() => setActiveTab(2)}
          className="px-5 py-2 rounded-pill shadow-lg"
          style={{
            backgroundColor: '#ffffff',
            color: '#00A481',
            border: '1px solid #00A481',
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#55CD85';
            e.target.style.color = '#ffffff';
            e.target.style.borderColor = '#55CD85';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#ffffff';
            e.target.style.color = '#00A481';
            e.target.style.borderColor = '#00A481';
          }}
        >
          {t('Pro_add_pev_btn')}
        </Button>

        <Button
          onClick={() => setActiveTab(4)}
          className="px-5 py-2 rounded-pill shadow-lg text-white"
          style={{
            backgroundColor: '#00A481',
            borderColor: '#00A481',
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#55CD85';
            e.target.style.borderColor = '#55CD85';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#00A481';
            e.target.style.borderColor = '#00A481';
          }}
        >
          {t('pro_add_next_btn')}
        </Button>
      </div>
    </>
  )
}

export default Ownerdetails;
