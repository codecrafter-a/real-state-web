import { useState } from "react";
import { useTranslation } from "react-i18next";

export const useClientService = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    idNumber: "",
    address: "",
    userType: [],
    preferences: [],
    requestedArea: "",
    propertyType: "",
    propertyCondition: "",
    rooms: "",
    sizeMin: 0,
    sizeMax: 10000,
    priceMin: 0,
    priceMax: 10000,
    additionalFeatures: [],
    customerRequests: "",
    idCard: "",
    numberOfRooms: "",
    residentialArea: "",
  });

  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((item) => item !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const nextScreen = () => setCurrentScreen(2);
  const prevScreen = () => setCurrentScreen(1);

  const openSecondModal = () => {
    setIsFirstModalOpen(false);
    setIsSecondModalOpen(true);
  };

  const closeFirstModal = () => setIsFirstModalOpen(false);
  const closeSecondModal = () => setIsSecondModalOpen(false);

  const getClients = () => {
    return [
      {
        name: t("cust_name_1"),
        type: t("type_cust_1"),
        phone: t("phone_cust_1"),
        email: t("email_cust_1"),
        location: t("location_cust_1"),
        property_type: t("cust_property_type_value"),
        property_condition: t("cust_Property_Condition_value"),
        status: t("status_cust_1"),
        statusColor: "bg-blue-200 text-blue-600",
        userID: 1,
      },
      {
        name: t("cust_name_2"),
        type: t("type_cust_2"),
        phone: "054-4692650",
        email: "shirims@gmail.com",
        location: t("location_cust_2"),
        property_type: t("cust_property_type_value"),
        property_condition: t("cust_Property_Condition_value"),
        status: t("status_cust_2"),
        statusColor: "bg-red-200 text-red-600",
        userID: 2,
      },
    ];
  };

  return {
    formData,
    setFormData,
    isFirstModalOpen,
    setIsFirstModalOpen,
    isSecondModalOpen,
    setIsSecondModalOpen,
    currentScreen,
    setCurrentScreen,
    handleChange,
    nextScreen,
    prevScreen,
    openSecondModal,
    closeFirstModal,
    closeSecondModal,
    getClients,
    t,
  };
};