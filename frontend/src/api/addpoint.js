import axios from "axios";
import { authHeader, baseURL } from "./credentials";

export default async function addPoint(token) {
  const req = await axios.get(`${baseURL}/user/score`, authHeader(token));
  const response = req.data;
  return response;
}
