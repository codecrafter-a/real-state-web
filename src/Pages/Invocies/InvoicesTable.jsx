import React, { useEffect, useState } from 'react'
import { Table, Form, Button, Accordion } from 'react-bootstrap';
import { FaEye, FaDownload } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { useInvoiceServices } from '../../Services/InvoicesServices';

const InvoicesTable = () => {
  const { t } = useTranslation();
  const [invoiceData, setInvoiceData] = useState([])
  const { getInvoiceService } = useInvoiceServices()

  useEffect(() => {
    const data = getInvoiceService();
    setInvoiceData(data)
  }, [])

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
          {invoiceData.map((row) => (
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
      <Accordion className="d-block d-md-none">
        {invoiceData.map((row, index) => (
          <Accordion.Item
            eventKey={index.toString()}
            key={row.id}
            className="mb-3 border rounded-1"
          >
            <Accordion.Header>
              <div>
                <span className="fw-semibold fs-14 d-block">
                   {row?.accountNumber} | {row?.date} 
                </span>
                <p className="fw-semibold fs-14 mb-0">
                  {t("client_names")}: <span className="fw-light">{t(row?.clientNames)}</span>
                </p>
              </div>
            </Accordion.Header>
            <Accordion.Body className="p-0">
              <div className="px-3 border-bottom">
                <p className="m-0">
                  <strong>{t("subject")}:</strong> {t(row?.subject || "N/A")}
                </p>
                <p className="m-0">
                  <strong>{t("amount")}:</strong> {row?.amount || "N/A"}
                </p>
              </div>
              <div className="border-top p-2 bg-light">
                <div className="d-flex justify-content-around gap-2 w-100">
                  <Button className="btn btn-light d-flex align-items-center p-1">
                    <FaEye size={16} />
                    <span className="fs-14 fw-normal lh-1">{t("view")}</span>
                  </Button>
                  <Button className="btn btn-light d-flex align-items-center p-1">
                    <MdEmail size={18} />
                    <span className="fs-14 fw-normal lh-1">{t("send_to_client")}</span>
                  </Button>
                  <Button className="btn btn-light d-flex align-items-center p-1">
                    <FaDownload size={16} />
                    <span className="fs-14 fw-normal lh-1">{t("download")}</span>
                  </Button>
                  <Button className="btn btn-light d-flex align-items-center p-1">
                    <BsWhatsapp size={16} />
                    <span className="fs-14 fw-normal lh-1">{t("share")}</span>
                  </Button>
                </div>
              </div>
          </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default InvoicesTable;
