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

    const filteredData = tableData.filter((item) => {
        const term = searchTerm?.toLowerCase() || "";
        const name = item.clients?.toLowerCase?.() || "";
        console.log("itemsdadd", item);
        let matchesDate = true;
        if (isDateFilter) {
        const [day, month, shortYear] = item.date.split(".");
        const fullYear = `20${shortYear}`;
        const itemDate = new Date(`${fullYear}-${month}-${day}`); 
        const fromDateObj = fromDate ? new Date(fromDate) : null;
        const toDateObj = toDate ? new Date(toDate) : null;
        if (fromDateObj && toDateObj) {
          matchesDate = itemDate >= fromDateObj && itemDate <= toDateObj;
        } else if (fromDateObj) {
          matchesDate = itemDate >= fromDateObj;
        } else if (toDateObj) {
          matchesDate = itemDate <= toDateObj;
        }
    } 
        const matchesSearch = name.includes(term);
      
        return matchesSearch && matchesDate;
      });

      return {searchTerm, setSearchTerm, fromDate, setFromDate, toDate, setToDate, isDateFilter, setIsDateFilter, filteredData, tableData}
}

export default SignatureInvoiceServices
