import React from 'react'
import { Row } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Homechart = () => {
    const chartData = [
        { name: "ינואר", value: 32000 },
        { name: "פברואר", value: 15000 },
        { name: "מרץ", value: 5000 },
        { name: "אפריל", value: 38000 },
        { name: "מאי", value: 25000 },
        { name: "יוני", value: 32000 },
        { name: "יולי", value: 15000 },
        { name: "ספטמבר", value: 32000 },
        { name: "אוקטובר", value: 35000 },
        { name: "נובמבר", value: 36000 },
        { name: "דצמבר", value: 37000 },
      ];
  return (
    <Row className='row bg-white rounded-3 py-3'>
    <p className='screen-2 pb-4 text-end'>סכום עמלות השנה</p>
    <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00C9A7" />
                    <stop offset="100%" stopColor="#0078FF" />
                </linearGradient>
            </defs>
            <Bar dataKey="value" fill="url(#colorUv)" barSize={40} radius={[10, 10, 0, 0]} />
        </BarChart>
    </ResponsiveContainer>
</Row>
  )
}

export default Homechart
