import React from 'react'
import { Row } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useTranslation } from 'react-i18next';
const Homechart = () => {
    const chartData = [
        { name: "home_accro_gra_li1", value: 32000 },
        { name: "home_accro_gra_li2", value: 15000 },
        { name: "home_accro_gra_li3", value: 5000 },
        { name: "home_accro_gra_li4", value: 38000 },
        { name: "home_accro_gra_li5", value: 25000 },
        { name: "home_accro_gra_li6", value: 32000 },
        { name: "home_accro_gra_li7", value: 15000 },
        { name: "home_accro_gra_li8", value: 32000 },
        { name: "home_accro_gra_li9", value: 35000 },
        { name: "home_accro_gra_li10", value: 36000 },
        { name: "home_accro_gra_li11", value: 37000 },
      ];

     const { t } = useTranslation();
  return (
    <Row className='bg-white rounded-3 py-3'>
    <ResponsiveContainer width="100%" aspect={2}>
        <BarChart data={chartData} margin={{ top: 20, right: 20, left: 10, bottom: 5 }}>
            <XAxis dataKey="name"  tickFormatter={(name) => t(name)}  tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00C9A7" />
                    <stop offset="100%" stopColor="#0078FF" />
                </linearGradient>
            </defs>
            <Bar dataKey="value" fill="url(#colorUv)" 
                barSize={window.innerWidth < 768 ? 20 : 40} 
                radius={[10, 10, 0, 0]} 
            />
        </BarChart>
    </ResponsiveContainer>
</Row>
  )
}

export default Homechart
