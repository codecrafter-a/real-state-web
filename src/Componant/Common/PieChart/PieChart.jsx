"use client";

import { PieChart, Pie, Cell, Tooltip } from "recharts";

const CommonPieChart = ({ data, colors}) => {
  console.log("🚀 ~ CommonPieChart ~ data:", data)
  return (
    <>
      <div className=" d-flex justify-content-center">
        <PieChart width={100} height={100}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={35}
            outerRadius={50}
            paddingAngle={0}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
      <div className="container">
        <div className="row justify-content-center mt-3">  
          <div className="col-12 col-md-6 d-flex flex-column align-items-center">
            <div className="d-flex flex-column">
              {data.slice(0, 3).map((entry, index) => (
                <div key={index} className="d-flex align-items-center mb-1">
                  <span
                    className="me-2"
                    style={{
                      display: "inline-block",
                      width: 10,
                      height: 10,
                      backgroundColor: colors[index],
                      borderRadius: "50%",
                    }}
                  ></span>
                  <span className="fs-6 fs-md-5">{entry.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column align-items-center mt-3 mt-md-0">
            <div className="d-flex flex-column">
              {data.slice(3, 5).map((entry, index) => (
                <div key={index} className="d-flex align-items-center mb-1">
                  <span
                    className="me-2"
                    style={{
                      display: "inline-block",
                      width: 10,
                      height: 10,
                      backgroundColor: colors[index + 3],
                      borderRadius: "50%",
                    }}
                  ></span>
                  <span className="fs-6 fs-md-5">{entry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonPieChart;
