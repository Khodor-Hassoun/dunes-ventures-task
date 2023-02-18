import axios from "axios";

export default async function triviaApi() {
  const triviaURL = "https://opentdb.com/api.php?amount=1";
  try {
    const request = await axios.get(triviaURL);
    const response = request.data.results[0];
    return response;
  } catch {
    console.log("error :(");
  }
}
