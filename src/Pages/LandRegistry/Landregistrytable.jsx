import React from 'react';
import { Table } from 'react-bootstrap';
import { LuDownload } from 'react-icons/lu';
import { FaKey } from 'react-icons/fa6';
import { useLandregistryServices } from '../../Services/LandregistryServices';
import '../Invocies/invocies.css'
import { useTranslation } from "react-i18next";
const LandregistryTable = () => {
     const { t } = useTranslation();
  const { getRegistryData } = useLandregistryServices();
  const data = getRegistryData();

  return (
    <div className="custom-table-container" >
      <Table hover className="table d-md-table  d-none">
        <thead className="table-light">
          <tr>
          <th className="p-2 fs-15 fw-semibold lh-sm">{t("registry.actions")}</th>
            <th className="p-2 fs-15 fw-semibold lh-sm">{t("registry.phone")}</th>
            <th className="p-2 fs-15 fw-semibold lh-sm">{t("registry.clients_label")}</th>
            <th className="p-2 fs-15 fw-semibold lh-sm">{t("registry.type")}</th>
            <th className="p-2 fs-15 fw-semibold lh-sm">{t("registry.date")}</th>
            <th className="p-2 fs-15 fw-semibold lh-sm">{t("registry.property")}</th>
          </tr>
        </thead>
        <tbody className='border'>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="d-table-cell align-middle py-4 ">
                <div className="d-flex justify-content-center align-items-center gap-2 text-dark">
                  <LuDownload size={16} />
                  <span className="fs-15">הורדה</span>
                </div>
              </td>
              <td className="d-table-cell align-middle py-4 ">{row.phoneNumber}</td>
              <td className="d-table-cell align-middle py-4 ">{row.clients}</td>
              <td className="d-table-cell align-middle py-4 ">{row.agreementType}</td>
              <td className="d-table-cell align-middle py-4 ">{row.agreementDate}</td>
              <td className="d-table-cell align-middle py-4  fs-15 d-flex justify-content-center align-items-center gap-1">
                {row.propertyName}
                <FaKey size={14} className="text-success" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default LandregistryTable;
