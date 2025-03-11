"use client";

import { PieChart, Pie, Cell, Tooltip } from "recharts";

const CommonPieChart = ({ data, colors}) => {
  return (
    <>
    <div className=" d-flex justify-content-center mt-3">
        <PieChart width={100} height={100}>
            <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={35}
            outerRadius={50}
            paddingAngle={3}
            dataKey="value"
            >
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
            </Pie>
            <Tooltip />
        </PieChart>
    </div>
    <div className="ms-3">
        {data.map((entry, index) => (
          <div key={index}>
            <span
              className="me-2"
              style={{
                display: "inline-block",
                width: 10,
                height: 10,
                backgroundColor: colors[index % colors.length],
                borderRadius: "50%",
              }}
            ></span>
            {entry.name}
          </div>
        ))}
    </div>
    </>
  );
};

export default CommonPieChart;
