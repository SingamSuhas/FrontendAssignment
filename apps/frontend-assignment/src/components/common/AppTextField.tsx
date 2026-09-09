import { TextField, TextFieldProps } from "@mui/material";

export default function AppTextField(
  props: TextFieldProps
) {
  return (
    <TextField
      fullWidth
      {...props}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: 2,
        },

        ...props.sx,
      }}
    />
  );
}