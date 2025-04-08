import React from 'react'
import {Col} from 'react-boostrap';
import search from '../../assets/images/search.png';
import { useTranslation } from 'react-i18next';
const Landregistry = () => {
    const {t} = useTranslation();
  return (
    <>
      <Col className='bg-white shadow-lg rounded-3 my-3'>
        <p className="py-3 mb-4 screen-1 text-center border-bottom d-none d-md-block">
           נכסים הרשומים בספר המקרקעין 
        </p>
        <div className="custom-scrollbar overflow-y-auto overflow-x-hidden px-3 mt-4" style={{ maxHeight: "594px" }}>
            <div className=' d-flex justify-content-start '>
                <div className="border rounded-1 input-group responsive-width ">    
                  <input
                    type="text"
                    className="form-control border-0 "
                    id="searchInput"
                    placeholder={t("invoice_placeholder")}
                    
                  />
                  <span className="input-group-text bg-transparent  border-0">
                    <img src={search} alt="search" />
                  </span> 
                </div>
            </div>
        </div>
      </Col>
    </>
  )
}

export default Landregistry
