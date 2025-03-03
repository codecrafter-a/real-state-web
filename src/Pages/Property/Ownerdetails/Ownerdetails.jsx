import React from 'react'
import CustomInput from '../../../Componant/Common/Input/Custominput';
import CustomButton from '../../../Componant/Common/Button/Button';
const Ownerdetails = ({setActiveTab}) => {
  return (
    <>
    <form className='px-9'>
        <h4 className='text-2xl font-semibold text-[#00A481] py-3 mt-3 mb-1 text-start'>פרטי הבעלים</h4>
        <div className="grid grid-cols-6  gap-6 ">
            <div className="col-span-2">
                <label className="text-base font-semibold">שם מלא*</label>
                <CustomInput
                    className={" w-full h-auto "}
                    type={'text'}
                />
            </div>
            <div className="col-span-2">
                <label className="text-base font-semibold">טלפון*</label>
                <CustomInput
                    className={" w-full h-auto "}
                    type={'text'}
                />
            </div> 
        </div>
        <div className='grid grid-cols-6 gap-6 mt-6'>
            <div className="col-span-2">
                <label className="text-base font-semibold">דוא”ל</label>
                <CustomInput
                    className={"w-full h-auto"}
                    type={'text'}
                />
            </div>
        </div>
    </form>
    
    <div className="flex justify-between text-end mt-4 pt-5 pb-3">
        <CustomButton children={"הקודם"} onClick={() => setActiveTab(2)} className={"border-1 border-emerald-500 px-5 shadow-lg text-emerald-500 py-2 rounded-full hover:bg-[#55CD85] hover:border-[#55CD85] hover:text-white"}/>
        <CustomButton children={"הבא"}  onClick={() => setActiveTab(4)}   className={"border-1 border-emerald-500 px-5 bg-emerald-500 shadow-lg text-white py-2 rounded-full hover:bg-[#55CD85] hover:border-[#55CD85] hover:text-white"}/>
    </div>
    </>
  )
}

export default Ownerdetails;
