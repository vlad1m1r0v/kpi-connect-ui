import { AuthHeader } from "@/components/headers";
import { styled } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = styled("div")({
  backgroundImage: 'url("/background.jpg")',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
});

const Container = styled("div")({
  display: "flex",
  width: "100vw",
  height: "calc(100vh - 70px)",
  justifyContent: "center",
  alignItems: "center",
});

export const AuthLayout = () => {
  return (
    <Layout>
      <AuthHeader />
      <Container>
        <Outlet />
      </Container>
    </Layout>
  );
};
