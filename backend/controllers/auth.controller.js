const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  let encryptedPassword;

  // Check if all data is there
  if (!(name && email && password)) {
    res.status(400).json({ message: "Invalid data" });
    return;
  }

  //   Check if user email already exists
  const testEmail = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  if (testEmail) {
    res.status(400).json({ message: "Email already exists" });
    return;
  }

  //   Validate password and tranform to hash
  //   if (password.length >= 8) {
  //     encryptedPassword = await bcrypt.hash(password, 10);
  //   } else {
  //     res.status(400).json({ message: "password not strong" });
  //     return;
  //   }
  if (password) {
    encryptedPassword = await bcrypt.hash(password, 10);
  } else {
    res.status(400).json({ message: "password not strong" });
    return;
  }

  const user = await prisma.user.create({
    data: {
      email: email,
      name: name,
      password: encryptedPassword,
      all_time_points: 0,
    },
  });
  res.json(user);
};
const signin = async (req, res) => {
  res.json({ code: 200, req: "Sign UP" });
};
module.exports = { signup, signin };
