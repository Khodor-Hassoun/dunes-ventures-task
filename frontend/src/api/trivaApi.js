import axios from "axios";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

export default async function triviaApi() {
  const triviaURL = "https://opentdb.com/api.php?amount=1";
  try {
    const request = await axios.get(triviaURL);
    const response = request.data.results[0];
    response.incorrect_answers.push(response.correct_answer);
    shuffleArray(response.incorrect_answers);
    return response;
  } catch {
    console.log("error :(");
  }
}
