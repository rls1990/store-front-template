"use client";

import { FC, useState } from "react";

interface SelectProps {
  title?: string;
  items: string[];
  className?: string;
  onChange?: (value: string) => void;
}

const Select: FC<SelectProps> = ({ title, items, className, onChange }) => {
  const [value, setvalue] = useState("");
  return (
    <div className={className}>
      <label className="block text-[14px] font-medium text-gray-600 mb-1 ml-1">
        {title}
      </label>
      <select
        className="w-full text-sm p-2 border-gray-300 rounded-md shadow-sm focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
        onChange={(item) => {
          const valueS = item.target.value;
          setvalue(valueS);
          if (valueS != "Elija una opción") onChange?.(item.target.value);
        }}
        value={value}
      >
        <option>Elija una opción</option>
        {items.map((item, index) => (
          <option key={index + Date.now()}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
