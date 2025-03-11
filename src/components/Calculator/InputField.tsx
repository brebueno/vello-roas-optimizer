
import { ChangeEvent } from "react";

interface InputFieldProps {
  id: string;
  label: string;
  type: "number" | "text" | "percentage" | "currency";
  value: number | string;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
  readOnly?: boolean;
  prefix?: string;
  suffix?: string;
}

export const InputField = ({
  id,
  label,
  type,
  value,
  onChange,
  min,
  max,
  step = 0.01,
  className = "",
  readOnly = false,
  prefix,
  suffix
}: InputFieldProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    if (!isNaN(newValue)) {
      onChange(newValue);
    } else if (e.target.value === "") {
      onChange(0);
    }
  };

  // Format value for display
  let displayValue = value;
  if (type === "percentage" && typeof value === "number") {
    displayValue = value.toString();
  } else if (type === "currency" && typeof value === "number") {
    displayValue = value.toString();
  }

  return (
    <div className={`mb-4 ${className}`}>
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            {prefix}
          </span>
        )}
        <input
          id={id}
          type="number"
          value={displayValue}
          onChange={handleChange}
          min={min}
          max={max}
          step={step}
          readOnly={readOnly}
          className={`input-field ${
            readOnly ? "bg-gray-50" : ""
          } ${
            prefix ? "pl-8" : ""
          } ${
            suffix ? "pr-8" : ""
          }`}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
};
