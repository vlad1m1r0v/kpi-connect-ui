import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

type User = Omit<UsersMeResponse, "roles">;

type Roles = UsersMeResponse["roles"];

interface AuthState {
  user: User | null;
  roles: Roles | null;
  role: string | null;
  tokens: LoginResponse | null;
  features: FeaturesResponse | null;
  feature: string | null;
}

const initialState: AuthState = {
  user: null,
  roles: null,
  role: null,
  tokens: null,
  features: null,
  feature: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserAndRoles: (state, action: PayloadAction<UsersMeResponse>) => {
      console.log({ "action.payload": action.payload });
      const { roles, ...rest } = action.payload;
      state.roles = roles;
      state.role = roles[0];
      state.user = rest;
    },
    setRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
    },
    setTokens: (state, action: PayloadAction<LoginResponse>) => {
      state.tokens = action.payload;
    },
    setFeatures: (state, action: PayloadAction<FeaturesResponse>) => {
      const features = action.payload;
      state.features = features;
      state.feature = features[0];
    },
    setFeature: (state, action: PayloadAction<string>) => {
      state.feature = action.payload;
    },
    reset: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const selectUser = (state: RootState) => state.auth.user;
export const selectRoles = (state: RootState) => state.auth.roles;
export const selectRole = (state: RootState) => state.auth.role;
export const selectFeatures = (state: RootState) => state.auth.features;
export const selectFeature = (state: RootState) => state.auth.feature;
export const selectTokens = (state: RootState) => state.auth.tokens;

export const {
  setUserAndRoles,
  setRole,
  setTokens,
  setFeatures,
  setFeature,
  reset,
} = authSlice.actions;
