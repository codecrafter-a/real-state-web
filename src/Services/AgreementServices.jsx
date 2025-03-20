import { FaWhatsapp } from "react-icons/fa";

export const useAgreementServices = () => {

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

  return { getAgreementData };
};