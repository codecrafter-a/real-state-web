import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TbMailForward } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";

const tableData = [
    {
        status: "הופק",
        commission: " 20%",
        clients: "שירי נקבלי, רומי שפן",
        agreementType: "השכרה",
        date: "06.06.24",
        agreementName: 'פלורנטין 7 ת"א ',
        actionType: "default",
        icon: <FaWhatsapp />
    },
    {
        status: "נשלח",
        commission: " 20%",
        clients: "שירי נקבלי, רומי שפן",
        agreementType: "השכרה",
        date: "06.06.24",
        agreementName: 'פלורנטין 7 ת"א ',
        actionType: "default",
        icon: <FaWhatsapp />
    },
    {
        status: "נצפה",
        commission: " 20%",
        clients: "שירי נקבלי, רומי שפן",
        agreementType: "השכרה",
        date: "06.06.24",
        agreementName: 'פלורנטין 7 ת"א ',
        actionType: "default",
        icon: <FaWhatsapp />
    },
    {
        status: "נחתם",
        commission: " 20%",
        clients: "שירי נקבלי, רומי שפן",
        agreementType: "השכרה",
        date: "06.06.24",
        agreementName: 'פלורנטין 7 ת"א ',
        actionType: "signed",
    },
    {
        status: "נחתם ויצא לפועל",
        commission: " 20%",
        clients: "שירי נקבלי, רומי שפן",
        agreementType: "השכרה",
        date: "06.06.24",
        agreementName: 'פלורנטין 7 ת"א ',
        actionType: "executed",
    },
    {
        status: "נחתם ונרשם",
        commission: " 20%",
        clients: "שירי נקבלי, רומי שפן",
        agreementType: "השכרה",
        date: "06.06.24",
        agreementName: 'פלורנטין 7 ת"א ',
        actionType: "registered",
    },
];

const ActionButtons = ({ type, icon }) => {
    if (type === "default") {
        return (
            <div className="flex overflow-hidden gap-4 justify-center items-center self-stretch px-3 py-2.5 my-auto text-base bg-white min-w-[361px] text-neutral-700">
                <div className="self-stretch my-auto leading-none whitespace-nowrap">
                    עוד
                </div>
                <div className="gap-1.5 self-stretch my-auto text-black w-[102px]">
                    העתקת קישורלחתימה
                </div>
                <div className="flex gap-1 items-center whitespace-nowrap">
                    <div className="self-stretch my-auto">שיתוף</div>
                    {icon}
                </div>
                <div className="my-auto leading-4 d-flex gap-1 align-items-center w-[76px]">
                    <span className="text-end">שליחה חוזרת</span>
                    <span><TbMailForward /></span>
                </div>
            </div>
        );
    }

    if (type === "signed") {
        return (
            <div className="flex overflow-hidden gap-4 justify-center items-center self-stretch px-3 py-2.5 my-auto text-base bg-white min-w-[361px] text-black w-[361px]">
                <div className="gap-1 self-stretch my-auto leading-none whitespace-nowrap">
                    מחיקה
                </div>
                <div className="gap-1 self-stretch my-auto">סגירתעסקה</div>
                <div className="gap-1 self-stretch my-auto">שליחת העתקללקוחות</div>
                <div className="gap-1 self-stretch my-auto">פתיחתההסכם</div>
            </div>
        );
    }

    if (type === "executed") {
        return (
            <div className="flex overflow-hidden gap-7 items-center self-stretch px-3 py-2.5 my-auto text-base leading-4 bg-white min-w-60 text-neutral-700 w-[361px]">
                <div className="gap-1 self-stretch my-auto leading-none whitespace-nowrap">
                    מחיקה
                </div>
                <div className="gap-1 self-stretch my-auto">רישום במקרקעיון</div>
                <div className="gap-1 self-stretch my-auto">שליחת העתקללקוחות</div>
            </div>
        );
    }

    return (
        <div className="flex overflow-hidden gap-7 items-center self-stretch px-3 py-2.5 my-auto text-base bg-white min-w-60 text-black w-[361px]">
            <div className="gap-1 self-stretch my-auto leading-none whitespace-nowrap">
                מחיקה
            </div>
            <div className="gap-1 self-stretch my-auto leading-4">
                שליחת העתקללקוחות
            </div>
        </div>
    );
};

const StatusBadge = ({ status }) => {
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
            {status}
        </div>
    );
};

const TableRow = ({ data }) => {
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
            <ActionButtons type={actionType} icon={icon} />
            <StatusBadge status={status} />
            <div className="self-stretch my-auto text-center w-[71px]">
                {commission}
            </div>
            <div className="flex-1 shrink self-stretch text-nowrap my-auto basis-8">
                {clients}
            </div>
            <div className="gap-1 self-stretch my-auto whitespace-nowrap w-[55px]">
                {agreementType}
            </div>
            <div className="self-stretch my-auto">{date}</div>
            <div className="flex-1 shrink gap-1 self-stretch my-auto basis-8 flex justify-end">
                {agreementName}
            </div>
        </article>
    );
};

const AgreementsTable = () => {
    return (
        <div>

            <header className="d-flex gap-6 align-items-start px-4 w-100 text-secondary fw-semibold">
                <div className="min-h-6 min-w-[361px] w-100 flex justify-center">פעולות</div>
                <div className="min-h-6 w-100 flex justify-center">סטטוס</div>
                <div className="min-h-6 w-100 flex justify-end">גובה העמלה</div>
                <div className="min-h-6 w-100 flex justify-end">שמות הלקוחות</div>
                <div className="min-h-6 w-100 flex justify-end">סוג הסכם</div>
                <div className="min-h-6 w-100 flex justify-end">תאריך</div>
                <div className="min-h-6 w-100 flex justify-end">שם ההסכם</div>
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
