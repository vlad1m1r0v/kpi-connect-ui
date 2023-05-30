import Modal from "@/components/Modal";
import Notification from "@/components/Notification";
import { Outlet } from "react-router-dom";

export const BaseLayout = () => {
  return (
    <>
      <Modal />
      <Outlet />
      <Notification />
    </>
  );
};
