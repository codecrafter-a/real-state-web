import { useTranslation } from "react-i18next";
import houseImg from "../assets/images/houses.jpg";
import { useState } from "react";
export const usePropertyservices = () => {
  const { t } = useTranslation();
  const [clientNameInput, setClientNameInput] = useState("");
  const [location, setLocation] = useState("");
  const [sel, setSel] = useState("");
  const [propertytype, setPropertytype] = useState("");
  const [procondition, setProcondition] = useState("");
  const [filteredClients, setFilteredClients] = useState([]);
  const [selectAll, setSelectAll] = useState(false); 
    const [expandedRows, setExpandedRows] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]); 
  const getpropertyservices = () => [
    {
      property_type: t("all_property_type"),
      property_status: t("all_property_status"),
      area_sqm: 330,
      floor: 3,
      rooms: 5,
      property_address: t("all_row_data1"),
      sale: t("sale"),
      price: "365,000,000",
      owner: t("owner_name"),
      deal_type: t("all_deal_type"),
      renovation: t("renovated"),
      note: t("all_exclusive_sale", { date: "22.02.2424" }),
      isChecked: false,
    },
    {
      property_type: t("all_property_type"),
      property_status: t("all_property_status"),
      property_address: t("all_row_data1"),
      sale: t("sale"),
      area_sqm: 330,
      floor: 3,
      renovation: t("renovated"),
      rooms: 5,
      price: "365,000,000",
      owner: t("owner_name"),
      deal_type: t("all_deal_type"),
      note: "",
      isChecked: false,
    },
    {
      property_type: t("all_property_type"),
      property_status: t("all_property_status"),
      property_address: t("all_row_data1"),
      sale: t("sale"),
      area_sqm: 330,
      renovation: t("renovated"),
      floor: 3,
      rooms: 5,
      price: "365,000,000",
      owner: t("owner_name"),
      deal_type: t("all_deal_type"),
      note: "",
      isChecked: false,
    },
  ];

  let dataPropertyServices = getpropertyservices();
  
  const images = [
    houseImg,
    houseImg,
    houseImg,
    houseImg,
    houseImg,
    houseImg,
    houseImg,
  ];

  const slides = [];
  for (let i = 0; i < images.length; i += 5) {
    const slideImages = images.slice(i, i + 5);
    while (slideImages.length < 5) {
      slideImages.push(images[slideImages.length % images.length]);
    }
    slides.push(slideImages);
  }

  const getClientData = ({
    clientName,
    type1,
    property_type1,
    location1,
    property_condition1,
  }) => {
    let data = getpropertyservices();
    if (clientName) {
      const query = clientName.toLowerCase();
      data = data.filter(
        (item) =>
          item.property_address.toLowerCase().includes(query) ||
          item.owner.toLowerCase().includes(query)
      );
    }
    if (type1) {data = data.filter((item) => item.sale.toLowerCase() === type1.toLowerCase())};

    if (property_type1) {
      console.log("datatadtaat", data);
      data = data.filter(
        (item) =>
          item.property_type?.toLowerCase() === property_type1.toLowerCase()
      );
      console.log(
        "BeforeFilter",
        data.map((d) => d.property_type)
      );
      console.log("Selected property_type1:", property_type1);
    }
    if (location1) {
      const query = location1.toLowerCase();
      data = data.filter((item) =>
        item.property_address.toLowerCase().includes(query)
      );
    }
    if (property_condition1) {
      const query = property_condition1.toLowerCase();
      data = data.filter((item) =>
        item.renovation?.toLowerCase().includes(query)
      );
    }
    return data;
  };

   const toggleRow = (index) => {
        setExpandedRows((prev) =>
          prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
        );
      };
  
      
    
      const handleCheckboxChange = (index) => {
        setSelectedRows((prevSelectedRows) =>
          prevSelectedRows.includes(index)
            ? prevSelectedRows.filter((i) => i !== index) // Uncheck
            : [...prevSelectedRows, index] // Check
        );
      };

  return {
    dataPropertyServices,
    getpropertyservices,
    getClientData,
    slides,
    setLocation,
    location,
    setClientNameInput,
    sel,
    setSel,
    toggleRow,
    handleCheckboxChange,
    clientNameInput,
    setFilteredClients,
    filteredClients,
    propertytype,
    setPropertytype,
    setProcondition,
    procondition,
    selectAll, setSelectAll, 
    expandedRows, setExpandedRows, 
    selectedRows, setSelectedRows,
  };
};
