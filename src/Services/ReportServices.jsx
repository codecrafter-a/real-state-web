import { t } from "i18next";
import { useTranslation } from "react-i18next";
export const useReportServices = () => {
  const { t } = useTranslation();
  const getReportServices = () => {
    return [
      {
        id: 1,
        name: t("report_name"),
        type: t("report_type"),
        phone: "054-4692650",
        email: "shirims@gmail.com",
        details: {
          type: t("property_type"),
          status: t("condition"),
          rooms: t("room_options"),
          size: t("area_range"),
          floor: t("floor_levels"),
          price: t("rental_price"),
          features: [
            t("Parking"),
            t("Furnished"),
            t("Elevator"),
            t("Air_Conditioning"),
            t("Balcony"),
          ],
          comments: t("comments"),
        },
      },
      {
        id: 2,
        name: t("report_name"),
        type: t("report_type"),
        phone: "054-4692650",
        email: "shirims@gmail.com",
        details: {
          type: t("property_type"),
          status: t("condition"),
          rooms: t("room_options"),
          size: t("area_range"),
          floor: t("floor_levels"),
          price: t("rental_price"),
          features: [
            t("Parking"),
            t("Furnished"),
            t("Elevator"),
            t("Air_Conditioning"),
            t("Balcony"),
          ],
          comments: t("comments"),
        }
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


export const reportDataRecent = {
  recentSearches: [
    {
      id: 1,
      address: t("property1.address"),
      type: t("property1.type"),
      details: t("property1.details"),
      description: t("property1.description"),
      price: "₪1,200,000",
      features: ["garage", "balcony", "secure_room"],
      image: "house1.jpg",
      clientInfo: {
        name: t("property1.name"),
        email: t("property1.email"),
        phone: t("property1.phone"),
        matchPercentage: t("property1.matchPercentage")
      }
    },
    {
      id: 2,
      address: t("property2.address"),
      type: t("property2.type"),
      details: "4 rooms, 180 sqm",
      description: t("property2.description"),
      price: "₪3,500,000",
      features: ["garage", "pool", "elevator"],
      image: "house2.jpg",
      clientInfo: {
        name: t("property2.name"),
        email: t("property2.email"),
        phone: t("property2.phone"),
        matchPercentage: t("property2.matchPercentage")
      }
    }
  ]
};