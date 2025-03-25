import React from 'react'
import { useTranslation } from 'react-i18next'
import CustomInput from '../../../Componant/Common/Input/Custominput';
import { Form, Row, Col, Button } from 'react-bootstrap';
const Ownerdetails = ({setActiveTab}) => {
    const { t } = useTranslation();
  return (
    <>
    <Form className="px-4">
        <h4 className="text-teal fs-5 fw-semibold lh-1 my-3 py-3 ">
          {t('pro_add_ower_details')}
        </h4>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Label className="fs-15 lh-1  fw-semibold">
              {t('pro_add_ower_name')}
            </Form.Label>
            <CustomInput
              className="w-100 h-auto rounded"
              type="text"
            />
          </Col>
          <Col md={4}>
            <Form.Label className="fs-15 lh-1  fw-semibold">
              {t('pro_add_ower_phone')}
            </Form.Label>
            <CustomInput
              className="w-100 h-auto rounded"
              type="text"
            />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={4}>
            <Form.Label className="fs-15 lh-1  fw-semibold">
              {t('pro_add_ower_email')}
            </Form.Label>
            <CustomInput
              className="w-100 h-auto rounded"
              type="text"
            />
          </Col>
        </Row>
      </Form>
      <div className="d-flex justify-content-center justify-content-md-between mt-4 pt-5 pb-3">
        <Button
          onClick={() => setActiveTab(2)}
          className="agent-btn-responsive2 responsive-btn d-none d-md-block rounded-pill shadow-lg"
        >
          {t('Pro_add_pev_btn')}
        </Button>

        <Button
          onClick={() => setActiveTab(4)}
          className="agent-btn-responsive1 responsive-btn  rounded-pill shadow-lg"
        >
          {t('pro_add_next_btn')}
        </Button>
      </div>
    </>
  )
}

export default Ownerdetails;
