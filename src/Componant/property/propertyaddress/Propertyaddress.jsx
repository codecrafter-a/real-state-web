import React from 'react'
import { useTranslation } from 'react-i18next'
import CustomInput from '../../../Componant/Common/Input/Custominput';
import { Row, Col, Form, Button } from 'react-bootstrap';

const Propertyaddress = ({setActiveTab}) => {
  const { t } = useTranslation();
  return (
    <>
      <Form className="px-4">
        <h6 className="text-teal fs-5 fw-semibold lh-1 my-3 py-3 ">
          {t('pro_add_sub_title')}
        </h6>

        <Row className="form_group mb-3">
          <Col md={4}>
            <Form.Label className="fs-15 lh-1  fw-semibold" >
              {t('pro_add_city')}
            </Form.Label>
            <CustomInput
              className="w-100 h-auto rounded"
              type="text"
            />
          </Col>
          <Col md={4}>
            <Form.Label className="fs-15 lh-1  fw-semibold">
              {t('pro_add_str')}
            </Form.Label>
            <CustomInput
              className="w-100 h-auto rounded"
              type="text"
            />
          </Col>
        </Row>
        <Row className="form_group mb-3">
          <Col xs={6} md={4}>
            <Form.Label className="fs-15 lh-1  fw-semibold">
              {t('pro_add_building_number')}
            </Form.Label>
            <CustomInput
              className="w-100 h-auto rounded"
              type="text"
            />
          </Col>
          <Col xs={6} md={4}>
            <Form.Label className="fs-15 lh-1  fw-semibold">
              {t('pro_add_apartment_number')}
            </Form.Label>
            <CustomInput
              className="w-100 h-auto rounded"
              type="text"
            />
          </Col>
        </Row>
        <div className="d-flex  justify-content-center  justify-content-md-end w-100 my-4">
          <Button
            onClick={() => setActiveTab(2)}
            className="agent-btn-responsive1 responsive-btn rounded-pill shadow-lg "
          >
            {t('pro_add_next_btn')}
          </Button>
        </div>
      </Form>
    </>
  )
}

export default Propertyaddress
