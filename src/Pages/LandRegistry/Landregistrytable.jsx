import React from 'react';
import { Table } from 'react-bootstrap';
import { LuDownload } from 'react-icons/lu';
import '../Invocies/invocies.css'
import { useTranslation } from "react-i18next";
import key from "../../assets/images/key_vertical.svg";
const LandregistryTable = ({ data }) => {
     const { t } = useTranslation();
 
    
  return (
    <div className="custom-table-container" >
      <Table hover className="table d-md-table  d-none">
        <thead className="table-light">
          <tr>
            <th className="p-2 fs-15 fw-semibold lh-sm text-center">{t("registry.property")}</th>
            <th className="p-2 fs-15 fw-semibold lh-sm">{t("registry.date")}</th>
            <th className="p-2 fs-15 fw-semibold lh-sm">{t("registry.type")}</th>
            <th className="p-2 fs-15 fw-semibold lh-sm">{t("registry.clients_label")}</th>
            <th className="p-2 fs-15 fw-semibold lh-sm">{t("registry.phone")}</th>
            <th className="p-2 fs-15 fw-semibold text-center lh-sm">{t("registry.actions")}</th>
          </tr>
        </thead>
        <tbody className='border'>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="d-table-cell align-middle py-4  fs-15 d-flex justify-content-center align-items-center gap-1">
                <img src={key } alt="vertical key"/>
                {row.propertyName}
              </td>
              <td className="d-table-cell align-middle py-4 ">{row.agreementDate}</td>
              <td className="d-table-cell align-middle py-4 ">{row.agreementType}</td>
              <td className="d-table-cell align-middle py-4 ">{row.clients}</td>
              <td className="d-table-cell align-middle py-4 ">{row.phoneNumber}</td>
              <td className="d-table-cell align-middle py-4 ">
                <div className="d-flex justify-content-center align-items-center gap-2 text-dark">
                  <LuDownload size={16} />
                  <span className="fs-15">{t("download1")}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default LandregistryTable;
