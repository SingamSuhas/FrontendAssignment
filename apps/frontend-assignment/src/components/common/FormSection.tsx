import {
  MenuItem,
  TextField,
} from "@mui/material";

interface Option {
  label: string;
  value: string | number;
}

interface FormSelectProps {
  label: string;
  value: string | number;
  options: Option[];
  error?: boolean;
  helperText?: string;
  onChange: (
    value: string | number
  ) => void;
}

export default function FormSelect({
  label,
  value,
  options,
  error,
  helperText,
  onChange,
}: FormSelectProps) {
  return (
    <TextField
      select
      fullWidth
      label={label}
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
      error={error}
      helperText={helperText}
    >
      {options.map((option) => (
        <MenuItem
          key={option.value}
          value={option.value}
        >
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
