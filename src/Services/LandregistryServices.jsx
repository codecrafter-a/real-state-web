import { useTranslation } from "react-i18next";
export const useLandregistryServices = () => {
    const { t } = useTranslation();
    const getRegistryData = () => [
        {
          propertyName: t("registry.propertyName"),        
          agreementDate: "06.06.24",
          agreementType: t("registry.rental"),              
          clients: t("registry.clients"),                   
          phoneNumber: "054-4692650",
          actionLabel: t("registry.download")              
        },
        {
          propertyName: t("registry.propertyName"),
          agreementDate: "06.06.24",
          agreementType: t("registry.rental"),
          clients: t("registry.clients"),
          phoneNumber: "054-4692650",
          actionLabel: t("registry.download")
        },
        {
          propertyName: t("registry.propertyName"),
          agreementDate: "06.06.24",
          agreementType: t("registry.rental"),
          clients: t("registry.clients"),
          phoneNumber: "054-4692650",
          actionLabel: t("registry.download")
        }
      ];

    return { getRegistryData };
  
}


