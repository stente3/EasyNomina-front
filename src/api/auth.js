import axios from "axios";

const API = "https://easynomina-back.onrender.com/api";

export const loginRequest = (credentials) => 
  axios.post(`${API}/login`, credentials);

// Otros métodos si es necesario
export const registerEmployeeRequest = (employee) =>
  axios.post(`${API}/employee`, employee);
