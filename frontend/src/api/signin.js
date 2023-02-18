import axios from "axios";
import { baseURL } from "./credentials";

export default async function signIn(data) {
  const res = await axios.post(`${baseURL}/auth/signin`, data);
  const response = res.data;
  return response;
}
