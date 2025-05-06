import { useTranslation } from "react-i18next";
import { useState } from "react";
export const useLandregistryServices = () => {
    const { t } = useTranslation();
    const [clientName, setClientName] = useState("");
      const [fromDate, setFromDate] = useState("");
      const [untilDate, setUntilDate] = useState("");
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
      const getFilteredRegistryData = ({ clientName, fromDate, untilDate }) => {
        let data = getRegistryData();
    
        if (clientName) {
          const searchQuery = clientName.toLowerCase();
          data = data.filter((item) =>
            item.clients.toLowerCase().includes(searchQuery)
          );
        }
    
        if (fromDate && untilDate) {
          const parseDate = (dateStr) => {
            const [day, month, year] = dateStr.split(".");
            return new Date(`20${year}`, month - 1, day);
          };
    
          console.log("fromdata", fromDate, untilDate)
          const from = new Date(fromDate);
          const until = new Date(untilDate);
    
          data = data.filter((item) => {
            const itemDate = parseDate(item.agreementDate);
            return itemDate >= from && itemDate <= until;
          });
        }
    console.log(data, "datadatadata");
    
        return data;
      };
      return {
        getRegistryData,          
        getFilteredRegistryData,
        clientName, setClientName,
        fromDate, setFromDate,
        untilDate, setUntilDate
      };
}


