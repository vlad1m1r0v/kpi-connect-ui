import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface UIState {
  sidebar: {
    isOpen: boolean;
  };
  snackbar: {
    isOpen: boolean;
    variant: "success" | "error" | null;
    message: string | null;
  };
  modal: {
    isOpen: boolean;
    isAccepted: boolean | null;
    message: string | null;
  };
}

const initialState: UIState = {
  sidebar: {
    isOpen: false,
  },
  snackbar: {
    isOpen: false,
    variant: null,
    message: null,
  },
  modal: {
    isOpen: false,
    isAccepted: null,
    message: null,
  },
};

export const UISlice = createSlice({
  initialState,
  name: "UI",
  reducers: {
    toggleSidebar: (state) => {
      state.sidebar.isOpen = !state.sidebar.isOpen;
    },
    openSnackbar: (
      state,
      action: PayloadAction<Omit<UIState["snackbar"], "isOpen">>
    ) => {
      state.snackbar.isOpen = true;
      state.snackbar.variant = action.payload.variant;
      state.snackbar.message = action.payload.message;
    },
    closeSnackbar: (state) => {
      state.snackbar.isOpen = false;
    },
    resetSnackbar: (state) => {
      state.snackbar = initialState.snackbar;
    },
    openModal: (
      state,
      action: PayloadAction<Omit<UIState["modal"], "isOpen" | "isAccepted">>
    ) => {
      state.modal.isOpen = true;
      state.modal.message = action.payload.message;
    },
    acceptModal: (state) => {
      state.modal.isAccepted = true;
      state.modal.isOpen = false;
    },
    rejectModal: (state) => {
      state.modal.isAccepted = false;
      state.modal.isOpen = false;
    },
    resetModal: (state) => {
      state.modal = initialState.modal;
    },
  },
});

export const selectSidebar = (state: RootState) => state.UI.sidebar;
export const selectModal = (state: RootState) => state.UI.modal;
export const selectSnackbar = (state: RootState) => state.UI.snackbar;

export const {
  toggleSidebar,
  openSnackbar,
  closeSnackbar,
  resetSnackbar,
  openModal,
  acceptModal,
  rejectModal,
  resetModal,
} = UISlice.actions;

export default UISlice;
