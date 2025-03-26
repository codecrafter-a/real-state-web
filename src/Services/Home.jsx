import { useTranslation } from "react-i18next";
import indication from "../assets/images/Indication-Arrow.png";

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

  return { getHomes };
};
