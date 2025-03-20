import { useTranslation } from "react-i18next";

export const useClientService = () => {
  const { t } = useTranslation();

  const getClients = () => {
    return [
      {
        name: t("cust_name_1"),
        type: t("type_cust_1"),
        phone: t("phone_cust_1"),
        email: t("email_cust_1"),
        location: t("location_cust_1"),
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
        status: t("status_cust_2"),
        statusColor: "bg-red-200 text-red-600",
        userID: 2,
      },
    ];
  };

  return { getClients };
};