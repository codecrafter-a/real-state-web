import React, {useState, useEffect} from 'react'
import { useTranslation } from 'react-i18next';
import iconHome from '../../../assets/images/icon_home.svg';
import iconPaper from '../../../assets/images/icon_paper.svg';
import homeWork from '../../../assets/images/home_work.svg';
import icon5 from '../../../assets/images/icon_5.svg';
import attachMoney from '../../../assets/images/attach_money.svg';
import barChart from '../../../assets/images/bar_chart.svg';
import familyHome from '../../../assets/images/family_home.svg';
import book2 from '../../../assets/images/book_2.svg';
import menuIcon7 from '../../../assets/images/menu_icon7.svg';
import lock from '../../../assets/images/lock.svg';
import doorOpen from '../../../assets/images/door_open.svg';
import actionIcon1 from '../../../assets/images/action_icon1.svg';
import actionIcon2 from '../../../assets/images/action_icon2.svg';
import actionIcon3 from '../../../assets/images/action_icon3.svg';
import userIcon from '../../../assets/images/user_icon.svg';
import userkey from '../../../assets/images/user-key.png';
import usercontact from '../../../assets/images/user-contect.png';
import userhouse from '../../../assets/images/user-house.png';
import document from '../../../assets/images/menu_icon2.png';
import "../Sidebar/Sidebar.css";
import { Button, Card, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Sidebar = ({isToggle}) => {
  console.log(isToggle, "toggletoggle");

  
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();


  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth < 768);
    };
  
    handleResize(); 
    window.addEventListener('resize', handleResize);
  
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  console.log(isOpen, "isopenoeem");

  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated") === "true");
  useEffect(() => {
    const handleStorageChange = () => {
      const authToken = localStorage.getItem("authtoken");
      setIsAuthenticated(!!authToken);
      if (!authToken) {
        navigate(`/${i18n.language}/signin`);
      } 
    };
    handleStorageChange(); 
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [i18n.language, navigate]);


  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("authtoken");
    navigate(`/${i18n.language}/signin`);
  }



  return (
    <>
    <section className={`haeder_right_block w-344  mt-5 mt-md-0 ${!isToggle ? 'd-none d-md-block ' : ''}  ${isAuthenticated ? "active" : "disabled"}`}>
      <div className="haeder_right mCustomScrollbar">
          <ul className="hdr_right_menu">
            {[{ icon: iconHome, text: t("sitem1") , to: `/${i18n.language}/home`},
              { icon: iconPaper, text: t("sitem2"), to: `/${i18n.language}/agreements`},
              { icon: userIcon, text: t("sitem3") , to: `/${i18n.language}/customers`},
              { icon: homeWork, text: t("sitem4"), to: `/${i18n.language}/property`},
              { icon: icon5, text: t("sitem5") , to: `/${i18n.language}/agents`},
              { icon: attachMoney, text: t("sitem6"), to: `/${i18n.language}/invoices`},
              { icon: barChart, text: t("sitem7"), to: `/${i18n.language}/data`},
              { icon: familyHome, text: t("sitem8"), to: `/${i18n.language}/report`},
              { icon: book2, text: t("sitem9") },
              { icon: menuIcon7, text: t("sitem10"), to: `/${i18n.language}/setting`},
              { icon: lock, text: t("sitem11"), to: `/${i18n.language}/personal-area` },
              { icon: doorOpen, text: t("sitem12") }].map((item, index) => (
                <li key={index}>
                  {item.to ? (
                    <Link to={item.to}>
                      <span className="menu_icon">
                        <img src={item.icon} alt="icon" />
                      </span>
                      {item.text}
                    </Link>
                  ) : item.text === t("sitem12") ? ( 
                    <Link onClick={handleLogout}>
                      <span className="menu_icon">
                        <img src={item.icon} alt="icon" />
                      </span>
                      {item.text}
                    </Link>
                  ) : null}
                </li>
              ))}
              <li>
              {!isOpen ? (<>
                      <div className="cmn_actions">
                        <h4> {t("action")}</h4>
                        <ul className="cmn_actions_list d-none d-md-flex ">
                          {[{ icon: actionIcon1, text: t("action1") },
                            { icon: actionIcon2, text: t("action2") },
                            { icon: actionIcon3, text: t("action3") }].map((action, index) => (
                              <li key={index}>
                                <Link to={action.to}>
                                  <span className="action_icon">
                                    <img src={action.icon} alt="icon" />
                                  </span> 
                                  {action.text}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
               </>) : (<>
                  <div className='cmn_actions'>
                    <h4 className=' text-success fw-bold'>Actions</h4>
                    <ul className='cmn_actions_list d-block'>
                      <div className='d-flex align-items-center '>
                        <img src={userkey} alt="action icon "/>
                        <p className='fs-5 fw-normal px-2 pt-2 lh-1'>{t("action1")}</p>
                      </div>
                      <div className='d-flex align-items-center'>
                        <img src={userhouse} alt="action icon "/>
                        <p className='fs-5 fw-normal px-2 pt-3 lh-1'>{t("action2")}</p>
                      </div>
                      <div className='d-flex align-items-center'>
                        <img src={usercontact} alt="action icon "/>
                        <p className='fs-5 fw-normal px-2 pt-3 lh-1'>{t("action3")}</p>
                      </div>
                    </ul>
                    <div className="d-flex justify-content-center align-items-center my-3">
                      <Card className="custom-card text-center bg-success bg-opacity-10" >
                        <Card.Body>
                          <Card.Title className="custom-title">
                            רוצים לנהל הכל במקום אחד?
                          </Card.Title>
                          <Card.Text>
                            רוצים להוסיף עוד סוכנים? לשלוח מסמכים ושהכל יופיע לכם במקום אחד?
                          </Card.Text>
                          <Button className="hdr_btn py-2 px-5 border-0 me-0 rounded-pill">שדרגו את המנוי שלכם</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>  
                </>)}
              </li>
          </ul>
      </div>      
    </section>
    <div className='d-block d-md-none'>
      <Row className="d-flex justify-content-between px-4 text-center py-2 bg-light fixed-bottom">
        <Col xs={2} className="d-flex flex-column align-items-center">
          <img src={iconHome} alt="home icon" className="mb-1" />
          <div className="fs-6 fw-semibold">{t('mobile_home')}</div>
        </Col>
        <Col xs={2} className="d-flex flex-column align-items-center">
          <img src={userkey} alt="home icon" className="mb-1" />
          <div className="fs-6 fw-semibold">{t('mobile_interested')}</div>
        </Col>
        <Col xs={2} className="d-flex flex-column align-items-center">
          <img src={userhouse} alt="action icon" className="mb-1" />
          <div className="fs-6 fw-semibold">{t('mobile_owner')}</div>
        </Col>
        <Col xs={2} className="d-flex flex-column align-items-center">
          <img src={usercontact} alt="action icon" className="mb-1" />
          <div className="fs-6 fw-semibold">{t('mobile_collaboration')}</div>
        </Col>
        <Col xs={2} className="d-flex flex-column align-items-center">
          <img src={document} alt="action icon" className="mb-1" />
          <div className="fs-6 fw-semibold">{t('mobile_agreements')}</div>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default Sidebar;
