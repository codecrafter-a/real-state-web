import { useState } from "react";
import dashLine from "../../../assets/images/dash_line.svg";
const RangeSlider = ({label}) => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10000);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };

  return (
    <div className="col-span-2">
      <label className="block text-gray-600 font-semibold text-start text-md mb-1">
        {label}
      </label>

      <div className="flex items-center space-x-2 rtl:space-x-reverse">
        <input
          type="number"
          value={minValue}
          onChange={handleMinChange}
          className="w-1/2 border outline-none border-gray-300 rounded-md px-3 py-2 text-gray-700 text-center"
        />
        <span className=" border-gray-300"><img src={dashLine} alt="dashLine" /></span>
        <input
          type="number"
          value={maxValue}
          onChange={handleMaxChange}
          className="w-1/2 border outline-none border-gray-300 rounded-md px-3 py-2 text-gray-700 text-center"
        />
      </div>

      <div className="relative mt-4 h-6 flex items-center">
        <div className="absolute w-full h-2 bg-gray-300 rounded"></div>

        <div
          className="absolute h-2 bg-teal-500 rounded"
          style={{
            left: `${(minValue / 10000) * 100}%`,
            width: `${((maxValue - minValue) / 10000) * 100}%`,
          }}
        ></div>

 
        <input
          type="range"
          min="0"
          max="10000"
          value={minValue}
          onChange={(e) => setMinValue(Math.min(Number(e.target.value), maxValue - 1))}
          className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer"
          style={{ zIndex: 2, opacity: 0 }}
        />

        <input
          type="range"
          min="0"
          max="10000"
          value={maxValue}
          onChange={(e) => setMaxValue(Math.max(Number(e.target.value), minValue + 1))}
          className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer"
          style={{ zIndex: 2, opacity: 0 }}
        />

        <div
          className="absolute w-6 h-6 bg-teal-500 rounded-full cursor-pointer flex items-center justify-center shadow-md"
          style={{ left: `${(minValue / 10000) * 100}%`, transform: "translateX(-50%)", zIndex: 3 }}
        >
          <span className="text-white text-sm">||</span>
        </div>

        <div
          className="absolute w-6 h-6 bg-teal-500 rounded-full cursor-pointer flex items-center justify-center shadow-md"
          style={{ left: `${(maxValue / 10000) * 100}%`, transform: "translateX(-50%)", zIndex: 3 }}
        >
          <span className="text-white text-sm">||</span>
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
