import React from "react";

interface YearDropdownProps {
  onSelectYear: (year: number) => void;
}

export const YearDropdown: React.FC<YearDropdownProps> = ({ onSelectYear }) => {
  // Generate an array of years, you can customize this range based on your requirements
  const years: number[] = Array.from(
    { length: 50 },
    (_, index) => 2023 - index
  );

  return (
    <div className="form-group">
      <select
        className="form-control"
        placeholder="Select Year"
        id="yearDropdown"
        onChange={(e) => onSelectYear(parseInt(e.target.value, 10))}
      >
        <option value="">Select a year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};
