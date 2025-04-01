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
          <tr className="text-center my-2">
            <th className="p-2">
              <div className="d-flex align-items-center justify-content-center">
                <Form.Check type="checkbox" className="me-2" />
                {t("invoice_number")}
              </div>
            </th>
            <th className="p-2">{t("date")}</th>
            <th className="p-2">{t("client_names")}</th>
            <th className="p-2">{t("subject")}</th>
            <th className="p-2">{t("amount")}</th>
            <th className="p-2">{t("actions")}</th>
          </tr>
        </thead>
        <tbody className="border border-1 rounded-3 border-secondary">
          {data.map((row) => (
            <tr key={row.id} className="text-center">
              <td className="border p-2">
                <div className="d-flex align-items-center justify-content-center">
                  <Form.Check type="checkbox" className="me-2" />
                  {row.accountNumber}
                </div>
              </td>
              <td className="border p-2">{row.date}</td>
              <td className="border p-2">{t(row.clientNames)}</td>
              <td className="border p-2">{t(row.subject)}</td>
              <td className="border p-2">{row.amount}</td>
              <td className="actions border">
                <Button variant="link" className="icon-btn"><FaEye /> {t("view")}</Button>
                <Button variant="link" className="icon-btn"><MdEmail /> {t("send_to_client")}</Button>
                <Button variant="link" className="icon-btn"><FaDownload /> {t("download")}</Button>
                <Button variant="link" className="icon-btn"><BsWhatsapp /> {t("share")} </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default InvoicesTable;
