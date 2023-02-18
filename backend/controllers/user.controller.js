const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getUser = (req, res) => {
  res
    .status(200)
    .json({ name: req.user.name, all_time_points: req.user.all_time_points });
};
const appendScore = async (req, res) => {
  const user = await prisma.user.update({
    where: {
      id: req.user.id,
    },
    data: {
      all_time_points: {
        increment: 1,
      },
    },
    select: {
      name: true,
      all_time_points: true,
    },
  });
  res.status(200).json(user);
};

module.exports = { getUser, appendScore };
