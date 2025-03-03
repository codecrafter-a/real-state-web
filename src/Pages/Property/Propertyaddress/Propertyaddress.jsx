import React from 'react'
import CustomButton from '../../../Componant/Common/Button/Button';
import CustomInput from '../../../Componant/Common/Input/Custominput';
const Propertyaddress = ({setActiveTab}) => {
  return (
    <>
      <form className='px-9' >
              <h4 className='text-2xl font-semibold text-[#00A481] py-3 mt-3 mb-1 text-start'> כתובת הנכס </h4>
                <div className="grid grid-cols-6 gap-6 form_group">
                  <div className="col-span-2">
                    <label className="text-base font-semibold">עיר*</label>
                    <CustomInput
                      className={" w-full h-auto "}
                      type={'text'}
                    />
                  </div>
                  <div className="col-span-2">
                    <label className="text-base font-semibold">רחוב*</label>
                    <CustomInput
                      className={" w-full h-auto "}
                      type={'text'}
                    />
                  </div>
                </div>
                  <div className="grid grid-cols-6 gap-6 form_group mt-6">
                    <div className="col-span-2">
                      <label className="text-base font-semibold">מס’ בניין*</label>
                      <CustomInput
                        className={" w-full h-auto "}
                        type={'text'}
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="text-base font-semibold">מס’ דירה </label>
                      <CustomInput
                        className={" w-full h-auto "}
                        type={'text'}
                      />
                    </div>
                </div> 
                <div className="step_btn_group text-end mt-4 pt-5 pb-3">
                  <CustomButton children={"הבא"}  onClick={() => setActiveTab(2)}  className={"border-1 border-emerald-500 px-5 bg-emerald-500 shadow-lg text-white  py-2 rounded-full hover:bg-[#55CD85] hover:border-[#55CD85] hover:text-white"}/>
                </div>
            </form>
    </>
  )
}

export default Propertyaddress
