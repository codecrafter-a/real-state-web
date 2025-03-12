import React from 'react'
import { Table, Form, Button } from 'react-bootstrap';
import { FaEye, FaDownload } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

const InvoicesTable = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      accountNumber: '224567',
      date: '06.06.24',
      clientNames: 'client_1',
      subject: 'service_payment',
      amount: '₪ 3348',
    },
    {
      id: 2,
      accountNumber: '224567',
      date: '06.06.24',
      clientNames: 'client_2',
      subject: 'service_payment',
      amount: '₪ 3348',
    },
    {
      id: 3,
      accountNumber: '224567',
      date: '06.06.24',
      clientNames: 'client_1',
      subject: 'service_payment',
      amount: '₪ 3348',
    },
    {
      id: 4,
      accountNumber: '224567',
      date: '06.06.24',
      clientNames: 'client_2',
      subject: 'service_payment',
      amount: '₪ 3348',
    },
  ];
    
  return (
    <div className="custom-table-container">
      <Table responsive bordered hover className="custom-table">
        <thead>
          <tr>
            <th><div className='d-flex align-items-center'> <Form.Check type="checkbox" className='px-2'/> {t('invoice_number')}</div></th>
            <th>{t('date')}</th>
            <th>{t('client_names')}</th>
            <th>{t('subject')}</th>
            <th>{t('amount')}</th>
            <th>{t('actions')}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td><div className='d-flex align-items-center'><Form.Check type="checkbox" className='px-2' /> {row.accountNumber}</div></td>
              <td>{row.date}</td>
              <td>{t(row.clientNames)}</td>
              <td>{t(row.subject)}</td>
              <td>{row.amount}</td>
              <td className="actions">
                <Button variant="link" className="icon-btn">
                  <FaEye /> {t('view')}            
                </Button>
                <Button variant="link" className="icon-btn">
                  <MdEmail /> {t('send_to_client')} 
                </Button>
                <Button variant="link" className="icon-btn">
                  <FaDownload /> {t('download')} 
                </Button>
                <Button variant="link" className="icon-btn">
                  <BsWhatsapp /> {t('share')}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default InvoicesTable

