import React from 'react'
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

 
const Layout = ({ children }) => {
  return (
    <div className="bg-white text-black text-base">
    <Header />
    <div className="layout_content">
      <Sidebar />
      <main className="main_content">
        {children}
      </main>
    </div>
  </div>
  )
}

export default Layout;
