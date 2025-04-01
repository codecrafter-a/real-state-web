import { t } from "i18next";
import { useTranslation } from "react-i18next";
export const useReportServices = () => {
  const { t } = useTranslation();
  const getReportServices = () => {
    return [
      {
        id: 1,
        name: t("customer1_name"),
        type: t("customer_type"),
        phone: "054-4692650",
        email: "shirims@gmail.com",
        details: {
          type: t("property_type"),
          status: t("property_status"),
          rooms: "3,4,5",
          size: '100 - 300 מ"ר',
          floor: "4,5",
          price: "1000 - 3000 ₪",
          features: [
            "Parking",
            "Storage",
            "Space",
            "Elevator",
            "Air Conditioning",
            "Balcony",
          ],
          comments: t("client_comments"),
        },
      },
      {
        id: 2,
        name: t("customer_name"),
        type: t("customer_type"),
        phone: "054-4692650",
        email: "shirims@gmail.com",
        details: {
          type: t("property_type"),
          status: t("property_status"),
          rooms: "3,4,5",
          size: '100 - 300 מ"ר',
          floor: "4,5",
          price: "1000 - 3000 ₪",
          features: [
            "Parking",
            "Storage",
            "Space",
            "Elevator",
            "Air Conditioning",
            "Balcony",
          ],
          comments: t("client_comments"),}
      },
    ];
  };

  return { getReportServices };
};


export const reportData = {
  suggestions: [
    { 
      id: 1,
      client_name: t("client_name"), 
      email_phone: t("email_phone"),
      properties: [
        { id: 1, address: t("property_type"), price: t("price1"), rooms: t("rooms"), features: ["garage", "balcony", "secure_room"], description: t("description") },
        { id: 2, address: t("property_type"), price: t("price1"), rooms: t("rooms"), features: ["garage", "balcony"], description: t("description") },
        { id: 3, address: t("property_type"), price: t("price1"), rooms: t("rooms"), features: ["garage", "secure_room"], description: t("description") },
        { id: 4, address: t("property_type"), price: t("price1"), rooms: t("rooms"), features: ["balcony"], description: t("description") },
        { id: 5, address: t("property_type"), price: t("price1"), rooms: t("rooms"), features: ["garage", "balcony"], description: t("description") },
        { id: 6, address: t("property_type"), price: t("price1"), rooms: t("rooms"), features: ["secure_room"], description: t("description") }
      ]
    },
    { 
      id: 2,
      client_name: t("client_name2"), 
      email_phone: t("email_phone2"),
      properties: [
        { id: 1, address: t("property_type2"), price: t("price2"), rooms: t("rooms"), features: ["garage", "balcony"], description: t("description") },
        { id: 2, address: t("property_type2"), price: t("price2"), rooms: t("rooms"), features: ["garage"], description: t("description") },
        { id: 3, address: t("property_type2"), price: t("price2"), rooms: t("rooms"), features: ["balcony", "secure_room"], description: t("description") }
      ]
    },
    { 
      id: 3,
      client_name: t("client_name3"), 
      email_phone: t("email_phone3"),
      properties: [
        { id: 1, address: t("property_type3"), price: t("price2"), rooms: t("rooms"), features: ["garage"], description: t("description") },
        { id: 2, address: t("property_type3"), price: t("price2"), rooms: t("rooms"), features: ["balcony"], description: t("description") }
      ]
    }
  ]
};
