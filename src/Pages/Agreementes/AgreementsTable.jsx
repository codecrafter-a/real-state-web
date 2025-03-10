import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TbMailForward } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
const tableData = [
    {
        status: "home_tab_r1_h2",
        commission: " 20%",
        clients: "home_tab_r1_h4",
        agreementType: "home_tab_r1_h5",
        date: "06.06.24",
        agreementName: 'home_tab_r1_h7',
        actionType: "default",
        icon: <FaWhatsapp />
    },
    {
        status: "home_tab_r2_h2",
        commission: " 20%",
        clients: "home_tab_r1_h4",
        agreementType: "home_tab_r1_h5",
        date: "06.06.24",
        agreementName: 'home_tab_r1_h7',
        actionType: "default",
        icon: <FaWhatsapp />
    },
    {
        status: "home_tab_r3_h2",
        commission: " 20%",
        clients: "home_tab_r1_h4",
        agreementType: "home_tab_r1_h5",
        date: "06.06.24",
        agreementName: 'home_tab_r1_h7',
        actionType: "default",
        icon: <FaWhatsapp />
    },
    {
        status: "home_tab_r4_h2",
        commission: " 20%",
        clients: "home_tab_r1_h4",
        agreementType: "home_tab_r1_h5",
        date: "06.06.24",
        agreementName: 'home_tab_r1_h7',
        actionType: "signed",
    },
    {
        status: "home_tab_r5_h2",
        commission: " 20%",
        clients: "home_tab_r1_h4",
        agreementType: "home_tab_r1_h5",
        date: "06.06.24",
        agreementName: 'home_tab_r1_h7',
        actionType: "executed",
    },
    {
        status: "home_tab_r6_h2",
        commission: " 20%",
        clients: "home_tab_r1_h4",
        agreementType: "home_tab_r1_h5",
        date: "06.06.24",
        agreementName: 'home_tab_r1_h7',
        actionType: "registered",
    },
];

const ActionButtons = ({ type, icon }) => {
    const { t } = useTranslation();
    if (type === "default") {
        return (
            <div className="flex overflow-hidden gap-4 justify-center items-center self-stretch px-3 py-2.5 my-auto text-base bg-white min-w-[361px] text-neutral-700">
                <div className="my-auto leading-4 d-flex gap-1 align-items-center w-[76px]">
                    <span className="text-end">{t('home_tab_r1_h1_l4')}</span>
                    <span><TbMailForward /></span>
                </div>
                <div className="flex gap-1 items-center whitespace-nowrap">
                    <div className="self-stretch my-auto">{t("home_tab_r1_h1_l3")}</div>
                    {icon}
                </div>
                <div className="gap-1.5 self-stretch my-auto text-black w-[102px]">
                    {t("home_tab_r1_h1_l2")}
                </div>
                <div className="self-stretch my-auto leading-none whitespace-nowrap">
                    {t("home_tab_r1_h1_l1")}
                </div>
            </div>
        );
    }

    if (type === "signed") {
        return (
            <div className="flex overflow-hidden gap-4 justify-center items-center self-stretch px-3 py-2.5 my-auto text-base bg-white min-w-[361px] text-black w-[361px]">
                <div className="gap-1 self-stretch my-auto leading-none whitespace-nowrap">
                    {t("home_tab_r1_h1_l1")}
                </div>
                <div className="gap-1 self-stretch my-auto">{t("home_tab_r2_h1_l2")}</div>
                <div className="gap-1 self-stretch my-auto"> {t("home_tab_r2_h1_l3")}</div>
                <div className="gap-1 self-stretch my-auto">{t("home_tab_r2_h1_l4")}</div>
            </div>
        );
    }

    if (type === "executed") {
        return (
            <div className="flex overflow-hidden gap-7 items-center self-stretch px-3 py-2.5 my-auto text-base leading-4 bg-white min-w-60 text-neutral-700 w-[361px]">
                <div className="gap-1 self-stretch my-auto leading-none whitespace-nowrap">
                    {t("home_tab_r1_h1_l1")}
                </div>
                <div className="gap-1 self-stretch my-auto">{t("home_tab_r5_h2_l2")}</div>
                <div className="gap-1 self-stretch my-auto">{t("home_tab_r5_h3_l3")} </div>
            </div>
        );
    }

    return (
        <div className="flex overflow-hidden gap-7 items-center self-stretch px-3 py-2.5 my-auto text-base bg-white min-w-60 text-black w-[361px]">
            <div className="gap-1 self-stretch my-auto leading-none whitespace-nowrap">
                {t("home_tab_r1_h1_l1")}
            </div>
            <div className="gap-1 self-stretch my-auto leading-4">
                {t("home_tab_r6_h2_l2")}
            </div>
        </div>
    );
};

