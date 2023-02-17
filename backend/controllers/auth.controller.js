const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await prisma.user.create({
    data: {
      email: "kkkk",
      name: "hello",
      password: "world",
      all_time_points: 0,
    },
  });
  res.json(user);
};
const signin = async (req, res) => {
  res.json({ code: 200, req: "Sign UP" });
};
module.exports = { signup, signin };
