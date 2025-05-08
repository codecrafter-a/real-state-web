import { useState } from "react";

export const usePropertyOwnerSwervices = () => {
  const [isView, setIsView] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [propertySection, setPropertySection] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [genrateSuccess, setGenrateSuccess] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = (e) => {
    setIsChecked(e.target.checked);
  }
  const handlePropertysection = () => {
    setPropertySection(true);
  };

  const handlecloseProperty = () => {
    setPropertySection(false);
  };

  const handleSearchClick = () => {
    setShowDetails(true);
  };

  const handleSearchClose = () => {
    setShowDetails(false);
  };
  const handleView = () => {
    setIsView(true);
  };
  const handleSentSuccess = () => {
    setShowSuccess(false);
    setSentSuccess(true);
  };
  const handleIsShow = () => {
    setIsView(false);
    setShowSuccess(true);
  };

  return {
    isView,
    setIsView,
    showSuccess,
    setShowSuccess,
    sentSuccess,
    setSentSuccess,
    showDetails,
    setShowDetails,
    propertySection,
    setPropertySection,
    selectedOption,
    setSelectedOption,
    selectedDate,
    setSelectedDate,
    genrateSuccess,
    setGenrateSuccess,
    handlePropertysection,
    handlecloseProperty,
    handleSearchClick,
    handleSearchClose,
    handleView,
    handleSentSuccess,
    handleIsShow,handleClick,isChecked
  };
};
