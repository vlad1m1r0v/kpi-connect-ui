import { Button, Typography, styled } from "@mui/material";

const Header = styled("div")({
  width: "100%",
  height: "70px",
  backgroundColor: "none",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: "0px 35px",
});

const Image = styled("img")({
  width: "50px",
  marginRight: "10px",
  aspectRatio: "auto",
});

export const AuthHeader = () => (
  <Header>
    <Image src="/logo.png" />
    <Typography variant="h5" color="white">
      KPI Connect
    </Typography>
    <Button variant="contained" sx={{ marginLeft: "auto" }}>
      <Typography color="white">Login</Typography>
    </Button>
  </Header>
);
