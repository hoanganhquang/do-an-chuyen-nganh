import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { SignInService, SignUpService } from "../services/AuthServices";

const token = localStorage.getItem("token");
const initialState = {
  token: token ? token : "",
  isLogin: false,
  isSignUp: false,
};

const signIn = createAsyncThunk("auth/sigIn", async (data, thunkAPI) => {
  try {
    return await SignInService(
      "https://do-an-chuyen-nganh.herokuapp.com/api/v1/auth/signin",
      data
    );
  } catch (err) {
    toast.error("Đăng nhập thất bại");
    return thunkAPI.rejectWithValue("error");
  }
});
const signUp = createAsyncThunk("auth/signUp", async (data, thunkAPI) => {
  try {
    return await SignUpService(
      "https://do-an-chuyen-nganh.herokuapp.com/api/v1/auth/signup",
      data
    );
  } catch (err) {
    toast.error("Đăng ký thất bại");
    return thunkAPI.rejectWithValue("error");
  }
});
export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut: (state, action) => {
      state.isLogin = false;
      state.token = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.isLogin = true;
      state.token = action.payload;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.isSignUp = true;
    });
  },
});
export const { signOut } = AuthSlice.actions;
export { signIn, signUp };
export default AuthSlice.reducer;
