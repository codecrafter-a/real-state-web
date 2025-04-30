import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";
export const useAgreementServices = () => {
  const [tableData, setTableData] = useState([]);
  const [agreeData, setAgreeData] = useState(false);
  const [removeData, setRemoveData] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
const { t } = useTranslation();
const [modalState, setModalState] = useState({
  addInvoices: false,
  isError: false,
  restriction: false,
  isInvoices: false,
  isDocument: false,
});
const updateModalState = (updatedValues) => {
  setModalState((prev) => ({
    ...prev,
    ...updatedValues,
  }));
};
  const getAgreementData = () => {
    return [
      {
        status: "home_tab_r1_h2",
        commission: "20%",
        clients: "home_tab_r1_h4",
        agreementType: "home_tab_r1_h5",
        date: "06.06.24",
        agreementName: 'home_tab_r1_h7',
        actionType: "default",
        icon: <FaWhatsapp />,
        deletes: "age_delet",
        actionType: "Generated",
        userID: 1,
      },
      {
        status: "home_tab_r2_h2",
        commission: "20%",
        clients: "home_tab_r1_h4",
        agreementType: "home_tab_r1_h5",
        date: "06.06.24",
        agreementName: 'home_tab_r1_h7',
        actionType: "default",
        icon: <FaWhatsapp />,
        deletes: "age_delet",
        actionType: "Sent",
        userID: 2,
      },
      {
        status: "home_tab_r3_h2",
        commission: "20%",
        clients: "home_tab_r1_h4",
        agreementType: "home_tab_r1_h5",
        date: "06.06.24",
        agreementName: 'home_tab_r1_h7',
        actionType: "default",
        icon: <FaWhatsapp />,
        deletes: "age_delet",
        actionType: "Viewed",
        userID: 3,
      },
      {
        status: "home_tab_r4_h2",
        commission: "20%",
        clients: "home_tab_r1_h4",
        agreementType: "home_tab_r1_h5",
        date: "06.06.24",
        agreementName: 'home_tab_r1_h7',
        actionType: "signed",
        icon: <FaWhatsapp />,
        deletes: "age_delet",
        actionType: "Signed",
        userID: 4,
      },
      {
        status: "home_tab_r5_h2",
        commission: "20%",
        clients: "home_tab_r1_h4",
        agreementType: "home_tab_r1_h5",
        date: "06.06.24",
        agreementName: 'home_tab_r1_h7',
        actionType: "executed",
        icon: <FaWhatsapp />,
        deletes: "age_delet",
        actionType: "Signed and executed",
        userID: 5,
      },
      {
        status: "home_tab_r6_h2",
        commission: "20%",
        clients: "home_tab_r1_h4",
        agreementType: "home_tab_r1_h5",
        date: "06.06.24",
        agreementName: 'home_tab_r1_h7',
        actionType: "registered",
        icon: <FaWhatsapp />,
        deletes: "age_delet",
        actionType: "Signed and registered",
        userID: 6,
      },
    ];
  };

  const AgreefilterService = ({ searchQuery, fromDate, toDate }) => {
    let data = getAgreementData();

    console.log("clientnafsa", searchQuery);

if (searchQuery) {
  const query = searchQuery.toLowerCase();
  data = data.filter((item) =>
    t(item.clients).toLowerCase().includes(query)
  );
}
  
    if (fromDate && toDate) {
      const parseDate = (dateStr) => {
        const [day, month, year] = dateStr.split('.');
        return new Date(`20${year}`, month - 1, day);
      };
  
      const from = new Date(fromDate);
      const to = new Date(toDate);
  
      data = data.filter((item) => {
        const itemDate = parseDate(item.date);
        return itemDate >= from && itemDate <= to;
      });
    }
  
    return data;
  };

  const handleStatusChange = (e) => setSelectedStatus(e.target.value);
  const handleRemoveStatus = () => setSelectedStatus("");
  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleData = () => setAgreeData(true);
  const handleAgreeChange = () => {
    const data = AgreefilterService({searchQuery, fromDate, toDate})
    setTableData(data);
  }
  return {
    tableData,
    setTableData,
    agreeData,
    setAgreeData: setAgreeData,
    searchQuery,
    setSearchQuery,
    selectedStatus,
    setSelectedStatus,
    fromDate,
    modalState, 
    setModalState,
    setFromDate,
    toDate,
    updateModalState,
    removeData, 
    setRemoveData,
    setToDate,
    getAgreementData,
    handleStatusChange,
    handleRemoveStatus,
    handleSearchChange,
    handleData,
    AgreefilterService,
    handleAgreeChange
  };
};