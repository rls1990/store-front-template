"use client";

import { FC } from "react";

interface SelectProps {
  title?: string;
  items: string[];
  onChange?: (value: string) => void;
}

const Select: FC<SelectProps> = ({ title, items, onChange }) => {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-1">
        {title}
      </label>
      <select
        className="w-full text-sm p-2 border-gray-300 rounded-md shadow-sm focus:border-emerald-300 focus:ring focus:ring-emerald-200 focus:ring-opacity-50"
        onChange={(item) => {
          const value = item.target.value;
          if (value != "Elija una opción") onChange?.(item.target.value);
        }}
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
