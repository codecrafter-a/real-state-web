import { useTranslation } from "react-i18next";
import indication from "../assets/images/Indication-Arrow.png";
import home_work from '../assets/images/home_work.svg';
import user from '../assets/images/user_icon.svg';
import garage_door from '../assets/images/garage_door.svg';
import key_vertical from '../assets/images/key_vertical.svg';
import { useState } from "react";

export const useHomeService = () => {
  const { t } = useTranslation();
   const [isOpen, setIsOpen] = useState(false);
   const [homedatapage, sethomedatapage] = useState([]);
     const [userdata, setUserdata] = useState([]);
     const [agrreedata, setAgreedata] = useState([]);
     const [agreecolor, setAgreecolor] = useState([]);
  const getHomes = () => {
    return [
      {
        amount: "₪10,000",
        text: t("home_accro_in1"),
        icon: indication,
      },
      {
        amount: "₪15,000",
        text: t("home_accro_in2"),
        icon: indication,
      },
      {
        amount: "₪20,000",
        text: t("home_accro_in3"),
        icon: indication,
      },
      {
        amount: "₪8,000",
        text: t("home_accro_in4"),
        icon: indication,
      },
      {
        amount: "₪12,500",
        text: t("home_accro_in5"),
        icon: indication,
      },
      {
        amount: "₪18,000",
        text: t("home_accro_in6"),
        icon: indication,
      },
    ];
  };

  const getUserData = () => {
    return [
        { title: "123", sub_title: t("data_homework"), name: home_work },
        { title: "356", sub_title: t("data_user"), name: user },
        { title: "150", sub_title: t("data_garage"), name: garage_door },
        { title: "175", sub_title: t("data_key"), name: key_vertical },
    ];
};

 const barChartdata = [
    {
      name: t("Haim"),
      value: 37000,
      green: 15000,
      gray: 12000,
      red: 7000,
      orange: 3000,
    },
    {
      name: t("Shiri"),
      value: 37000,
      green: 15000,
      gray: 12000,
      red: 7000,
      orange: 3000,
    },
    {
      name: t("Liran"),
      value: 36000,
      green: 14000,
      gray: 11000,
      red: 7000,
      orange: 4000,
    },
    {
      name: t("Israel"),
      value: 35000,
      green: 13000,
      gray: 11000,
      red: 7000,
      orange: 4000,
    },
    {
      name: t("Ori"),
      value: 32000,
      green: 12000,
      gray: 10000,
      red: 6000,
      orange: 4000,
    },
    {
      name: t("Rami"),
      value: 15000,
      green: 6000,
      gray: 5000,
      red: 3000,
      orange: 2000,
    },
    {
      name: t("Moshe"),
      value: 15000,
      green: 6000,
      gray: 5000,
      red: 3000,
      orange: 2000,
    },
  ];

const getAgreementData = () => {
  return [
      { name: t("data_gra_litegrren"), value: 50 },
      { name: t("data_gra_green"), value: 30 },
      { name: t("data_gra_grey"), value: 20 },
      { name: t("data_gra_yellow"), value: 15 },
      { name: t("data_gra_red"), value: 10 },
  ];
};

const getAgreementColors = () => {
  return ["#166D64", "#3AC2A3", "#CCCCCC", "#FF9900", "#FF3743"];
};


  return { getHomes, getUserData, getAgreementColors, agreecolor, setAgreecolor, homedatapage, sethomedatapage, agrreedata, setAgreedata, userdata, setUserdata, getAgreementData, barChartdata, isOpen, setIsOpen };
};
