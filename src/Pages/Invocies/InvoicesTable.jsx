import React from 'react'
import { Table, Form } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';
import { TbMailForward } from "react-icons/tb";
import { useTranslation } from 'react-i18next';
import { IoEyeOutline } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";

const InvoicesTable = ({data}) => {
  const { t } = useTranslation();

  return (
    <div className="custom-table-container">
      <Table hover className="table d-md-table  d-none">
        <thead>
          <tr>
            <th className="p-2">
              <div className="d-flex align-items-center">
                <Form.Check type="checkbox" className="mx-2" />
                <span className='fs-15 fw-semibold lh-sm '>{t("invoice_number")}</span>
              </div>
            </th>
            <th className="p-2 fs-15 fw-semibold lh-sm">{t("date")}</th>
            <th className="p-2 fs-15 fw-semibold lh-sm">{t("client_names")}</th>
            <th className="p-2 fs-15 fw-semibold lh-sm">{t("subject")}</th>
            <th className="p-2 fs-15 fw-semibold lh-sm">{t("amount")}</th>
            <th className="p-2 fs-15 fw-semibold lh-sm">{t("actions")}</th>
          </tr>
        </thead>
        <tbody className="border">
          {data.map((row) => (
            <tr key={row.id}>
              <td className="d-table-cell align-middle py-4">
                <div className="d-flex align-items-center">
                  <Form.Check type="checkbox" className="mx-2" />
                  {row.accountNumber}
                </div>
              </td>
              <td className="d-table-cell align-middle py-4 fs-17 lh-1 fw-normal">{row.date}</td>
              <td className="d-table-cell align-middle py-4 fs-17 lh-1 fw-normal">{t(row.clientNames)}</td>
              <td className="d-table-cell align-middle  py-4 fs-14 lh-1 fw-normal">{t(row.subject)}</td>
              <td className="d-table-cell align-middle py-4 fs-14 lh-1 fw-normal">{row.amount}</td>
              <td className="d-table-cell align-middle">
                <div className="d-flex align-items-center gap-4 p-2">
                  <div className='flex gap-1 items-center'><IoEyeOutline /> <span className=' fs-15 lh-1'>{t("view")}</span></div>
                  <div className='flex gap-1 items-center'><TbMailForward /> <span className=' fs-15 lh-1'>{t("send_to_client")}</span></div>
                  <div className='flex gap-1 items-center'><LuDownload /> <span className=' fs-15 lh-1'>{t("download")}</span></div>
                  <div className='flex gap-1 items-center'><FaWhatsapp /> <span className=' fs-15 lh-1'>{t("share")}</span></div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default InvoicesTable;
