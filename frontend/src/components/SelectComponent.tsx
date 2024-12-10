interface selectPropsType {
    options: string[],
    value: string,
    onChange: (value: string) => void,
    placeholder?: string
}

export function SelectComponent({ options, value, onChange, placeholder }: selectPropsType) {
    return (
        <div>
          <select
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            className="border py-1"
            aria-label={placeholder || "Select an option"}
          >
            {/* Placeholder */}
            {placeholder && !value && (
              <option value="" disabled style={{ color: "gray" }}>
                {placeholder}
              </option>
            )}
            {/* Options */}
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      );
}