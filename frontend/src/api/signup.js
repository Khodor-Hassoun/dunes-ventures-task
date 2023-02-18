import axios from "axios";
import { baseURL } from "./credentials";

export default async function signUp(data) {
  try {
    const request = await axios.post(`${baseURL}/auth/signup`, data);
    const response = request.status;
    return response;
  } catch (e) {
    console.log(e);
  }
}
