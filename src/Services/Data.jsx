import { useTranslation } from "react-i18next";
import home_work from '../assets/images/home_work.svg';
import user from '../assets/images/user_icon.svg';
import garage_door from '../assets/images/garage_door.svg';
import key_vertical from '../assets/images/key_vertical.svg';
import { useState } from "react";
export const useDataService = () => {
    const { t } = useTranslation();
      const COLORS = ["#166D64", "#3AC2A3"];
      const [pieData, setPieData] = useState([]);
      const [Agreement, setAgreement] = useState([]);
      const [UserData, setUserData] = useState([]);
      const [colorData, setColorData] = useState([]);
    const getData = () => {
        return [
            { name: t("data_gra_subTitle1"), value: 15 },
            { name: t("data_gra_subTitle2"), value: 8 },
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

    const handlegetData = () => {
        console.log("Alert thsi data page");
    }
    const getUserData = () => {
        return [
            { title: "123", sub_title: t("data_homework"), name: home_work },
            { title: "356", sub_title: t("data_user"), name: user },
            { title: "150", sub_title: t("data_garage"), name: garage_door },
            { title: "175", sub_title: t("data_key"), name: key_vertical },
        ];
    };

    return {
        getData,
        getAgreementData,
        getAgreementColors,
        getUserData,
        COLORS,
        pieData, setPieData,
        Agreement, setAgreement,
        UserData, setUserData,
        colorData, setColorData,
        handlegetData
    };
};