const StatusBadge = ({ status }) => {
    const { t } = useTranslation();
    const statusStyles = {
        הופק: "bg-gray-100 text-neutral-500",
        נשלח: "bg-amber-100 text-orange-500",
        נצפה: "bg-red-100 text-red-600",
        נחתם: "bg-emerald-50 text-emerald-500",
        "נחתם ויצא לפועל": "bg-emerald-50 text-emerald-500",
        "נחתם ונרשם": "bg-emerald-50 text-emerald-500",
    };

    return (
        <div
            className={`px-4 my-auto text-sm font-semibold text-center rounded-2xl min-h-7 w-[123px] d-flex align-items-center justify-center ${statusStyles[status]}`}
        >
            {t(status)}
        </div>
    );
};

const TableRow = ({ data }) => {
    const { t } = useTranslation();
    const {
        status,
        commission,
        clients,
        agreementType,
        date,
        agreementName,
        actionType,
        icon,
    } = data;

    return (
        <article className="flex overflow-hidden flex-wrap gap-6 items-center p-4 w-full bg-white border-b border-neutral-200 max-md:pr-5 max-md:max-w-full">
            <div className="flex-1 shrink gap-1 self-stretch my-auto basis-8 flex justify-end">
                {t(agreementName)}
            </div>
            <div className="self-stretch my-auto">{date}</div>
            <div className="gap-1 self-stretch my-auto text-base whitespace-nowrap w-[55px]">
                {t(agreementType)}
            </div>
            <div className="flex-1 shrink self-stretch text-sm text-nowrap my-auto basis-8">
                {t(clients)}
            </div>
            <div className="self-stretch my-auto text-center w-[71px]">
                {commission}
            </div>
            <StatusBadge status={t(status)} />
            <ActionButtons type={t(actionType)} icon={icon} />
        </article>
    );
};

const AgreementsTable = () => {
    const { t } = useTranslation();
    return (
        <div className="w-full">

            <header className="d-flex gap-6 align-items-start px-4 w-100 text-secondary fw-semibold">
                <div className="min-h-6 w-100 flex justify-end">{t("home_tab_h7")}</div>
                <div className="min-h-6 w-100 flex justify-end">{t("home_tab_h6")}</div>
                <div className="min-h-6 w-100 flex justify-end">{t("home_tab_h5")}</div>
                <div className="min-h-6 w-100 flex justify-end">{t("home_tab_h4")}</div>
                <div className="min-h-6 w-100 flex justify-end">{t("home_tab_h3")}</div>
                <div className="min-h-6 w-100 flex justify-center">{t("home_tab_h2")}</div>
                <div className="min-h-6 min-w-[361px] w-100 flex justify-center">{t("home_tab_h1")}</div>
            </header>
            <div className="overflow-hidden mt-3 w-full text-lg rounded-lg border border-solid border-neutral-200 text-zinc-800 max-md:max-w-full">
                {tableData.map((row, index) => (
                    <TableRow key={index} data={row} />
                ))}
            </div>
        </div>
    );
};

export default AgreementsTable;
