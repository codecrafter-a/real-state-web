import { useTranslation } from "react-i18next";
import indication from "../assets/images/Indication-Arrow.png";
import home_work from '../assets/images/home_work.svg';
import user from '../assets/images/user_icon.svg';
import garage_door from '../assets/images/garage_door.svg';
import key_vertical from '../assets/images/key_vertical.svg';

export const useHomeService = () => {
  const { t } = useTranslation();

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


  return { getHomes, getUserData, getAgreementColors, getAgreementData };
};
