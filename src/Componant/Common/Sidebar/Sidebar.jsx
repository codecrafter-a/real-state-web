import React from 'react'
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
import "../Sidebar/Sidebar.css";
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <>
    <section className="haeder_right_block">
        <div className="haeder_right mCustomScrollbar">
          <ul className="hdr_right_menu">
            {[{ icon: iconHome, text: "בית" },
              { icon: iconPaper, text: "הסכמים" },
              { icon: userIcon, text: "לקוחות" , to: "/customers"},
              { icon: homeWork, text: "נכסים" },
              { icon: icon5, text: "סוכנים" },
              { icon: attachMoney, text: "חשבוניות" },
              { icon: barChart, text: "נתונים" },
              { icon: familyHome, text: "דו" },
              { icon: book2, text: "רישום בספר המקרקעין" },
              { icon: menuIcon7, text: "הגדרות" },
              { icon: lock, text: "איזור אישי" },
              { icon: doorOpen, text: "התנתקות" }].map((item, index) => (
                <li key={index}>
                  <Link to={item.to}>
                    <span className="menu_icon">
                      <img src={item.icon} alt="icon" />
                    </span>
                    {item.text}
                    </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="cmn_actions">
          <h4> פעולות נפוצות</h4>
          <ul className="cmn_actions_list">
            {[{ icon: actionIcon1, text: "החתמת מתעניין" },
              { icon: actionIcon2, text: "החתמת בעל נכס" },
              { icon: actionIcon3, text: "שת”פ בין מתווכים" }].map((action, index) => (
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
      </section>
    
    </>
  )
}

export default Sidebar;
