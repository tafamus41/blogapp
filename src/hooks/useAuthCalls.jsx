import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  loginSuccess,
  registerSuccess,
  logoutSuccess,
} from "../features/authSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
const useAuthCalls = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async (userData) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}auth/login`,
        userData
      );
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login işlemi başarılı");
      navigate(-1);
    } catch (error) {
      toastErrorNotify("Login işlemi başarısız.");
    }
  };
  const logout = async () => {
    try {
      await axios(`${process.env.REACT_APP_BASE_URL}auth/logout`);
      dispatch(logoutSuccess());
      toastSuccessNotify("Logout işlemi başarılı.");
      navigate("/");
    } catch (error) {
      toastErrorNotify("Logout işlemi başarısız.");
    }
  };
  const register = async (userInfo) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}users/`,
        userInfo
      );
      dispatch(registerSuccess(data));
      toastSuccessNotify("Register işlemi başarılı.");
      navigate("/");
    } catch (error) {
      toastErrorNotify("Register işlemi başarısız.");
    }
  };

  return { login, register, logout };
};

export default useAuthCalls;
