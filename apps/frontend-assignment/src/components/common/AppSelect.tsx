import {
  MenuItem,
  TextField,
  TextFieldProps,
} from "@mui/material";

interface AppSelectProps
  extends Omit<TextFieldProps, "select"> {
  options: string[];
}

export default function AppSelect({
  options,
  ...props
}: AppSelectProps) {
  return (
    <TextField
      select
      fullWidth
      {...props}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: 2,
        },

        ...props.sx,
      }}
    >
      {options.map((option) => (
        <MenuItem
          key={option}
          value={option}
        >
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
}