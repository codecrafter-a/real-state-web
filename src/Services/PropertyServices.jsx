import { useTranslation } from "react-i18next"

export const usePropertyservices = () => {
    const { t } = useTranslation();
    const getpropertyservices = () => {
        return [ {
            property_type: t("all_property_type"),
            property_status: t("all_property_status"),
            area_sqm: 330,
            floor: 3,
            rooms: 5,
            property_address: t("all_row_data1"),
            sale: t("sale"),
            price: "365,000,000",
            owner: t("owner_name"),
            deal_type: t("all_deal_type"),
            renovation: t("renovated"),
            note: t("all_exclusive_sale", { date: "22.02.2424" }),
            isChecked: false
          },
          {
            property_type: t("all_property_type"),
            property_status: t("all_property_status"),
            property_address: t("all_row_data1"),
            sale: t("sale"),
            area_sqm: 330,
            floor: 3,
            renovation: t("renovated"),
            rooms: 5,
            price: "365,000,000",
            owner: t("owner_name"),
            deal_type: t("all_deal_type"),
            note: "",
            isChecked: false
          },
          {
            property_type: t("all_property_type"),
            property_status: t("all_property_status"),
            property_address: t("all_row_data1"),
            sale: t("sale"),
            area_sqm: 330,
            renovation: t("renovated"),
            floor: 3,
            rooms: 5,
            price: "365,000,000",
            owner: t("owner_name"),
            deal_type: t("all_deal_type"),
            note: "",
            isChecked: false
          }]
    }

    const getClientData = ({
        clientName,
        type1,
        property_type1,
        location1,
        property_condition1,
        recent_agreement
      }) => {
    
        
        let data = getpropertyservices();
        if (clientName) {
          const query = clientName.toLowerCase();
          data = data.filter(
            (item) =>
              item.property_address.toLowerCase().includes(query) ||
              item.owner.toLowerCase().includes(query)     
          );
        }
    
        if (type1) {
          const query = type1.toLowerCase();
          data = data.filter((item) => item.type.toLowerCase().includes(query));
        }
    
        if (property_type1) {
          console.log("datatadtaat", data);
          data = data.filter(
            (item) => item.property_type?.toLowerCase() === property_type1.toLowerCase()
          );
          console.log("BeforeFilter", data.map(d => d.property_type));
          console.log("Selected property_type1:", property_type1);
        }
         if (location1) {
           const query = location1.toLowerCase();
           data = data.filter((item) =>
             item.property_address.toLowerCase().includes(query)
           );
         }
        // if (recent_agreement) {
        //   const query = recent_agreement.toLowerCase().value;
        //   data = data.filter((item) => item.location?.toLowerCase().includes(query) );
        // }
    
         if (property_condition1) {
           const query = property_condition1.toLowerCase();
           data = data.filter((item) =>
             item.renovation?.toLowerCase().includes(query)
           );
         }
        return data;
      };

    return getpropertyservices;
}

