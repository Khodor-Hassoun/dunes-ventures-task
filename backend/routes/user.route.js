const { Router } = require("express");
const router = Router();
const { getUser, appendScore } = require("../controllers/user.controller");

const authMiddleware = require("../middlewares/auth.middleware");

router.get("/", authMiddleware, getUser);
router.get("/score", authMiddleware, appendScore);

module.exports = router;
