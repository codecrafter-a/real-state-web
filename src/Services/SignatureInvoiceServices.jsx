import React, {useState} from 'react';
import { useTranslation } from "react-i18next";

const SignatureInvoiceServices = () => {
    const { t } = useTranslation();
    const tableData = [
        { id: 1, invoice: "1234567", date: "06.06.24", clients: t("invoice_clients_Name"), subject: t("paymentForService"), amount: "3348 ₪" },
        { id: 2, invoice: "1234567", date: "06.06.24", clients: t("invoice_clients_Name"), subject: t("paymentForService"), amount: "3348 ₪" },
        { id: 3, invoice: "1234567", date: "06.06.24", clients: t("invoice_clients_Name"), subject: t("paymentForService"), amount: "3348 ₪" },
        { id: 4, invoice: "1234567", date: "06.06.24", clients: t("invoice_clients_Name"), subject: t("paymentForService"), amount: "3348 ₪" },
        { id: 5, invoice: "1234567", date: "06.06.24", clients: t("invoice_clients_Name"), subject: t("paymentForService"), amount: "3348 ₪" },
        { id: 6, invoice: "1234567", date: "06.06.24", clients: t("invoice_clients_Name"), subject: t("paymentForService"), amount: "3348 ₪" },
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [isDateFilter, setIsDateFilter] = useState(false);
    const [filteredData, setFilteredData] = useState(tableData);
   
    const dateFilter = () => {
      const term = searchTerm.trim().toLowerCase();
      const fromDateObj = fromDate ? new Date(fromDate) : null;
      const toDateObj = toDate ? new Date(toDate) : null;
  
      const newFilteredData = tableData.filter((item) => {
        const name = item.clients?.toLowerCase?.() || "";
  
        // Match client name
        const matchesSearch = name.includes(term);
  
        // Match date range
        let matchesDate = true;
        if (item.date) {
          const [day, month, shortYear] = item.date.split(".");
          const fullYear = `20${shortYear}`;
          const itemDate = new Date(`${fullYear}-${month}-${day}`);
  
          if (fromDateObj && toDateObj) {
            matchesDate = itemDate >= fromDateObj && itemDate <= toDateObj;
          } else if (fromDateObj) {
            matchesDate = itemDate >= fromDateObj;
          } else if (toDateObj) {
            matchesDate = itemDate <= toDateObj;
          }
        }
  
        return matchesSearch && matchesDate;
      });
  
      setFilteredData(newFilteredData);
    };

      return {searchTerm, setSearchTerm, dateFilter, fromDate, setFromDate, toDate, setToDate, isDateFilter, setIsDateFilter, filteredData, tableData}
}

export default SignatureInvoiceServices
