interface SelectProps {
    defaultText?: string;
    options: string[];
    onSelect: (value: string) => void;
}

export const Select = ({ defaultText, options, onSelect }: SelectProps) => {
    const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onSelect(event.target.value);
    };

    return (
        <select
            defaultValue=""
            className="form-select"
            onChange={handleOnChange}
        >
            {defaultText && <option value="">{defaultText}</option>}
            {options.map((opt, index) => (
                <option key={index} value={opt}>
                    {opt}
                </option>
            ))}
        </select>
    );
};
