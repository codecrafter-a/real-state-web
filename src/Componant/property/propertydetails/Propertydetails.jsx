import React from 'react'
import { useTranslation } from 'react-i18next'
import { Form, Row, Col, Button } from 'react-bootstrap';
import CustomInput from '../../../Componant/Common/Input/Custominput';
import user_type_icon2 from '../../../assets/images/user_type_icon2.svg';
import user_type_icon1 from '../../../assets/images/user_type_icon1.svg';

const Propertydetails = ({setActiveTab}) => {
 const { t } = useTranslation();
    const service = [
        {list: t("pro_add_feture_1")},
        {list: t("pro_add_feture_2")},
        {list: t("pro_add_feture_3")},
        {list: t("pro_add_feture_4")},
        {list: t("pro_add_feture_5")},
        {list: t("pro_add_feture_6")},
        {list: t("pro_add_feture_7")},
        {list: t("pro_add_feture_8")},
        {list: t("pro_add_feture_9")},
        {list: t("pro_add_feture_10")}
    ]

  return (
    <div className="px-4">
    <Form>
      <h4 className="text-2xl screen-1 font-semibold text-[#00A481] py-3 mt-3 mb-1 text-start">
        {t('pro_tab_title')}
      </h4>

      {/* First Row */}
      <Row className="mb-3">
        <Col md={4}>
          <Form.Label className="text-base font-semibold">
            {t('pro_add_det_type')}
          </Form.Label>
          <CustomInput className="w-100 h-auto rounded" type="text" />
        </Col>
        <Col md={4}>
          <Form.Label className="text-base font-semibold">
            {t('pro_add_del_contidation')}
          </Form.Label>
          <CustomInput className="w-100 h-auto rounded" type="text" />
        </Col>
        <Col md={4}>
          <Form.Label className="text-base font-semibold">
            {t('pro_add_del_name')}
          </Form.Label>
          <CustomInput className="w-100 h-auto rounded" type="text" />
        </Col>
      </Row>

      {/* Second Row */}
      <Row>
        <Col md={4}>
          <Form.Label className="text-base font-semibold">
            {t('pro_add_del_floor')}
          </Form.Label>
          <CustomInput className="w-100 h-auto rounded" type="text" />
        </Col>
        <Col md={4}>
          <Form.Label className="text-base font-semibold">
            {t('pro_add_del_area')}
          </Form.Label>
          <CustomInput className="w-100 h-auto rounded" type="text" />
        </Col>
      </Row>
    </Form>

    {/* Checkboxes with Inputs */}
    <Row className="mt-4">
      <Col xs="auto" className="my-3">
        <div className="relative">
          <Form.Check
            type="checkbox"
            id="check1"
            className="d-none"
          />
          <Form.Label
            htmlFor="check1"
            className="d-flex flex-column align-items-center justify-content-center border border-solid border-[#D6D6D6] rounded-lg cursor-pointer"
            style={{
              width: '83px',
              height: '73px',
            }}
          >
            <span className="user_type_icon">
              <img src={user_type_icon1} alt="user icon" />
            </span>
            {t('pro_add_del_rent')}
          </Form.Label>
        </div>
        <div className="mt-3" style={{ maxWidth: 142 }}>
          <Form.Label className="text-sm mb-1 font-semibold">
            {t('pro_add_del_req_rent_price')}
          </Form.Label>
          <CustomInput type="text" className="w-100 h-auto rounded" />
        </div>
      </Col>

      <Col xs="auto" className="my-3">
        <div className="relative">
          <Form.Check
            type="checkbox"
            id="check2"
            className="d-none"
          />
          <Form.Label
            htmlFor="check2"
            className="d-flex flex-column align-items-center justify-content-center border border-solid border-[#D6D6D6] rounded-lg cursor-pointer"
            style={{
              width: '83px',
              height: '73px',
            }}
          >
            <span className="user_type_icon">
              <img src={user_type_icon2} alt="user icon" />
            </span>
            {t('pro_add_del_buy')}
          </Form.Label>
        </div>
        <div className="mt-3" style={{ maxWidth: 142 }}>
          <Form.Label className="text-sm mb-1 font-semibold">
            {t('pro_add_del_req_buy_price')}
          </Form.Label>
          <CustomInput type="text" className="w-100 h-auto rounded" />
        </div>
      </Col>
    </Row>

    {/* Service Selection */}
    <h4 className="text-base font-semibold text-[#00A481] py-3 mt-3 mb-1 text-start">
      {t('pro_add_del_select_add_future')}
    </h4>
    <ul className="list-unstyled">
      {service.map((item, index) => (
        <li
          key={index}
          className="rounded-2xl d-inline-block me-2 mb-2 bg-light"
        >
          <span className="font-normal py-1 px-2 d-block min-w-[92px] text-center text-base">
            {item.list}
          </span>
        </li>
      ))}
    </ul>

    <Form.Group className="mt-3">
      <Form.Label>{t('pro_add_desctiption')}</Form.Label>
      <Form.Control
        as="textarea"
        placeholder={t('pro_add_des_placeholder')}
        rows={3}
      />
    </Form.Group>


    <div className="d-flex justify-content-between mt-4 pt-5 pb-3">
      <Button
        onClick={() => setActiveTab(1)}
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
        onClick={() => setActiveTab(3)}
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
  </div>
  )
}

export default Propertydetails
