import React from 'react'
import { useTranslation } from 'react-i18next'
import CustomInput from '../../../Componant/Common/Input/Custominput';
import CustomButton from '../../../Componant/Common/Button/Button';
const Ownerdetails = ({setActiveTab}) => {
    const { t } = useTranslation();
  return (
    <>
    <form className='px-9'>
        <h4 className='text-2xl font-semibold text-[#00A481] py-3 mt-3 mb-1 text-start'>{t("pro_add_ower_details")}</h4>
        <div className="grid grid-cols-6  gap-6 ">
            <div className="col-span-2">
                <label className="text-base font-semibold">{t("pro_add_ower_name")}</label>
                <CustomInput
                    className={" w-full h-auto "}
                    type={'text'}
                />
            </div>
            <div className="col-span-2">
                <label className="text-base font-semibold">{t("pro_add_ower_phone")}</label>
                <CustomInput
                    className={" w-full h-auto "}
                    type={'text'}
                />
            </div> 
        </div>
        <div className='grid grid-cols-6 gap-6 mt-6'>
            <div className="col-span-2">
                <label className="text-base font-semibold">{t("pro_add_ower_email")}</label>
                <CustomInput
                    className={"w-full h-auto"}
                    type={'text'}
                />
            </div>
        </div>
    </form>
    
    <div className="flex justify-between text-end mt-4 pt-5 pb-3">
        <CustomButton children={t("Pro_add_pev_btn")} onClick={() => setActiveTab(2)} className={"border-1 border-emerald-500 px-5 shadow-lg text-emerald-500 py-2 rounded-full hover:bg-[#55CD85] hover:border-[#55CD85] hover:text-white"}/>
        <CustomButton children={t("pro_add_next_btn")}  onClick={() => setActiveTab(4)}   className={"border-1 border-emerald-500 px-5 bg-emerald-500 shadow-lg text-white py-2 rounded-full hover:bg-[#55CD85] hover:border-[#55CD85] hover:text-white"}/>
    </div>
    </>
  )
}

export default Ownerdetails;
