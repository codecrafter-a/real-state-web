import React from 'react'
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
import "../Sidebar/Sidebar.css";
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const { t } = useTranslation(); 
  return (
    <>
    <section className="haeder_right_block">
        <div className="haeder_right mCustomScrollbar">
          <ul className="hdr_right_menu">
            {[{ icon: iconHome, text: t("sitem1") },
              { icon: iconPaper, text: t("sitem2") },
              { icon: userIcon, text: t("sitem3") , to: "/customers"},
              { icon: homeWork, text: t("sitem4"), to: "/property" },
              { icon: icon5, text: t("sitem5") },
              { icon: attachMoney, text: t("sitem6") },
              { icon: barChart, text: t("sitem7") },
              { icon: familyHome, text: t("sitem8") },
              { icon: book2, text: t("sitem9") },
              { icon: menuIcon7, text: t("sitem10") },
              { icon: lock, text: t("sitem11") },
              { icon: doorOpen, text: t("sitem12") }].map((item, index) => (
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
          <h4> {t("action")}</h4>
          <ul className="cmn_actions_list">
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
      </section>
    
    </>
  )
}

export default Sidebar;
