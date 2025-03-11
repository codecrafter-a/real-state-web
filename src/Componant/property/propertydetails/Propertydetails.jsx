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
    // <div className='px-9'>
    //     <form className=''>
    //         <h4 className='text-2xl font-semibold text-[#00A481] py-3 mt-3 mb-1 text-start'>{t("pro_tab_title")}</h4>
    //         <div className="grid grid-cols-6 gap-6 ">
    //             <div className="col-span-2">
    //                 <label className="text-base mb-1 font-semibold">{t("pro_add_det_type")}</label>
    //                 <CustomInput
    //                     className={" w-full h-auto "}
    //                     type={'text'}
    //                 />
    //             </div>
    //             <div className="col-span-2">
    //                 <label className="text-base mb-1 font-semibold">{t("pro_add_del_contidation")}  </label>
    //                 <CustomInput
    //                     className={" w-full h-auto "}
    //                     type={'text'}
    //                 />
    //             </div> 
    //             <div className="col-span-2">
    //                 <label className="text-base mb-1 font-semibold">{t("pro_add_del_name")}</label>
    //                 <CustomInput
    //                     className={" w-full h-auto "}
    //                     type={'text'}
    //                 />
    //             </div>
    //             <div className="col-span-2">
    //                 <label className="text-base mb-1 font-semibold">{t("pro_add_del_floor")} </label>
    //                 <CustomInput
    //                     className={" w-full h-auto "}
    //                     type={'text'}
    //                 />
    //             </div>
    //             <div className="col-span-2">
    //                 <label className="text-base mb-1 font-semibold">{t("pro_add_del_area")} </label>
    //                 <CustomInput
    //                     className={" w-full h-auto "}
    //                     type={'text'}
    //                 />
    //             </div>
    //         </div>
    //     </form>
    //     <div className="row form_group">
    //             <div className="col-auto my-3">
    //             <div className=" relative">
    //                 <input type="checkbox" className="btn-check" id="check1" />
    //                 <label htmlFor="check1" className='flex flex-col items-center justify-center border border-solid border-[#D6D6D6] rounded-lg cursor-pointer w-[83px] h-[73px]'>
    //                 <span className="user_type_icon">
    //                     <img src={user_type_icon1} alt="user icon"/>
    //                 </span>
    //                 {t("pro_add_del_rent")}
    //                 </label>
    //             </div>
    //             <div className="mt-3" style={{ maxWidth: 142 }}>
    //                 <label className="text-sm mb-1 font-semibold">{t("pro_add_del_req_rent_price")}</label>
    //                 <CustomInput 
    //                 type={'text'}
    //                 className={" w-full h-auto "}
    //                 />
    //             </div>
    //             </div>
    //             <div className="col-auto my-3">
    //             <div className="relative">
    //                 <input type="checkbox" className="btn-check border-[#00A481s]" id="check2" />
    //                 <label htmlFor="check2" className='flex flex-col items-center justify-center border border-solid border-[#D6D6D6] rounded-lg cursor-pointer w-[83px] h-[73px]'>
    //                 <span className="user_type_icon">
    //                     <img src={user_type_icon2} alt="user icon"/>
    //                 </span>
    //                 {t("pro_add_del_buy")}
    //                 </label>
    //             </div>
    //             <div className="mt-3" style={{ maxWidth: 142 }}>
    //                 <label className="text-sm mb-1 font-semibold">{t("pro_add_del_req_buy_price")}</label>
    //                 <CustomInput 
    //                 type={'text'}
    //                 className={" w-full h-auto "}
    //                 />
    //             </div>
    //             </div>
    //     </div>
    //     <h4 className='text-base font-semibold text-[#00A481] py-3 mt-3 mb-1 text-start'>{t("pro_add_del_select_add_future")}</h4>
    //     <ul>
    //         {service.map((item, index) => {
    //             return(<>
    //                 <li className='rounded-2xl inline-block ml-4 mb-5 bg-slate-200' key={index}><span className='font-normal  py-1    px-2 block min-w-[92px] text-center text-base'>{item.list}</span></li>
    //             </>)
    //             })}
    //     </ul>
    //     <div className="form_group">
    //             <label className="form-label">{t("pro_add_desctiption")}</label>
    //             <textarea
    //             className="form-control"
    //             placeholder={t("pro_add_des_placeholder")}
    //             defaultValue={""}
    //             />
    //     </div>
    //     <div className="flex justify-between text-end mt-4 pt-5 pb-3">
    //         <CustomButton children={t("Pro_add_pev_btn")}  className={"border-1 border-emerald-500 px-5 shadow-lg text-emerald-500 py-2 rounded-full hover:bg-[#55CD85] hover:border-[#55CD85] hover:text-white"} onClick={() => setActiveTab(1)}/>
    //         <CustomButton children={t("pro_add_next_btn")}  className={"border-1 border-emerald-500 px-5 bg-emerald-500 shadow-lg text-white py-2 rounded-full hover:bg-[#55CD85] hover:border-[#55CD85] hover:text-white"}  onClick={() => setActiveTab(3)} />
    //     </div>
    // </div>
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
          <CustomInput className="w-100 h-auto" type="text" />
        </Col>
        <Col md={4}>
          <Form.Label className="text-base font-semibold">
            {t('pro_add_del_contidation')}
          </Form.Label>
          <CustomInput className="w-100 h-auto" type="text" />
        </Col>
        <Col md={4}>
          <Form.Label className="text-base font-semibold">
            {t('pro_add_del_name')}
          </Form.Label>
          <CustomInput className="w-100 h-auto" type="text" />
        </Col>
      </Row>

      {/* Second Row */}
      <Row>
        <Col md={4}>
          <Form.Label className="text-base font-semibold">
            {t('pro_add_del_floor')}
          </Form.Label>
          <CustomInput className="w-100 h-auto" type="text" />
        </Col>
        <Col md={4}>
          <Form.Label className="text-base font-semibold">
            {t('pro_add_del_area')}
          </Form.Label>
          <CustomInput className="w-100 h-auto" type="text" />
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
          <CustomInput type="text" className="w-100 h-auto" />
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
          <CustomInput type="text" className="w-100 h-auto" />
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

    {/* Description */}
    <Form.Group className="mt-3">
      <Form.Label>{t('pro_add_desctiption')}</Form.Label>
      <Form.Control
        as="textarea"
        placeholder={t('pro_add_des_placeholder')}
        rows={3}
      />
    </Form.Group>

    {/* Button Group */}
    <div className="d-flex justify-content-between mt-4 pt-5 pb-3">
      {/* Previous Button */}
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

      {/* Next Button */}
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
