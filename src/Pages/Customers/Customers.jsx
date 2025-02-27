import React from 'react'
import body_bg from '../../assets/images/body_bg.webp';
import bory_group_right from '../../assets/images/bory_group_right.png';
import bory_group_left from '../../assets/images/bory_group_right.png';
import add_reaction from '../../assets/images/add_reaction.svg';
import search from '../../assets/images/search.svg';
import search_icon2 from '../../assets/images/search_icon2.svg';
import remove_icon from '../../assets/images/remove_icon.svg';
import action_icon1 from '../../assets/images/action_icon1.svg';
import action_icon2 from '../../assets/images/action_icon2.svg';
import check_tick from '../../assets/images/check_tick.svg';
import table_arrrow from '../../assets/images/table_arrrow.svg';
import edit from '../../assets/images/edit.svg';
import deleteIcon  from '../../assets/images/delete.svg';





const Customer = () => {
  return (
<main className="main_content">
  <div className="top_bg_image">
    <figure className="mb-0 top_bg_fig">
      <img src={body_bg} width="100%" alt="Background" />
      <span className="bgupper_icons">
        <img src={bory_group_left} alt="Left Icon" />
      </span>
    </figure>
    <div className="bgbelow_icons">
      <img src={bory_group_right} alt="Right Icon" />
    </div>
  </div>
  <div className="main_wrapper">
    <div className="main_wrap_hdr">
      <h1 className="text-2xl font-semibold border-b border-gray-300 py-4 mb-7 text-[#00A481] text-center">כל הלקוחות</h1>
    </div>
    <div className="main_wrap_body p-0">
      <form className="form_custom">
        <div className="internal_scroll mCustomScrollbar">
          <div className="form_group mb-2 mb-xl-0 text-end">
            <button type="button" className="border-[1px] text-xl shadow-lg border-emerald-500 rounded-3xl text-emerald-500 py-2 hover:bg-[#55CD85] hover:text-white min-w-44 px-4" >
                <div className='flex items-center justify-center'><img className="me-1" src={add_reaction} alt="Add Client" />הוספת לקוח </div>
            </button>
          </div>
          <div className="mb-6 relative w-[66%]">
            <div className="input-group input_grp_cus">
              <input type="text" className="form-control" placeholder="חפשו לקוח לפי שם / טלפון /מייל " />
              <button className="btn" type="button">
                <img src={search} alt="Search" />
              </button>
            </div>
          </div>
          <div className="row form_group row_customers">
            <div className="col">
              <label className="form-label">לקוח מתעניין ב../ סוג לקוח</label>
              <select className="form-select">
                <option />
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
            <div className="col">
              <label className="form-label">איזור מגורים מבוקש</label>
              <div className="input-group input_grp_cus">
                <input type="text" className="form-control" placeholder="התחילו להקליד" />
                <button className="btn" type="button">
                  <img src={search} alt="Search" />
                </button>   
              </div>
            </div>
            <div className="col">
              <label className="form-label">סוג הנכס</label>
              <select className="form-select">
                <option />
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
            <div className="col">
              <label className="form-label">מצב הנכס</label>
              <select className="form-select">
                <option />
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
            <div className="col-auto">
              <label className="form-label d-block">&nbsp;</label>
              <button type="button" className="btn_cmn btn_cmn_40">חיפוש</button>
            </div>
          </div>
          <div className="form_group group_ad_search">
            <div className="adv_search_row">
              <div className="flex">
                {/* <button
                  type="button"
                  className="border-[1px] shadow-lg border-emerald-500 rounded-3xl py-2 hover:bg-[#55CD85] hover:text-white min-w-44 px-4"
                  data-bs-toggle="modal"
                  data-bs-target="#more_swallows"
                >
                  <img src={search_icon2} alt="Advanced Search" className='p-1' />
                  <p>חיפוש מתקדם  </p>
                </button> */}
                <div className="form_group flex mb-6  text-end">
                    <button type="button" className="border-[1px] shadow-lg text-lg border-emerald-500 rounded-3xl text-emerald-500 py-1  hover:bg-[#55CD85] hover:text-white min-w-44 px-4" >
                      <div className='flex items-center justify-center'><img className="me-1" src={search_icon2} alt="Add Client" />חיפוש מתקדם</div>
                    </button>
                
                <ul className=" w-full flex text-center items-center">
                  <li className='mx-2 bg-emerald-500 bg-opacity-10 bordre-[1px] rounded-pill flex px-4 py-1'>מתעניין בשכירות <span className="my-2 px-2 "><img src={remove_icon} alt="Remove" /></span></li>
                  <li className=' mx-2 bg-emerald-500 bg-opacity-10 bordre-[1px] rounded-pill flex px-4 py-1'>חיפה <span className="my-2 px-2 "><img src={remove_icon} alt="Remove" /></span></li>
                  <li className='mx-2 bg-emerald-500 bg-opacity-10 bordre-[1px] rounded-pill flex px-4 py-1'>נשר <span className="my-2 px-2 "><img src={remove_icon} alt="Remove" /></span></li>
                  <li className='mx-2 bg-emerald-500 bg-opacity-10 bordre-[1px] rounded-pill flex px-4 py-1'>קריות <span className="my-2 px-2"><img src={remove_icon} alt="Remove" /></span></li>
                </ul>
              </div>
              </div>
              <div className=" flex justify-end gap-2">
                <button type="button" className="border-[1px] shadow-lg text-lg border-emerald-500 rounded-3xl text-emerald-500 py-1  hover:bg-[#55CD85] hover:text-white min-w-28 px-4">מחיקה</button>
                <button type="button" className="border-[1px] shadow-lg text-lg border-emerald-500 rounded-3xl text-white py-1 bg-emerald-500  hover:bg-[#55CD85] hover:text-white min-w-28 px-4 flex items-center justify-center gap-2">
                  <img className="me-1" src={action_icon1} alt="Sign Client" />
                  החתמת מתעניין
                </button>
                <button type="button" className="border-[1px] shadow-lg text-lg border-emerald-500 rounded-3xl text-white py-1 bg-emerald-500  hover:bg-[#55CD85] hover:text-white min-w-28 px-4 flex items-center justify-center gap-2">
                  <img className="me-1" src={action_icon2} alt="Sign Owner" />
                  החתמת בעל נכס
                </button>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-border">
              <thead>
                <tr>
                  <th width="14%">
                    <div className="table_check">
                      <div className="t_checkbox t_check_all">
                        <input type="checkbox" />
                        <span><img src={check_tick} alt="Check All" /></span>
                      </div>
                      שם העמודה
                    </div>
                  </th>
                  <th width="16%">סוג לקוח</th>
                  <th width="16%">טלפון</th>
                  <th width="16%">דוא”ל</th>
                  <th width="16%">איזור מבוקש</th>
                  <th width="16%">סטטוס מסמך אחרון</th>
                  <th width="4%">&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td width="16%">
                    <div className="table_check">
                      <div className="t_checkbox">
                        <input type="checkbox" />
                        <span><img src={check_tick} alt="Check" /></span>
                      </div>
                      שירי נקבלי
                    </div>
                  </td>
                  <td width="16%">מתעניין בשכירות</td>
                  <td width="16%">054-4692650</td>
                  <td width="16%">shirims@gmail.com</td>
                  <td width="16%">חיפה, קריות, נשר</td>
                  <td width="16%">
                    <div className="doc_status">
                      <a className="status_btn btn_info" href="/">חדש</a>
                    </div>
                  </td>
                  <td width="4%">
                    <div className="tr_toggle_btn">
                      <img src={table_arrrow} alt="Toggle" />
                    </div>
                  </td>
                </tr>
                <tr className="toggle_row">
                  <td colSpan={7}>
                    <table className="table table_inr" width="100%">
                      <tbody>
                        <tr>
                          <td width="16%">
                            <label>סוג הנכס:</label>
                            <p>דירה בבניין, דירת גן, פנטאוז / גג</p>
                          </td>
                          <td width="16%">
                            <label>מצב הנכס</label>
                            <p>חדש, משופץ</p>
                          </td>
                          <td width="16%">
                            <label>מספר חדרים</label>
                            <p>3,4,5</p>
                          </td>
                          <td width="16%">
                            <label>גודל דירה</label>
                            <p>100 - 300 מ”ר</p>
                          </td>
                          <td width="16%">
                            <label>קומה</label>
                            <p>4,5</p>
                          </td>
                          <td colSpan={2} width="20%">
                            <label>מחיר</label>
                            <p>1000 - 3000 ₪</p>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={3} width="40%">
                            <label>הערות נוספות</label>
                            <p>מעוניין בדירה מרווחת בקומה שניה של וילה, כניסה פרטית נפרדת. מאד מיוחדת יפה ושקטה עם נוף מקסים לגינה ירוקה. אוירה פסטוראלית.</p>
                          </td>
                          <td colSpan={4} width="60%">
                            <label>מאפיינים נוספים</label>
                            <ul className="add_feature_tag">
                              <li><span>חניה</span></li>
                              <li><span>מרוהט</span></li>
                              <li><span>מעלית</span></li>
                              <li><span>מזגן</span></li>
                              <li><span>מרפסת</span></li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={7} width="100%">
                            <label>הסכמים אחרונים</label>
                            <p className="mb-0">מנורית 22 חיפה | 03.06.24</p>
                            <p>פלורנטין 9 ת”א | 06.06.24</p>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={3} width="40%">
                            <button type="button" className="btn btn_cmn btn_bor" style={{ minWidth: 109 }}>לכל ההסכמים</button>
                          </td>
                          <td colSpan={4} width="40%" className="text-end">
                            <div className="table_btn_grp">
                              <a href="/" className="me-3"><img src={edit} alt="Edit" /></a>
                              <a href="/" data-bs-toggle="modal" data-bs-target="#delete_customer_modal"><img src={deleteIcon } alt="Delete" /></a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr> 
              </tbody>
            </table>
          </div>
        </div>
      </form>
    </div>
  </div>
</main> 
  )
}

export default Customer

