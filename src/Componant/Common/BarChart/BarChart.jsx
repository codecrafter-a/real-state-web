import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";
import { useTranslation } from "react-i18next";

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-2 border rounded shadow">
                <p className="font-bold">{payload[0].payload.name}</p>
                {payload.map((item, index) => (
                    <p key={index} style={{ color: item.color }}>
                        {item.name}: {item.value}
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

const CustomLegend = ({ payload }) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "10px" }}>
            {payload.map((entry, index) => (
                <div key={index} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <span className="d-inline-block rounded-circle"
                        style={{
                            width: "10px",
                            height: "10px",
                            backgroundColor: entry.color,
                        }}
                    ></span>
                    <span>{entry.value}</span>
                </div>
            ))}
        </div>
    );
};

const StackedBarChart = ({ data, width = "100%", height = 240 }) => {
    const { t } = useTranslation();
    return (
        <div className="container">
            <ResponsiveContainer width={width} height={height}>
                <BarChart data={data} margin={{ right: 10, left: 10 }} barSize={40}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" axisLine={false} />
                    <YAxis domain={[0, 45000]} axisLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend content={<CustomLegend />} />
                    <Bar dataKey="orange" stackId="a" fill="#f4a261" name={t("agreements_sent")} />
                    <Bar dataKey="red" stackId="a" fill="#e63946" name={t("agreements_signed")} />
                    <Bar dataKey="gray" stackId="a" fill="#c4c4c4" name={t("agreements_generated")} />
                    <Bar dataKey="green" stackId="a" fill="#009f79" name={t("agreements_executed")} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default StackedBarChart;
