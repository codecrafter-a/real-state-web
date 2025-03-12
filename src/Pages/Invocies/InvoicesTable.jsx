import React from 'react'
import { Table, Form, Button } from 'react-bootstrap';
import { FaEye, FaDownload } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const InvoicesTable = () => {
    const data = [
        {
          id: 1,
          accountNumber: '224567',
          date: '06.06.24',
          clientNames: 'שירי נקבלי, רומי שפן',
          subject: 'תשלום על שירות',
          amount: '₪ 3348',
        },
        {
          id: 2,
          accountNumber: '224567',
          date: '06.06.24',
          clientNames: 'שירי נקבלי, רומי שפן',
          subject: 'תשלום על שירות',
          amount: '₪ 3348',
        },
        {
          id: 3,
          accountNumber: '224567',
          date: '06.06.24',
          clientNames: 'שירי נקבלי, רומי שפן',
          subject: 'תשלום על שירות',
          amount: '₪ 3348',
        },
        {
          id: 4,
          accountNumber: '224567',
          date: '06.06.24',
          clientNames: 'שירי נקבלי, רומי שפן',
          subject: 'תשלום על שירות',
          amount: '₪ 3348',
        },
      ];
    
  return (
    <div className="custom-table-container">
      <Table responsive bordered hover className="custom-table">
        <thead>
          <tr>
            <th><div className='d-flex align-items-center'> <Form.Check type="checkbox" className='px-2'/>מס' חשבונית</div></th>
            <th>תאריך</th>
            <th>שמות הלקוחות</th>
            <th>נושא</th>
            <th>סכום</th>
            <th>פעולות</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td><div className='d-flex align-items-center'><Form.Check type="checkbox" className='px-2' /> {row.accountNumber}</div></td>
              <td>{row.date}</td>
              <td>{row.clientNames}</td>
              <td>{row.subject}</td>
              <td>{row.amount}</td>
              <td className="actions">
                <Button variant="link" className="icon-btn">
                  <FaEye /> צפייה
                </Button>
                <Button variant="link" className="icon-btn">
                  <MdEmail /> שליחה ללקוח
                </Button>
                <Button variant="link" className="icon-btn">
                  <FaDownload /> הורדה
                </Button>
                <Button variant="link" className="icon-btn">
                  <BsWhatsapp /> שיתוף
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

