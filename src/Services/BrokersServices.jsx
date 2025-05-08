import { useState } from "react";

export const useBrokerServices = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [isView, setIsView] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [propertySection, setPropertySection] = useState(false);
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

  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleShow = () => {
    setIsShow(true);
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
    isOpen,
    setIsOpen,
    isShow,
    setIsShow,
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
    genrateSuccess,
    setGenrateSuccess,
    handlePropertysection,
    handlecloseProperty,
    handleSearchClick,
    handleSearchClose,
    handleOpen,
    handleShow,
    handleView,
    handleSentSuccess,
    handleIsShow,handleClick,isChecked
  };
};
