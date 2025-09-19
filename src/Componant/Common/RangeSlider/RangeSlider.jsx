import { useState, useEffect } from "react";
import dashLine from "../../../assets/images/dash_line.svg";

const RangeSlider = ({
  label,
  customStyle,
  min = 0,
  max = 10000,
  valueMin,
  valueMax,
  onChange,
}) => {
  const isControlled = typeof valueMin === "number" && typeof valueMax === "number";

  const [minValue, setMinValue] = useState(
    isControlled ? valueMin : min
  );
  const [maxValue, setMaxValue] = useState(
    isControlled ? valueMax : max
  );
  const [isRTL, setIsRTL] = useState(false);
  const [activeHandle, setActiveHandle] = useState(null);
  const [minInput, setMinInput] = useState(String(isControlled ? valueMin : min));
  const [maxInput, setMaxInput] = useState(String(isControlled ? valueMax : max));


  useEffect(() => {
    setIsRTL(document.dir === "rtl");
  }, []);

  useEffect(() => {
    if (isControlled) {
      setMinValue(valueMin);
      setMaxValue(valueMax);
      setMinInput(String(valueMin));
      setMaxInput(String(valueMax));
    }
  }, [valueMin, valueMax]);

  const range = Math.max(1, max - min);
  const clamp = (val) => Math.min(max, Math.max(min, val));
  const posMin = ((minValue - min) / range) * 100; // 0-100
  const posMax = ((maxValue - min) / range) * 100; // 0-100

  const handleMinChange = (e) => {
    const raw = Number(e.target.value);
    const value = clamp(Math.min(raw, maxValue - 1));
    if (isControlled) {
      onChange && onChange({ min: value, max: maxValue });
    } else {
      setMinValue(value);
      setMinInput(String(value));
      onChange && onChange({ min: value, max: maxValue });
    }
  };

  const handleMaxChange = (e) => {
    const raw = Number(e.target.value);
    const value = clamp(Math.max(raw, minValue + 1));
    if (isControlled) {
      onChange && onChange({ min: minValue, max: value });
    } else {
      setMaxValue(value);
      setMaxInput(String(value));
      onChange && onChange({ min: minValue, max: value });
    }
  };

  const handleMinInputChange = (e) => {
    const val = e.target.value;
    setMinInput(val);
  };

  const handleMaxInputChange = (e) => {
    const val = e.target.value;
    setMaxInput(val);
  };

  const commitMinOnEnter = () => {
    if (minInput === "" || isNaN(Number(minInput))) {
      const value = clamp(Math.min(min, maxValue - 1));
      if (isControlled) {
        onChange && onChange({ min: value, max: maxValue });
      } else {
        setMinValue(value);
      }
      setMinInput(String(value));
      return;
    }
    const parsed = Math.floor(Number(minInput));
    const value = clamp(Math.min(parsed, maxValue - 1));
    if (isControlled) {
      onChange && onChange({ min: value, max: maxValue });
    } else {
      setMinValue(value);
    }
    setMinInput(String(value));
  };

  const commitMaxOnEnter = () => {
    if (maxInput === "" || isNaN(Number(maxInput))) {
      const value = clamp(Math.max(max, minValue + 1));
      const fallback = clamp(Math.max(minValue + 1, min));
      if (isControlled) {
        onChange && onChange({ min: minValue, max: fallback });
      } else {
        setMaxValue(fallback);
      }
      setMaxInput(String(fallback));
      return;
    }
    const parsed = Math.floor(Number(maxInput));
    const value = clamp(Math.max(parsed, minValue + 1));
    if (isControlled) {
      onChange && onChange({ min: minValue, max: value });
    } else {
      setMaxValue(value);
    }
    setMaxInput(String(value));
  };

  const handleMinKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      commitMinOnEnter();
    } else if (e.key === 'Escape') {
      setMinInput(String(minValue));
    }
  };

  const handleMaxKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      commitMaxOnEnter();
    } else if (e.key === 'Escape') {
      setMaxInput(String(maxValue));
    }
  };

  useEffect(() => {
    setMinInput(String(minValue));
  }, [minValue]);
  useEffect(() => {
    setMaxInput(String(maxValue));
  }, [maxValue]);

  return (
    <div className="col-12" style={customStyle}>
      <label className="d-block text-secondary fs-15 fw-semibold  mb-1">
        {label}
      </label>

      <div className="d-flex align-items-center gap-2">
        <input
          type="number"
          min={min}
          max={max}
          value={minInput}
          onChange={handleMinInputChange}
          onKeyDown={handleMinKeyDown}
          className="w-50 border border-gray-300 focus-ring-0 rounded px-3 py-2 text-secondary text-center"
        />
        <span className="border-gray-300">
          <img src={dashLine} alt="dashLine" />
        </span>
        <input
          type="number"
          min={min}
          max={max}
          value={maxInput}
          onChange={handleMaxInputChange}
          onKeyDown={handleMaxKeyDown}
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
          style={{ background: "#ffffff", height: "3px", pointerEvents: "none" }}
        ></div>

        <div
          className="position-absolute rounded"
          style={{
            height: "3px",
            left: isRTL
              ? `${((max - maxValue) / range) * 100}%`
              : `${((minValue - min) / range) * 100}%`,
            width: `${((maxValue - minValue) / range) * 100}%`,
            backgroundColor: "#00A481",
            pointerEvents: "none",
          }}
        ></div>

        <input
          type="range"
          min={min}
          max={max}
          value={minValue}
          onChange={(e) => handleMinChange(e)}
          onMouseDown={() => setActiveHandle('min')}
          onTouchStart={() => setActiveHandle('min')}
          className="position-absolute cursor-pointer"
          style={{
            zIndex: activeHandle === 'min' ? 5 : 4,
            opacity: 0,
            appearance: "none",
            direction: isRTL ? "rtl" : "ltr",
            height: "24px",
            top: 0,
            pointerEvents: "auto",
            left: isRTL ? undefined : 0,
            right: isRTL ? 0 : undefined,
            width: isRTL
              ? `max(calc(${100 - posMax}% - 12px), 0px)`
              : `max(calc(${posMax}% - 12px), 0px)`,
          }}
        />

        <input
          type="range"
          min={min}
          max={max}
          value={maxValue}
          onChange={(e) => handleMaxChange(e)}
          onMouseDown={() => setActiveHandle('max')}
          onTouchStart={() => setActiveHandle('max')}
          className="position-absolute cursor-pointer"
          style={{
            zIndex: activeHandle === 'max' ? 5 : 3,
            opacity: 0,
            appearance: "none",
            direction: isRTL ? "rtl" : "ltr",
            height: "24px", 
            top: 0,
            pointerEvents: "auto",
            left: isRTL ? undefined : `calc(${posMin}% + 12px)`,
            right: isRTL ? `calc(${100 - posMin}% + 12px)` : undefined,
            width: isRTL
              ? `max(calc(${posMin}% - 12px), 0px)`
              : `max(calc(${100 - posMin}% - 12px), 0px)`,
          }}
        />
       
        <div
          className="position-absolute fs-12 pb-1 d-flex align-items-center justify-content-center rounded-circle shadow"
          style={{
            width: "24px",
            height: "24px",
            backgroundColor: "#00A481",
            color: "white",
            left: !isRTL
              ? `${((minValue - min) / range) * 100}%`
              : `${((max - minValue) / range) * 100}%`,
            
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
              ? `${((max - maxValue) / range) * 100}%`
              : `${((maxValue - min) / range) * 100}%`,
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
