import { useTranslation } from "react-i18next";
export const useInvoiceServices = () => {
  const { t } = useTranslation();
  const getInvoiceService = () => [
    {
      id: 1,
      accountNumber: "224567",
      date: "06.06.24",
      clientNames: t("client_1"),
      subject: "service_payment",
      amount: "₪ 3348",
    },
    {
      id: 2,
      accountNumber: "224567",
      date: "06.06.24",
      clientNames: t("client_2"),
      subject: "service_payment",
      amount: "₪ 3348",
    },
    {
      id: 3,
      accountNumber: "224567",
      date: "06.06.24",
      clientNames: t("client_1"),
      subject: "service_payment",
      amount: "₪ 3348",
    },
    {
      id: 4,
      accountNumber: "224567",
      date: "06.06.24",
      clientNames: t("client_2"),
      subject: "service_payment",
      amount: "₪ 3348",
    },
  ];
  const getFilterInvoicesData = ({ clientName, fromDate, untilDate }) => {
    let data = getInvoiceService();

    if (clientName) {
      const searchQuery = clientName.toLowerCase();
      data = data.filter((item) => 
        item.clientNames.toLowerCase().includes(searchQuery)
      );
    }

    if (fromDate && untilDate) {
        const parseDate = (dateStr) => {
            const [day, month, year] = dateStr.split('.');
            return new Date(`20${year}`, month -1, day);
        };

        const from = new Date(fromDate);
        const until = new Date(untilDate);

        data = data.filter((item) => {
            const itemData = parseDate(item.date);
            return itemData >= from && itemData <= until;
        });
         return data;
    };
  };
  return { getInvoiceService, getFilterInvoicesData };
};
