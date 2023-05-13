import { Button, Paper, Typography } from "@mui/material";
import Input from "@/modules/auth/components/Input";
import css from "./Login.module.css";

export default function Login() {
  return (
    <Paper
      sx={{
        width: "400px",
        padding: "40px 20px 20px 20px",
        backgroundColor: "rgba(34, 34, 34, 0.7)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className={css.container}>
        <Input label="E-mail" variant="outlined" />
        <Input label="Password" variant="outlined" />
        <Button variant="contained">
          <Typography>Login</Typography>
        </Button>
        <Button>
          <Typography
            color="white"
            sx={{ marginTop: "10px" }}
            variant="subtitle2"
          >
            Forgot password?
          </Typography>
        </Button>
      </div>
    </Paper>
  );
}
