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
  // const data = [
  //   {
  //     id: 1,
  //     accountNumber: '224567',
  //     date: '06.06.24',
  //     clientNames: 'client_1',
  //     subject: 'service_payment',
  //     amount: '₪ 3348',
  //   },
  //   {
  //     id: 2,
  //     accountNumber: '224567',
  //     date: '06.06.24',
  //     clientNames: 'client_2',
  //     subject: 'service_payment',
  //     amount: '₪ 3348',
  //   },
  //   {
  //     id: 3,
  //     accountNumber: '224567',
  //     date: '06.06.24',
  //     clientNames: 'client_1',
  //     subject: 'service_payment',
  //     amount: '₪ 3348',
  //   },
  //   {
  //     id: 4,
  //     accountNumber: '224567',
  //     date: '06.06.24',
  //     clientNames: 'client_2',
  //     subject: 'service_payment',
  //     amount: '₪ 3348',
  //   },
  // ];

  useEffect(() => {
    const data = getInvoiceService();
    setInvoiceData(data)
  }, [])



  return (
    <div className="custom-table-container">
      <Table responsive hover className="custom-table d-md-table  d-none">
        <thead className="border-0">
          <tr>
            <th>
              <div className="d-flex align-items-center">
                <Form.Check type="checkbox" className="px-2" />
                {t("invoice_number")}
              </div>
            </th>
            <th>{t("date")}</th>
            <th>{t("client_names")}</th>
            <th>{t("subject")}</th>
            <th>{t("amount")}</th>
            <th>{t("actions")}</th>
          </tr>
        </thead>
        <tbody className="border border-1 rounded-3 border-secondary ">
          {invoiceData.map((row) => (
            <tr key={row.id}>
              <td className="border">
                <div className="d-flex align-items-center">
                  <Form.Check type="checkbox" className="px-2" />
                  {row.accountNumber}
                </div>
              </td>
              <td className="border">{row.date}</td>
              <td className="border">{t(row.clientNames)}</td>
              <td className="border">{t(row.subject)}</td>
              <td className="border">{row.amount}</td>
              <td className="actions">
                <Button variant="link" className="icon-btn">
                  <FaEye /> {t("view")}
                </Button>
                <Button variant="link" className="icon-btn">
                  <MdEmail /> {t("send_to_client")}
                </Button>
                <Button variant="link" className="icon-btn">
                  <FaDownload /> {t("download")}
                </Button>
                <Button variant="link" className="icon-btn">
                  <BsWhatsapp /> {t("share")}
                </Button>
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
              <div className="d-flex justify-content-cener gap-3 py-3 w-100">
                <Button className="btn btn-light text-dark p-0">
                  <FaEye /> {t("view")}
                </Button>
                <Button className="btn btn-light text-dark p-0">
                  <MdEmail /> {t("send_to_client")}
                </Button>
                <Button className="btn btn-light bg-opacity-10 text-dark p-0">
                  <FaDownload /> {t("download")}
                </Button>
                <Button className="btn btn-light text-dark p-0">
                  <BsWhatsapp /> {t("share")}
                </Button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default InvoicesTable;
