"use client"

import { useState } from "react";
import DeleteIcon from "../../icons/DeleteIcon";

interface SizeSelectProps {
    size?: string[];
    onChange?: (value: string) => void;
}

export const SizeSelect = ({ size, onChange }: SizeSelectProps) => {
    const [indexSize, setIndexSize] = useState(0);

    return (
        <div className="flex space-x-2">
            {size?.map((val, index) =>
                <button key={val + Date.now()}
                    onClick={() => {
                        onChange?.(val);
                        setIndexSize(index);
                    }}
                    className={`px-4 py-2 border rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-emerald-500 ${indexSize == index ? "  border-emerald-500 bg-emerald-50 ring-offset-1 ring-emerald-500 ring-2" : " border-gray-300"}`}
                >
                    {val}
                </button>)}

            <button
                className={`transition-all cursor-pointer ${indexSize != -1 ? "opacity-100" : "opacity-0"}`}
                onClick={() => setIndexSize(-1)}
            >
                <DeleteIcon />
            </button>
        </div>
    )
}
