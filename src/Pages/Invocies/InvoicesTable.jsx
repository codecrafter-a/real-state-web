import React from 'react'
import { Table, Form, Button} from 'react-bootstrap';
import { FaEye, FaDownload } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { useTranslation } from 'react-i18next';


const InvoicesTable = ({data}) => {
  const { t } = useTranslation();
  

  return (
    <div className="custom-table-container">
      <Table hover className="custom-table d-md-table  d-none">
        <thead className="border-0">
          <tr className="text-center">
            <th className="p-2">
              <div className="d-flex align-items-center justify-content-center">
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
        <tbody className="border  rounded-2 border-secondary">
          {data.map((row) => (
            <tr key={row.id} className="border text-center">
              <td className="border p-2">
                <div className="d-flex align-items-center justify-content-center">
                  <Form.Check type="checkbox" className="mx-2" />
                  {row.accountNumber}
                </div>
              </td>
              <td className=" p-2 fs-17 lh-1 fw-normal">{row.date}</td>
              <td className=" p-2 fs-17 lh-1 fw-normal">{t(row.clientNames)}</td>
              <td className="  p-2 fs-14 lh-1 fw-normal">{t(row.subject)}</td>
              <td className=" p-2 fs-14 lh-1 fw-normal">{row.amount}</td>
              <td className="actions border">
                <Button variant="link" className="icon-btn "><FaEye /> <span className=' fs-15 lh-1 fw-semibold'>{t("view")}</span></Button>
                <Button variant="link" className="icon-btn"><MdEmail /> <span className=' fs-15 lh-1 fw-semibold'>{t("send_to_client")}</span></Button>
                <Button variant="link" className="icon-btn"><FaDownload /> <span className=' fs-15 lh-1 fw-semibold'>{t("download")}</span></Button>
                <Button variant="link" className="icon-btn"><BsWhatsapp /> <span className=' fs-15 lh-1 fw-semibold'>{t("share")}</span></Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default InvoicesTable;
