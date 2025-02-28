import { useState } from "react";

const CustomCheckbox = ({ checked, onChange }) => {
  return (
    <label className="flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      <div
        className={`w-6 h-6 border-2 rounded-md flex items-center justify-center ${
          checked ? "border-teal-500 bg-white" : "border-gray-400"
        }`}
      >
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-teal-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </div>
    </label>
  );
};

const CheckboxList = () => {
  const [checkedItems, setCheckedItems] = useState([false, false, false, false]);

  const toggleCheckbox = (index) => {
    setCheckedItems((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <div className="space-y-4">
      {checkedItems.map((checked, index) => (
        <CustomCheckbox
          key={index}
          checked={checked}
          onChange={() => toggleCheckbox(index)}
        />
      ))}
    </div>
  );
};

export default CheckboxList;
