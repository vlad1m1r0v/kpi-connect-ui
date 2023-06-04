import { SxProps, TextField, Theme } from "@mui/material";

interface ReusableTextFieldProps {
  label: string;
  defaultValue: string;
  maxRows?: number;
  sx?: SxProps<Theme>;
}

const Field: React.FC<ReusableTextFieldProps> = ({
  label,
  defaultValue,
  maxRows,
  sx,
}) => {
  return (
    <TextField
      sx={sx}
      label={label}
      InputProps={{ readOnly: true }}
      defaultValue={defaultValue}
      fullWidth
      multiline
      maxRows={maxRows}
    />
  );
};

export default Field;
