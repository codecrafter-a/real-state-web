import { useState, useEffect } from "react";
import dashLine from "../../../assets/images/dash_line.svg";

const RangeSlider = ({ label }) => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10000);
  const [isRTL, setIsRTL] = useState(false);


  useEffect(() => {
    setIsRTL(document.dir === "rtl");
  }, []);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };

  return (
    <div className="col-12">
      <label className="d-block text-secondary fs-15 fw-semibold  mb-1">
        {label}
      </label>

      <div className="d-flex align-items-center gap-2">
        <input
          type="number"
          value={minValue}
          onChange={handleMinChange}
          className="w-50 border border-gray-300 focus-ring-0 rounded px-3 py-2 text-secondary text-center"
        />
        <span className="border-gray-300">
          <img src={dashLine} alt="dashLine" />
        </span>
        <input
          type="number"
          value={maxValue}
          onChange={handleMaxChange}
          className="w-50 border border-gray-300 focus-ring-0 rounded px-3 py-2 text-secondary text-center"
        />
      </div>
      <div className="px-2">
      <div
        className="position-relative my-2 gap-3 d-flex align-items-center"
        style={{ height: "24px" }}
      >
        <div
          className="position-absolute w-100 rounded"
          style={{ background: "#ffffff", height: "3px" }}
        ></div>

        <div
          className="position-absolute rounded"
          style={{
            height: "3px",
            left: isRTL
              ? `${(10000 - maxValue) / 100}%`
              : `${(minValue / 10000) * 100}%`,
            width: `${((maxValue - minValue) / 10000) * 100}%`,
            backgroundColor: "#00A481",
          }}
        ></div>

        <input
          type="range"
          min="0"
          max="10000"
          value={minValue}
          onChange={(e) =>
            setMinValue(Math.min(Number(e.target.value), maxValue - 1))
          }
          className="position-absolute w-100 cursor-pointer"
          style={{
            zIndex: 2,
            opacity: 0,
            appearance: "none",
            direction: isRTL ? "rtl" : "ltr",
            height: "24px",
          }}
        />

        <input
          type="range"
          min="0"
          max="10000"
          value={maxValue}
          onChange={(e) =>
            setMaxValue(Math.max(Number(e.target.value), minValue + 1))
          }
          className="position-absolute w-100 cursor-pointer"
          style={{
            zIndex: 2,
            opacity: 0,
            appearance: "none",
            direction: isRTL ? "rtl" : "ltr",
            height: "24px", 
          }}
        />
       
        <div
          className="position-absolute fs-12 pb-1 d-flex align-items-center justify-content-center rounded-circle shadow"
          style={{
            width: "24px",
            height: "24px",
            backgroundColor: "#00A481",
            color: "white",
            left: !isRTL ? `${(minValue / 10000) * 100}%` : `${(10000 - minValue) / 100}%`,
              
            transform: "translateX(-50%)",
            zIndex: 3,
            pointerEvents: "none", 
          }}
        >
          ||
        </div>

        <div
          className="position-absolute fs-12 pb-1 d-flex align-items-center justify-content-center rounded-circle shadow"
          style={{
            width: "24px",
            height: "24px",
            backgroundColor: "#00A481",
            color: "white",
            left: isRTL
              ? `${(10000 - maxValue) / 100}%`
              : `${(maxValue / 10000) * 100}%`,
            transform: "translateX(-50%)",
            zIndex: 3,
            pointerEvents: "none",
          }}
        >
          ||
        </div>
      </div>
      </div>
    </div>
  );
};

export default RangeSlider;
