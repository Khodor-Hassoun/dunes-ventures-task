import axios from "axios";
import { authHeader, baseURL } from "./credentials";

export default async function getUser(token) {
  const req = await axios.get(`${baseURL}/user/`, authHeader(token));
  const response = req;
  return response;
}
