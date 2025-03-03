import React, {useState} from 'react'
import bodyBg from "../../assets/images/body_bg.webp";
import boryGroupLeft from '../../assets/images/bory_group_left.png';
import boryGroupRight from '../../assets/images/bory_group_right.png';
// import CustomButton from '../../Componant/Common/Button/Button';
// import CustomInput from '../../Componant/Common/Input/Custominput';
import Propertyaddress from './Propertyaddress/Propertyaddress';
import Propertydetails from './Propertydetails/Propertydetails';
import Ownerdetails from './Ownerdetails/Ownerdetails';
import Attachments from '../Property/Attechment/Attechment';
const Property = () => {
  const [activeTab, setActiveTab] = useState(1);

  const renderTabContent = () => {
    switch (activeTab) {
      case 1:
        return <Propertyaddress setActiveTab={setActiveTab} />;
      case 2:
        return <Propertydetails setActiveTab={setActiveTab} />;
      case 3:
        return <Ownerdetails setActiveTab={setActiveTab} />;
      case 4:
        return <Attachments setActiveTab={setActiveTab} />;
      default:
        return <Propertyaddress setActiveTab={setActiveTab} />;
    }
  };

  return (
    <>
      <div className='w-full absolute top-0 overflow-hidden z-0'>
        <figure className="mb-0 top_bg_fig">
          <img src={bodyBg} width="100%" alt="Background" />
          <span className="absolute right-0 top-2">
            <img src={boryGroupLeft} alt="left bg icon" />
          </span>
        </figure> 
        <div className="bgbelow_icons">
          <img src={boryGroupRight} alt="right bg icon" />
        </div>
      </div>
      <div className='min-h-[550px] bg-white max-w-full w-[1194px] my-0 mx-auto pb-6 relative z-50 rounded-2xl shadow-lg'>
        <div className='px-6'>
          <h1 className="text-2xl font-semibold text-[#00A481] py-4 mb-7 border-b border-solid border-[#EAEAEA] text-center">הוספת נכס חדש</h1>
        </div>
        <div className='px-6 py-0'>
          <div className='relative pt-5 pr-12'>
            <div className="mx-auto w-[304px]">
              <div className="relative text-center flex justify-around">
                {[1, 2, 3, 4].map((step, index) => (
                    <div key={step} className="flex items-center">
                    
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-base font-semibold cursor-pointer relative border-2 border-solid transition-all duration-300 ${
                          activeTab > step
                            ? "bg-[#00A481] text-white border-[#00A481]" 
                            : activeTab === step
                            ? "border-[#00A481] bg-white text-[#00A481]" 
                            : "border-transparent bg-[#E3E3E3] text-black" 
                        }`}
                        onClick={() => setActiveTab(step)}
                      >
                        {step}
                        <span className="absolute left-1/2 -translate-x-1/2 top-10 text-xs font-light whitespace-nowrap">
                          {step === 1
                            ? "כתובת הנכס"
                            : step === 2
                            ? "פרטי הנכס"
                            : step === 3
                            ? "פרטי הבעלים"
                            : "נספחים"}
                        </span>
                      </div>

                      
                      {index < 3 && (
                        <div
                          className={`w-12 h-[2px] transition-all duration-300 ${
                            activeTab > step ? "bg-[#00A481]" : "bg-[#E3E3E3]"
                          }`}
                        ></div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
            {renderTabContent()}
          </div>
        </div>
      </div>
    </>
  )
}

export default Property;
