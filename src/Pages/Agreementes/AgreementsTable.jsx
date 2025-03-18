import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TbMailForward } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { MdOutlineDeleteForever } from "react-icons/md";
const tableData = [
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
    },
];

const AgreementsTable = ({handleOpen}) => {
    console.log(handleOpen,"handleOpenhandleOpenhandleOpenhandleOpen");
    
    const { t } = useTranslation(); 
    return (
        <div className="mt-4">
            <table className="table text-center">
                <thead>
                    <tr>
                        <th style={{ color: "#686868", fontWeight: "600" }}>{t("home_tab_h7")}</th>
                        <th style={{ color: "#686868", fontWeight: "600" }}>{t("home_tab_h6")}</th>
                        <th style={{ color: "#686868", fontWeight: "600" }}>{t("home_tab_h5")}</th>
                        <th style={{ color: "#686868", fontWeight: "600" }}>{t("home_tab_h4")}</th>
                        <th style={{ color: "#686868", fontWeight: "600" }}>{t("home_tab_h3")}</th>
                        <th style={{ color: "#686868", fontWeight: "600" }}>{t("home_tab_h2")}</th>
                        <th style={{ color: "#686868", fontWeight: "600" }}>{t("home_tab_h1")}</th>
                    </tr>
                </thead>
                <tbody className="border">
                    {tableData.map((row, index) => (
                        <TableRow key={index} data={row} handleOpen={handleOpen} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};
const ActionButtons = ({ type, icon, onDelete }) => {
    console.log(onDelete, "onDeleteonDeleteonDelete");
    
    const { t } = useTranslation();
    return (
        <div className="d-flex align-items-center gap-3 p-2 bg-white">
            {type === "default" && (
                <>
                    <div className="d-flex align-items-center gap-1 cursor-pointer">
                        <TbMailForward />
                        <span>{t('home_tab_r1_h1_l4')}</span>

                    </div>
                    <div className="d-flex align-items-center gap-1 cursor-pointer">
                        {icon}
                        <span>{t("home_tab_r1_h1_l3")}</span>
                    </div>
                    <button className="d-flex align-items-center border-0 bg-transparent gap-1 cursor-pointer" onClick={onDelete}>
                        <MdOutlineDeleteForever/>
                        <span>{t('age_delet')}</span>
                    </button>
                    <span>{t("home_tab_r1_h1_l2")}</span>
                    <span>{t("home_tab_r1_h1_l1")}</span>
                </>
            )}
        </div>
    );
};


const StatusBadge = ({ status }) => {
    const { t, i18n } = useTranslation();

    const statusMap = {
        "Generated": "הופק",
        "Sent": "נשלח",
        "Viewed": "נצפה",
        "Signed": "נחתם",
        "Signed and Executed": "נחתם ויצא לפועל",
        "Signed and Registered": "נחתם ונרשם",
    };

    const translatedStatus = t(status);

    const statusKey = statusMap[translatedStatus] || translatedStatus;

    const statusStyles = {
        הופק: { backgroundColor: "#f3f4f6", color: "#6b7280" },
        נשלח: { backgroundColor: "#fef3c7", color: "#d97706" },
        נצפה: { backgroundColor: "#fee2e2", color: "#dc2626" },
        נחתם: { backgroundColor: "#ecfdf5", color: "#10b981" },
        "נחתם ויצא לפועל": { backgroundColor: "#ecfdf5", color: "#10b981" },
        "נחתם ונרשם": { backgroundColor: "#ecfdf5", color: "#10b981" },
    };

    return (
        <span
            className="px-4 my-auto text-center fw-semibold rounded-pill d-flex align-items-center justify-content-center"
            style={{ ...statusStyles[statusKey], minHeight: "28px", width: "123px" }}
        >
            {translatedStatus}
        </span>
    );
};


const TableRow = ({ data,  handleOpen }) => {
    console.log(handleOpen, "onDeleteonDelete");
    
    const { t } = useTranslation();
    const { status, commission, clients, agreementType, date, agreementName, actionType, icon } = data;
    return (
        <tr>
            <td className="d-table-cell align-middle py-3">{t(agreementName)}</td>
            <td className="d-table-cell align-middle py-3">{date}</td>
            <td className="d-table-cell align-middle py-3">{t(agreementType)}</td>
            <td className="d-table-cell align-middle py-3">{t(clients)}</td>
            <td className="d-table-cell align-middle py-3">{commission}</td>    
            <td className="d-table-cell align-middle py-3"><StatusBadge status={t(status)} /></td>
            <td className="d-table-cell align-middle py-3"><ActionButtons type={t(actionType)} icon={icon} onDelete={handleOpen} /></td>
        </tr>
    );
};



export default AgreementsTable;
