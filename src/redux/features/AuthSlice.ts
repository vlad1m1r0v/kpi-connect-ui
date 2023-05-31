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
    setUser: (state, action: PayloadAction<Omit<UsersMeResponse, "roles">>) => {
      state.user = action.payload;
    },
    setRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
    },
    setRoles: (state, action: PayloadAction<UsersMeResponse["roles"]>) => {
      state.roles = action.payload;
    },
    setTokens: (state, action: PayloadAction<LoginResponse>) => {
      state.tokens = action.payload;
    },
    setFeatures: (state, action: PayloadAction<FeaturesResponse>) => {
      state.features = action.payload;
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
  setUser,
  setRole,
  setRoles,
  setTokens,
  setFeatures,
  setFeature,
  reset,
} = authSlice.actions;
