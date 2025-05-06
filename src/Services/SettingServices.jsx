import { useState } from "react";
export const useSettingServices = () => {
    const [isView, setIsView] = useState(false);
    const [ownerData, setOwnerData] = useState(false);
    const handleOwnerData = () => {
        setOwnerData(!ownerData);
        setIsView(false);
    };
    const [settings, setSettings] = useState({
        lable1: false,
        lable2: false,
        lable3: false,
        showCommissionAmounts: false,
        usertype_1: false,
        usertype_2: true,
        usertype_3: false,
        receivePerformanceReports: true,
        notifyOnPropertyMatch: true,
        sendMessageToInterestedClients: true,
        firstReminderOnceAMonth: true,
        firstReminderEveryTwoWeeks: false,
        secondReminderOnceAMonth: false,
        secondReminderEveryTwoWeeks: false,
        sendMessageToAllClients: true,
        exclusivePropertyExpiry: true,
        reminderOnceAMonth: false,
        reminderEveryTwoWeeks: false,
        interestedClientsNoAgreement: true,
        agreementOnceAMonth: true,
        agreementEveryTwoWeeks: true,
        viaSMS: false,
        viaEmail: false,
        viaWhatsapp: false,
    });
    
    const handleToggleChange = (key) => (e) => {
      setSettings((prev) => ({ ...prev, [key]: e.target.checked }));
    };
    
    const handleRadioChange = (groupKeys, selectedKey) => () => {
        const updatedGroup = groupKeys.reduce((acc, key) => {
          acc[key] = key === selectedKey;
          return acc;
        }, {});
        setSettings((prev) => ({ ...prev, ...updatedGroup }));
    };

    return { isView, setIsView, ownerData, setOwnerData, handleOwnerData, settings, setSettings, handleToggleChange, handleRadioChange}
}