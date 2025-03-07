import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import bodyBg from "../../assets/images/body_bg.webp";
import left from "../../assets/images/left-1.png";
import boryGroupRight from "../../assets/images/bory_group_right.png";
import '../Home/Home.css';
import group from '../../assets/images/group-2.png';
import indication from '../../assets/images/Indication-Arrow.png';
import Datacard from '../../Componant/Homedatacard/Datacard/Datacard';
import Homechart from '../../Componant/Homedatacard/Homechart/Homechart';

const Home = () => {

    const dataList = [
        { amount: "₪10,000", text: "עמלות מעסקאות השכרה", icon: indication },
        { amount: "₪15,000", text: "עמלות מכירה", icon: indication },
        { amount: "₪20,000", text: "סכום כולל", icon: indication },
        { amount: "₪8,000", text: "דמי תיווך", icon: indication },
        { amount: "₪12,500", text: "הכנסות נוספות", icon: indication },
        { amount: "₪18,000", text: "סכום רווחי", icon: indication },
      ];


    

  return (
    <>
    
    <Container>
        <div className="position-absolute w-100 h-50 overflow-hidden top-0 start-0 z-0">
            <figure className="mb-0 h-100 w-100 position-relative">
                <img 
                src={bodyBg} 
                className="w-100 h-100 object-fit-cover position-absolute top-0 start-0" 
                alt="Background" 
                />
                <span className="position-absolute top-0 end-0">
                <img src={left} alt="Left BG Icon" className="img-fluid" />
                </span>
                <span className="position-absolute bottom-0 start-0 w-25  text-center">
                <img src={boryGroupRight} alt="Right BG Icon" className="img-fluid d-none d-sm-inline w-100" />
                </span>
            </figure>
        </div>
        <Row className='row d-flex w-100  position-relative bg-white shadow-lg rounded-3  scrollbar-content scrollbar-left flex-wrap px-md-5 px-2 z-3'>
            <Col className=' col-12 py-2'>
                <p className="py-1 my-4 text-center container-fluid screen-1 border-b-2">
                    עמוד הבית
                </p>
                <Col className=' col-12 col-md-12 my-2 d-flex px-md-3 align-items-center'>
                    <Col className='col-12 col-sm-12 col-md-6 me-2'>
                        <div className='  rounded-1 p-4 box1_color'>
                            <div className='pb-4'><p className=' screen-2  text-end'>מה תרצו לעשות?</p></div>
                            <div className='d-flex justify-content-end'>
                                <div className='d-flex justify-content-center '>
                                    <div className='px-2'>
                                        <button className='custom_btn px-4 w-100 d-flex h-auto justify-content-between shadow-lg align-items-center'>
                                            <span className="text-start pe-2">שת”פ בין <br />מתווכים</span>
                                            <div className='ps-2 justify-content-end'><img src={group} alt="group" className=''  /></div>
                                        </button>
                                    </div>
                                    <div className='px-2'>
                                        <button className='custom_btn px-4 w-100 d-flex h-auto justify-content-between shadow-lg align-items-center'>
                                            <span className="text-start pe-2">שת”פ בין <br />מתווכים</span>
                                            <div className='ps-2 justify-content-end'><img src={group} alt="group" className=''  /></div>
                                        </button>
                                    </div>
                                    <div className='px-2'>
                                        <button className='custom_btn px-4 w-100 d-flex h-auto justify-content-between shadow-lg align-items-center'>
                                            <span className="text-start pe-2">שת”פ בין <br />מתווכים</span>
                                            <div className='ps-2 justify-content-end'><img src={group} alt="group" className=''  /></div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>         
                    </Col>
                    <Col className='col-12 col-sm-12 col-md-6 ms-2'>
                    <div className=' rounded-1 p-4 box1_color'>
                            <div className='pb-4'><p className=' screen-2  text-end'>הפרטים שלי</p></div>
                            <div className="d-flex justify-content-end">
                                <div className=' d-flex justify-content-center'>
                                    <div className='px-2 bg-transparent'>
                                        <div className='px-4 w-100 h-auto shadow-lg text-end'>
                                            <span className=" screen-5">הסכמים שנשלחו החודש</span>
                                            <div className='screen-4'>10/50</div>
                                        </div>
                                    </div>
                                    <div className='px-2 bg-transparent'>
                                        <div className='px-4 w-100 h-auto shadow-lg text-end'>
                                            <span className=" screen-5">תאריך סיום</span>
                                            <div className='screen-4'>17.07.2023</div>
                                        </div>
                                    </div>
                                    <div className='px-2 bg-transparent'>
                                        <div className='px-4 w-100 h-auto shadow-lg text-end'>
                                            <span className="screen-5">סוג</span>
                                            <div className='screen-4'>STARTER</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </Col>
                </Col>
                <Col className='col-12 col-md-12 px-md-3 my-4 box1_color'>
                    <div className='d-flex justify-content-between py-3'>
                        <div><button className="mx-auto hr_btn ">לכל הנתונים</button></div>
                        <div><span className="text-start pe-2 screen-2 pt-1">נתונים</span></div>
                    </div>
                    <Row className="row py-3">
                        {dataList.map((item, index) => (
                        <Datacard key={index} amount={item.amount} text={item.text} icon={item.icon} />
                        ))}
                    </Row>
                    <Homechart />
                </Col>
                <Col className='col-12 col-md-12 my-2 d-flex px-md-3 align-items-center'>
                   <div>
                          
                   </div>
                </Col>
            </Col>  
        </Row>
    </Container>
     
    </>
  )
}

export default Home
