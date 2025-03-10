
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import add_file from "../../../assets/images/add_file.svg";
import add_img from "../../../assets/images/add_img.svg";
import CustomButton from "../../../Componant/Common/Button/Button";
import deleteIcon from "../../../assets/images/delete.svg";


const Attechment = ({ setActiveTab }) => {
  const { t } = useTranslation();

  const [files, setFiles] = useState({
    tabo: null,
    cityApproval: null,
    additionalDocs: null,
  });

  const [previews, setPreviews] = useState({
    tabo: null,
    cityApproval: null,
    additionalDocs: null,
  });

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      setFiles((prev) => ({ ...prev, [type]: file }));
      setPreviews((prev) => ({ ...prev, [type]: URL.createObjectURL(file) }));
    }
  };

  const handleRemoveFile = (type) => {
    setFiles((prev) => ({ ...prev, [type]: null }));
    setPreviews((prev) => ({ ...prev, [type]: null }));
  };

  const fileInputs = [
    { key: "tabo", label: t("pro_add_attch_doc_1") },
    { key: "cityApproval", label: t("pro_add_attch_doc_2") },
    { key: "additionalDocs", label: t("pro_add_attch_doc_3") },
  ];

  return (
    <>
      <form className="px-9">
        <h4 className="text-2xl font-semibold text-[#00A481] py-1 mt-3 mb-1 text-start">
          {t("pro_add_attch")}
        </h4>
        <p className="text-base font-normal">{t("pro_add_attch_doc_note")}</p>

        <div className="row">
          {fileInputs.map(({ key, label }) => (
            <div key={key} className="col-md-4 mydropzone">
              <div className="dropzone needsclick demo-upload">
                <div className="border-[1px] border-dashed border-[#00A481] rounded-md p-2 px-4">
                  <label className="flex items-center font-semibold text-[#00A481] cursor-pointer relative">
                    <input
                      type="file"
                      className="border-0 bg-transparent opacity-0 absolute w-full h-full cursor-pointer"
                      onChange={(e) => handleFileChange(e, key)}
                    />
                    <div className=" flex justify-start ">
                      <img src={add_file} alt="Upload Icon" className="cursor-pointer" />
                      <span className="ml-2 pt-1">{label}</span>
                    </div>  
                  </label>           
                </div>
              </div>

              {files[key] && (
                <div className="mt-4 flex items-center border-[1px] border-dashed border-[#00A481] rounded-md p-2">
                  <button
                    className="text-red-500 mr-2"
                    onClick={() => handleRemoveFile(key)}
                    type="button"
                  >
                    <img src={deleteIcon} alt="Delete" className="cursor-pointer" />
                  </button>
                  <span className="flex-grow">{files[key]?.name}</span>
                  {previews[key] && (
                    <img src={previews[key]} alt="Preview" className="w-10 h-10 rounded-lg object-cover" />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="row my-4">
          <div className="col-md-12 mydropzone">
            <div className="border-[1px] border-dashed border-[#00A481] rounded-md p-2 px-4">
              <div className="flex justify-center text-center items-center">
                <div className="img-circle py-3">
                  <div className="relative cursor-pointer">
                    <input
                      type="file"
                      className="border-0 bg-transparent opacity-0 absolute w-full h-full cursor-pointer"
                    />
                    <img src={add_img} alt="Upload Icon" className="cursor-pointer ml-36" />
                  </div>
                  <p className="text-emerald-500">
                    {t("pro_add_attch_doc_des_1")} <br />
                    <span>{t("pro_add_attch_doc_des_2")}</span>
                  </p>
                  <CustomButton
                    children={t("pro_add_attch_img_btn")}
                    className={
                      "border-1 border-emerald-500 px-5 shadow-lg text-emerald-500 py-2 rounded-full hover:bg-[#55CD85] hover:border-[#55CD85] hover:text-white"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="flex justify-between text-end mt-4 pt-5 pb-3">
        <CustomButton
          children={t("Pro_add_pev_btn")}
          className={
            "border-1 border-emerald-500 px-5 shadow-lg text-emerald-500 py-2 rounded-full hover:bg-[#55CD85] hover:border-[#55CD85] hover:text-white"
          }
          onClick={() => setActiveTab(3)}
        />
        <CustomButton
          children={t("pro_add_next_btn")}
          className={
            "border-1 border-emerald-500 px-5 bg-emerald-500 shadow-lg text-white py-2 rounded-full hover:bg-[#55CD85] hover:border-[#55CD85] hover:text-white"
          }
        />
      </div>
    </>
  );
};

export default Attechment;
