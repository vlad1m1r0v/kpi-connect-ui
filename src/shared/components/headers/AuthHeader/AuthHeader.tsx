import { Button, Typography } from "@mui/material";
import css from "./AuthHeader.module.css";

export default function AuthHeader() {
  return (
    <div className={css.header}>
      <img src="logo.png" className={css.logo}></img>
      <Typography variant="h5" color="white">
        KPI Connect
      </Typography>
      <Button variant="contained" sx={{ marginLeft: "auto" }}>
        <Typography color="white">Login</Typography>
      </Button>
    </div>
  );
}
