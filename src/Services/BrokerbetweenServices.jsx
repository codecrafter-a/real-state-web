import React from "react";
import { useState } from "react";
const useBrokerbetweenServices = () => {
  const [isView, setIsView] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [propertySection, setPropertySection] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [genrateSuccess, setGenrateSuccess] = useState(false);

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
    handlecloseProperty,
    handleSearchClick,
    handleSearchClose,
    handleIsShow,
    handleSentSuccess,
    handlePropertysection,
    handleView,
    selectedOption,
    setSelectedOption,
    genrateSuccess,
    setGenrateSuccess,
    setIsView,
    showSuccess,
    setShowSuccess,
    showDetails,
    setShowDetails,
    sentSuccess,
    setSentSuccess,
    propertySection,
    setPropertySection,
  };
};

export default useBrokerbetweenServices;
