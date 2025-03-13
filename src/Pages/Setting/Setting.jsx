import React, {useState} from 'react'
import { Col, Row, Modal} from 'react-bootstrap';
import "../Setting/setting.css";
import Toggle from '../../Componant/Common/Toggle/Toggle';
import Card from 'react-bootstrap/Card';
import sms from '../../assets/images/sms.svg';
import email from '../../assets/images/email.svg';
import { Link } from 'react-router-dom';
import whatsapp from '../../assets/images/wa, whatsapp, message, communication, chat.svg';
import { useTranslation } from 'react-i18next';
import Next from "../../assets/images/Next.jpg";



const Setting = () => {
  const { t } = useTranslation();
  const [isView, setIsView] = useState(false);
  return (
    <Col>
        <h3 className="py-1 my-4 text-center screen-1 border-bottom">{t('settings')} </h3> 
        <div className='custom-scrollbar overflow-y-auto overflow-x-hidden px-3'  style={{ maxHeight: "594px" }}>
          <Row>
            <div>
              <p className='fw-normal fs-17 lh-1'>{t('subscriptionSettings')}</p>
              <div className='py-5'>
                <h4 className='text-teal fs-5 fw-sibold lh-1'> {t('showCommissionAmounts')}</h4>
                <div className='d-flex '>
                  <Toggle defaultChecked type={"checkbox"} id="toggleImages"/>
                  <label className="fs-5 fw-normal lh-1" htmlFor="">
                    {t('showCommissionAmounts')}                  
                  </label>
                </div>
              </div>
              <div>
                <p className=' fw-normal lh-1 fs-17'>{t('notificationsSettings')}</p>
                <span className='fw-bold lh-1 fs-17'>{t('selectChannels')}</span>
                <div className='d-flex py-4'>
                  <Card className='border-custom-gray' style={{width: "94px"}}>
                    <Card.Body>
                      <Card.Text className='d-flex flex-column align-items-center'>
                        <img src={email} alt='sms' className=' w-full h-auto' />
                        <p className='fw-semibold fs-17 text-teal m-0'>{t('email')}</p>  
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card className='border-custom-gray mx-4' style={{width: "94px"}}>
                    <Card.Body>
                      <Card.Text className='d-flex flex-column align-items-center'>
                        <img src={whatsapp} alt='sms' className=' w-full h-auto' />
                        <p className='fw-semibold fs-17 text-teal m-0'>{t('whatsapp')}</p>  
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card className='border-custom-gray' style={{width: "94px"}}>
                    <Card.Body>
                      <Card.Text className='d-flex flex-column align-items-center'>
                        <img src={sms} alt='sms' className=' w-full h-auto' />
                        <p className='fw-semibold fs-17 text-teal m-0'>SMS</p>  
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <Col  xs={12} sm={12} md={6}>
              <div >
                <h4 className='text-teal fs-5 pb-2 fw-sibold lh-1'>{t('report')}</h4>
                <div className='d-flex py-2'>
                  <Toggle defaultChecked type={"checkbox"}  id="toggleImages"/>
                  <label className="fs-5 fw-normal lh-1" htmlFor="">
                  {t('receivePerformanceReports')} 
                  </label>
                </div>
                <Link to="#" className="fw-semibold fs-12 lh-1 text-primary"> {t('changeReportsSettings')} </Link>
              </div>
              <div className='py-5'>
                <h4 className='text-teal fs-5 pb-2 fw-sibold lh-1'> {t('automaticPushNotifications')}</h4>
                <div className='d-flex py-2'>
                  <Toggle defaultChecked type={"checkbox"}  id="toggleImages"/>
                  <label className="fs-5 fw-normal lh-1" htmlFor="">
                  {t('notifyOnPropertyMatch')}
                  </label>
                </div>
                <div className='d-flex py-2'>
                  <Toggle defaultChecked type={"checkbox"}  id="toggleImages"/>
                  <label className="fs-5 fw-normal lh-1" htmlFor="">
                      {t('sendMessage', { 
                        spanText: <span className='fw-semibold'>{t('toClientsWhoShowedInterest')}</span> 
                      })}                  
                  </label>
                </div>
                <div className='d-flex py-2'>
                  <Toggle defaultChecked type={"checkbox"}  id="toggleImages"/>
                  <label className="fs-5 fw-normal lh-1" htmlFor="">
                    <span className='fw-semibold'>{t('toAllClientsFoundSuitable')}</span>
                    {t('sendMessageTags')}
                  </label>
                </div>
                <Link to="#" className="fw-semibold fs-12 lh-1 text-primary"> {t('changePushNotificationSettings')} </Link>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6}>
              <h4 className='text-teal fs-5 fw-sibold lh-1 pb-2'>{t('reminders')}</h4>
              <div className='py-1'>
                <p className='fs-6 fw-semibold lh-1'>{t('receiveReminderWhen')}</p>
                <div className='d-flex py-2'>
                  <Toggle defaultChecked type={"checkbox"} id="toggleImages"/>
                  <label className="fs-5 fw-normal lh-1" htmlFor="">
                    {t('exclusivePropertyExpiry')}
                  </label>
                </div>
                <div className="d-flex">
                  <div className=' d-flex align-items-center me-2'>
                    <Toggle defaultChecked type='radio' name="optionGroup" id="toggleImages"/>
                    <label className="fs-5 fw-normal lh-1" htmlFor="">
                    {t('onceAMonth')}
                    </label>
                  </div>
                  <div className=' d-flex align-items-center mx-2'>
                    <Toggle defaultChecked type='radio' name="optionGroup" id="toggleImages"/>
                    <label className="fs-5 fw-normal lh-1" htmlFor="">
                    {t('onceEveryTwoWeeks')}                    
                    </label>
                  </div>
                </div>
              </div>
              <div className='py-3'>
                <div className='d-flex py-2'>
                  <Toggle defaultChecked type={"checkbox"} id="toggleImages"/>
                  <label className="fs-5 fw-normal lh-1" htmlFor="">
                  {t('interestedClientsNoAgreement')}                  
                  </label>
                </div>
                <div className="d-flex pb-4">
                  <div className=' d-flex align-items-center me-2'>
                      <Toggle defaultChecked type='radio' name="optionGroup" id="toggleImages"/>
                      <label className="fs-5 fw-normal lh-1" htmlFor="">
                      {t('onceAMonth')}                      
                      </label>
                  </div>
                  <div className=' d-flex align-items-center mx-2'>
                      <Toggle defaultChecked type='radio' name="optionGroup" id="toggleImages"/>
                      <label className="fs-5 fw-normal lh-1" htmlFor="">
                      {t('onceEveryTwoWeeks')}                      
                      </label>
                  </div>
                </div>
                <Link to="#" className="fw-semibold fs-12 lh-1 text-primary" onClick={() => setIsView(true)}>
                  {t('changeReminderSettings')}                
                </Link>
              </div>
              <Modal show={isView} onHide={() => { setIsView(false) }}  centered className="custom-modal custom-shadow">
                <Modal.Header closeButton className=" border-0">
                  <img src={Next} alt="next btn" className=" w-full h-auto " />
                </Modal.Header>
                <Modal.Body className="p-4">
                  <div className="text-center">
                    <h4 className="fs-5 lh-1 fw-semibold py-2">אתם עומדים לשנות את אופן קבלת התזכורת</h4>
                    <p className="fs-4 lh-1 fw-normal">איך תרצו לקבל תזכורות מאיתנו?</p>
                  </div>
                  <div className='px-3'>
                    <div className="bg-success bg-opacity-10 ">
                      <div className='d-flex justify-content-between p-3'>
                        <div className=" d-flex align-items-center">
                          <img src={sms} alt="whatsapp" />
                          <span className="ps-2 text-start fs-5">ב-SMS</span>
                        </div>
                        <input className="form-check-input border border-black bg-white" type="checkbox" />
                      </div>
                    </div>
                    <div className="bg-success bg-opacity-10 my-3">
                      <div className='d-flex justify-content-between p-3'>
                        <div className=" d-flex align-items-center">
                          <img src={email} alt="whatsapp" />
                          <span className="ps-2 text-start fs-5">בדוא”ל</span>
                        </div>
                        <input className="form-check-input border border-black bg-white" type="checkbox" />
                      </div>
                    </div>
                    <div className="bg-success bg-opacity-10 mb-3">
                      <div className='d-flex justify-content-between p-3'>
                        <div className=" d-flex align-items-center">
                          <img src={whatsapp} alt="whatsapp" />
                          <span className="ps-2 text-start fs-5">ב- WhatsApp</span>
                        </div>
                        <input className="form-check-input border border-black bg-white" type="checkbox" />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <button className="agent-button1 mx-auto rounded-pill px-3 py-2 fw-bold shadow-sm text-white" onClick={() => setIsView(true)} >
                       עדכון  
                    </button>
                  </div>
                </Modal.Body>
              </Modal>
            </Col>
          </Row>
        </div>
    </Col>
  )
};
export default Setting;
