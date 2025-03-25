import React from "react";
import { Table, Form, Button, Accordion } from "react-bootstrap";
import { FaEye, FaDownload } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useTranslation } from "react-i18next";

const InvoicesTable = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      accountNumber: "224567",
      date: "06.06.24",
      clientNames: "client_1",
      subject: "service_payment",
      amount: "₪ 3348",
    },
    {
      id: 2,
      accountNumber: "224567",
      date: "06.06.24",
      clientNames: "client_2",
      subject: "service_payment",
      amount: "₪ 3348",
    },
    {
      id: 3,
      accountNumber: "224567",
      date: "06.06.24",
      clientNames: "client_1",
      subject: "service_payment",
      amount: "₪ 3348",
    },
    {
      id: 4,
      accountNumber: "224567",
      date: "06.06.24",
      clientNames: "client_2",
      subject: "service_payment",
      amount: "₪ 3348",
    },
  ];

  return (
    <div className="custom-table-container">
      <Table
        responsive
        bordered
        hover
        className="custom-table d-md-block d-none"
      >
        <thead>
          <tr>
            <th>
              <div className="d-flex align-items-center">
                {" "}
                <Form.Check type="checkbox" className="px-2" />{" "}
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
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>
                <div className="d-flex align-items-center">
                  <Form.Check type="checkbox" className="px-2" />{" "}
                  {row.accountNumber}
                </div>
              </td>
              <td>{row.date}</td>
              <td>{t(row.clientNames)}</td>
              <td>{t(row.subject)}</td>
              <td>{row.amount}</td>
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
        {data.map((row, index) => (
          <Accordion.Item eventKey={index.toString()} key={row.id} className="mb-3 border rounded-1">
            <Accordion.Header>
              <div className="d-flex flex-column justify-content-start w-100">
                <span className="fw-semibold fs-14">{row?.accountNumber} | {row?.date}</span>
                <p className="fw-semibold fs-14">{t('client_names')}: <span className="fw-light">{t(row?.clientNames)}</span></p>
              </div>
            </Accordion.Header>
            <Accordion.Body className="p-2">
              <p><strong>{t('subject')}:</strong> {t(row?.subject || "N/A")}</p>
              <p><strong>{t('amount')}:</strong> {row?.amount || "N/A"}</p>
              <div className="d-flex gap-3">
                <Button className="btn btn-light text-dark p-0">
                  <FaEye /> {t('view')}
                </Button>
                <Button className="btn btn-light text-dark p-0">
                  <MdEmail /> {t('send_to_client')}
                </Button>
                <Button className="btn btn-light bg-opacity-10 text-dark p-0">
                  <FaDownload /> {t('download')}
                </Button>
                <Button className="btn btn-light text-dark p-0">
                  <BsWhatsapp /> {t('share')}
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
