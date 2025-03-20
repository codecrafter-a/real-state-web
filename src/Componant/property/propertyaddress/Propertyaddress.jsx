import React from 'react'
import { useTranslation } from 'react-i18next'
import CustomInput from '../../../Componant/Common/Input/Custominput';
import { Row, Col, Form, Button } from 'react-bootstrap';

const Propertyaddress = ({setActiveTab}) => {
  const { t } = useTranslation();
  return (
    <>
      <Form className="px-4">
        <h4 className="screen-1 py-3 mt-3 mb-1">
          {t('pro_add_sub_title')}
        </h4>

        <Row className="form_group mb-3">
          <Col md={4}>
            <Form.Label className="text-base font-semibold">
              {t('pro_add_city')}
            </Form.Label>
            <CustomInput
              className="w-100 h-auto rounded"
              type="text"
            />
          </Col>
          <Col md={4}>
            <Form.Label className="text-base font-semibold">
              {t('pro_add_str')}
            </Form.Label>
            <CustomInput
              className="w-100 h-auto rounded"
              type="text"
            />
          </Col>
        </Row>
        <Row className="form_group mb-3">
          <Col md={4}>
            <Form.Label className="text-base font-semibold">
              {t('pro_add_building_number')}
            </Form.Label>
            <CustomInput
              className="w-100 h-auto rounded"
              type="text"
            />
          </Col>
          <Col md={4}>
            <Form.Label className="text-base font-semibold">
              {t('pro_add_apartment_number')}
            </Form.Label>
            <CustomInput
              className="w-100 h-auto rounded"
              type="text"
            />
          </Col>
        </Row>
        <div className="step_btn_group d-flex justify-content-end mt-4 pt-5 pb-3">
        <Button
          onClick={() => setActiveTab(2)}
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
      </Form>
    </>
  )
}

export default Propertyaddress
