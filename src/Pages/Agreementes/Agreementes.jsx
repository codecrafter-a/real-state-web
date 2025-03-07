import React from 'react'
import bodyBg from "../../assets/images/body_bg.webp";
import boryGroupRight from "../../assets/images/bory_group_right.png";
import boryGroupLeft from "../../assets/images/bory_group_left.png";
import search from '../../assets/images/search.png'
import calender from '../../assets/images/calendar_month.png'
import deleteIcon from '../../assets/images/delete.svg';
import remove_icon from "../../assets/images/remove_icon.svg";

const Agreements = () => {
    return (
        <React.Fragment>
            <div className="position-absolute w-100 overflow-x-hidden top-0 z-0 ">
                <figure className="mb-0 top_bg_fig">
                    <img src={bodyBg} className="w-100" alt="Background" />
                    <span className="position-absolute top-0 end-0">
                        <img src={boryGroupLeft} alt="left bg icon" />
                    </span>
                </figure>
                {/* <div className="bgbelow_icons">
                    <img src={boryGroupRight} alt="right bg icon" />
                </div> */}
            </div>

            <div className='bg-white w-100 z-3 position-relative rounded-3 shadow-lg' style={{ top: "70px", left: "194px", borderRadius: "16px", padding: "8px 24px 24px 24px", gap: "8px", maxWidth: "1194px", minHeight: "578px" }}>
                <div>
                    <h1 class="fs-4 fw-semibold  py-3 mb-7 border-bottom text-center text-embed-500">
                        כל ההסכמים
                    </h1>
                </div>
                <div className='d-flex justify-end px-3 pt-2 px-md-4 border-bottom' style={{ gap: "30px" }}>
                    <div className='' style={{ color: "#00A481", borderBottom: "2px solid #00A6A4" }}>כל ההסכמים</div>
                    <div className='' style={{ color: "#848484" }}>הסכמים אחרונים</div>
                </div>
                <div className='w-full d-flex justify-end mt-4'>
                    <div className='position-relative d-flex justify-between'>
                        <span className='position-absolute mt-3 px-3 end-0'><img src={search} alt="" /></span>
                        <input type="text" className='' style={{ width: "726px", height: "44px", borderRadius: "5px", border: "1px solid #D6D6D6" }} />
                    </div>
                </div>

                <div class="row justify-center align-items-center mt-4">
                    <div class="col-auto mt-3">
                        <button class="btn btn-outline-success">הצגה</button>
                    </div>
                    <div class="col-auto d-flex align-items-center mt-3">
                        <label class="form-check-label me-2">הפקת חשבונית</label>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="invoiceToggle" />
                        </div>
                    </div>
                    <div class="col">
                        <label for="" style={{ fontWeight: 600 }}>סטטוס הסכם</label>
                        <select class="form-select">
                            <option selected>סטטוס הסכם</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                    </div>
                    <div className='col'>
                        <label for="" style={{ fontWeight: 600 }}>עד תאריך</label>
                        <div className='form-control d-flex'>
                            <input type="text" className='w-full mr-3 border-0' name="" id="" />
                            <span><img src={calender} alt="" /></span>
                        </div>
                    </div>
                    <div className='col' style={{ fontWeight: 600 }}>
                        <label for="">מתאריך</label>
                        <div className='form-control d-flex'>
                            <input type="text" className='w-full mr-3 border-0' name="" id="" />
                            <span><img src={calender} alt="" /></span>
                        </div>
                    </div>
                </div>
                <div className='d-flex mt-4 justify-end '>
                    <span className='bg-emerald-500 flex gap-2 p-2 rounded-xl' style={{backgroundColor:"#E9FAF4"}}>
                        <img src={remove_icon} alt="" />
                        <span>
                            הופק
                        </span>
                    </span>
                </div>

                


            </div>

        </React.Fragment>
    )
}

export default Agreements
