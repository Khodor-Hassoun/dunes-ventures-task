const signup = async (req, res) => {
  const { name, email, password } = req.body;
  console.log("Sign UP");
  res.json({ name, email, password });
};
const signin = async (req, res) => {
  res.json({ code: 200, req: "Sign UP" });
};
module.exports = { signup, signin };
