import React from 'react'
import CustomButton from '../../../Componant/Common/Button/Button';
import CustomInput from '../../../Componant/Common/Input/Custominput';
import user_type_icon2 from '../../../assets/images/user_type_icon2.svg';
import user_type_icon1 from '../../../assets/images/user_type_icon1.svg';

const Propertydetails = ({setActiveTab}) => {

    const service = [
        {list: "כניסה מיידית"},
        {list: "מרפסת"},
        {list: "גישה לנכים"},
        {list: "מעלית"},
        {list: "מחסן"},
        {list: "ממ”ד"},
        {list: "מזגן"},
        {list: "מרוהט"},
        {list: "חניה"},
        {list: "סורגים"}
    ]

  return (
    <div className='px-9'>
        <form className=''>
            <h4 className='text-2xl font-semibold text-[#00A481] py-3 mt-3 mb-1 text-start'>פרטי הבעלים</h4>
            <div className="grid grid-cols-6 gap-6 ">
                <div className="col-span-2">
                    <label className="text-base mb-1 font-semibold">סוג הנכס</label>
                    <CustomInput
                        className={" w-full h-auto "}
                        type={'text'}
                    />
                </div>
                <div className="col-span-2">
                    <label className="text-base mb-1 font-semibold">מצב הנכס  </label>
                    <CustomInput
                        className={" w-full h-auto "}
                        type={'text'}
                    />
                </div> 
                <div className="col-span-2">
                    <label className="text-base mb-1 font-semibold">שם מלא*</label>
                    <CustomInput
                        className={" w-full h-auto "}
                        type={'text'}
                    />
                </div>
                <div className="col-span-2">
                    <label className="text-base mb-1 font-semibold">קומה  </label>
                    <CustomInput
                        className={" w-full h-auto "}
                        type={'text'}
                    />
                </div>
                <div className="col-span-2">
                    <label className="text-base mb-1 font-semibold">מ”ר בנוי  </label>
                    <CustomInput
                        className={" w-full h-auto "}
                        type={'text'}
                    />
                </div>
            </div>
        </form>
        <div className="row form_group">
                <div className="col-auto my-3">
                <div className=" relative">
                    <input type="checkbox" className="btn-check" id="check1" />
                    <label htmlFor="check1" className='flex flex-col items-center justify-center border border-solid border-[#D6D6D6] rounded-lg cursor-pointer w-[83px] h-[73px]'>
                    <span className="user_type_icon">
                        <img src={user_type_icon1} alt="user icon"/>
                    </span>
                    השכרה
                    </label>
                </div>
                <div className="mt-3" style={{ maxWidth: 142 }}>
                    <label className="text-sm mb-1 font-semibold">מחיר שכירות מבוקש </label>
                    <CustomInput 
                    type={'text'}
                    className={" w-full h-auto "}
                    />
                </div>
                </div>
                <div className="col-auto my-3">
                <div className="relative">
                    <input type="checkbox" className="btn-check border-[#00A481s]" id="check2" />
                    <label htmlFor="check2" className='flex flex-col items-center justify-center border border-solid border-[#D6D6D6] rounded-lg cursor-pointer w-[83px] h-[73px]'>
                    <span className="user_type_icon">
                        <img src={user_type_icon2} alt="user icon"/>
                    </span>
                    קנייה
                    </label>
                </div>
                <div className="mt-3" style={{ maxWidth: 142 }}>
                    <label className="text-sm mb-1 font-semibold">מחיר קנייה מבוקש</label>
                    <CustomInput 
                    type={'text'}
                    className={" w-full h-auto "}
                    />
                </div>
                </div>
        </div>
        <h4 className='text-base font-semibold text-[#00A481] py-3 mt-3 mb-1 text-start'>סמנו מאפיינים נוספים</h4>
        <ul>
            {service.map((item, index) => {
                return(<>
                    <li className='rounded-2xl inline-block ml-4 mb-5 bg-slate-200' key={index}><span className='font-normal  py-1    px-2 block min-w-[92px] text-center text-base'>{item.list}</span></li>
                </>)
                })}
        </ul>
        <div className="form_group">
                <label className="form-label">תיאור כללי של הנכס</label>
                <textarea
                className="form-control"
                placeholder="למשל דירה 4 חדרים עם 4 כיווני אוויר, מוארת..."
                defaultValue={""}
                />
        </div>
        <div className="flex justify-between text-end mt-4 pt-5 pb-3">
            <CustomButton children={"הקודם"}  className={"border-1 border-emerald-500 px-5 shadow-lg text-emerald-500 py-2 rounded-full hover:bg-[#55CD85] hover:border-[#55CD85] hover:text-white"} onClick={() => setActiveTab(1)}/>
            <CustomButton children={"הבא"}  className={"border-1 border-emerald-500 px-5 bg-emerald-500 shadow-lg text-white py-2 rounded-full hover:bg-[#55CD85] hover:border-[#55CD85] hover:text-white"}  onClick={() => setActiveTab(3)} />
        </div>
    </div>
  )
}

export default Propertydetails
