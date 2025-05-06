import { useTranslation } from "react-i18next";
import { useState } from "react";
export const useInvoiceServices = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("all");
  const [clientName, setClientName] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [untilDate, setUntilDate] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClick = () => setIsOpen(true);

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

  const [invoiceData, setInvoiceData] = useState(getInvoiceService() || []);
 const getFilterInvoicesData = ({ clientName, fromDate, untilDate }) => {
    let data = getInvoiceService();

    // Filter by client name
    if (clientName) {
      const searchQuery = clientName.toLowerCase();
      data = data.filter((item) =>
        item.clientNames.toLowerCase().includes(searchQuery)
      );
    }

    // Filter by date range
    if (fromDate && untilDate) {
      const parseDate = (dateStr) => {
        const [day, month, year] = dateStr.split(".");
        return new Date(`20${year}`, month - 1, day);
      };

      const from = new Date(fromDate);
      const until = new Date(untilDate);

      data = data.filter((item) => {
        const itemDate = parseDate(item.date);
        return itemDate >= from && itemDate <= until;
      });
    }

    return data; // ✅ always return
  };

  const handleSearch = () => {
    const filteredData = getFilterInvoicesData({ clientName, fromDate, untilDate });
    setInvoiceData(filteredData || []); // ✅ fallback to empty array
  };


  return { getInvoiceService, getFilterInvoicesData, handleSearch, handleClick, activeTab, setActiveTab, clientName, setClientName, fromDate, setFromDate, untilDate, setUntilDate, isOpen, invoiceData, setInvoiceData, setIsOpen };
};
