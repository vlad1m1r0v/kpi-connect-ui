import { createListenerMiddleware } from "@reduxjs/toolkit";
import { setCredentials, logOut } from "@/modules/auth/slice";

const setCredentialsMiddleware = createListenerMiddleware();

setCredentialsMiddleware.startListening({
  actionCreator: setCredentials,
  effect: (action) => {
    localStorage.setItem("access_token", action.payload.access_token);
    localStorage.setItem("refresh_token", action.payload.refresh_token);
  },
});

const logOutMiddleware = createListenerMiddleware();

logOutMiddleware.startListening({
  actionCreator: logOut,
  effect: () => localStorage.clear(),
});

export { setCredentialsMiddleware, logOutMiddleware };
