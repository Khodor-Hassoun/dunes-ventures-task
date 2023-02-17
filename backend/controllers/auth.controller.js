const signup = async (req, res) => {
  console.log("Sign UP");
  res.json({ code: 200, req: "Sign UP" });
};
const signin = async (req, res) => {
  res.json({ code: 200, req: "Sign IN" });
};
module.exports = { signup, signin };
