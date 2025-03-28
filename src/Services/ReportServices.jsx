import { useTranslation } from "react-i18next";
export const useReportServices = () => {
  const { t } = useTranslation();
  const getReportServices = () => {
    return [
      {
        id: 1,
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
