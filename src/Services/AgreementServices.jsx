import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export const useAgreementServices = () => {
  const [tableData, setTableData] = useState([]);
  const [agreeData, setAgreeData] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

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
        userID: 6,
      },
    ];
  };

  const handleStatusChange = (e) => setSelectedStatus(e.target.value);
  const handleRemoveStatus = () => setSelectedStatus("");
  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleData = () => setAgreeData(true);

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
    setFromDate,
    toDate,
    setToDate,
    getAgreementData,
    handleStatusChange,
    handleRemoveStatus,
    handleSearchChange,
    handleData,
  };
};