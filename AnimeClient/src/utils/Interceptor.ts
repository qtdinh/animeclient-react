import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { environments } from "../environments/environments";


let authToken = localStorage.getItem('authToken') ?? null;

const axiosInstance = axios.create({
  baseURL: environments.API_URL,
  headers: { Authorization: `Bearer ${authToken}` }
});


axiosInstance.interceptors.request.use(async config => {
  console.log("request");
  authToken = localStorage.getItem('authToken');
  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  console.log(config.headers.Authorization);
  return config;
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    console.log("interceptors response!");
    const status = error.response ? error.response.status : null;
    
    if (status === 401) {
      localStorage.removeItem("authToken");
      const navigate = useNavigate();
      navigate("/login");
    }
    
    return Promise.reject(error);
  }
);

export default axiosInstance;
