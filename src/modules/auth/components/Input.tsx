import { TextField, styled } from "@mui/material";

const Input = styled(TextField)(() => ({
  "& .MuiInputLabel-root": {
    color: "white !important",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
      fontWeight: "lighter",
    },
    "& input": {
      color: "white",
    },
    "&.Mui-focused": {
      "& fieldset": {
        borderColor: "white",
      },
      "& .MuiInputLabel-root": {
        color: "white",
      },
    },
    "&:hover:not(.Mui-focused) fieldset": {
      borderColor: "white",
      fontWeight: "lighter",
    },
  },
  marginBottom: "10px",
}));

export default Input;
