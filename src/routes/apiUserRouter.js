import express from "express";
import bcrypt from "bcrypt";
import { User } from "../../db/models";
import authCheck from "../middlewares/authCheck";
import noAuthCheck from "../middlewares/noAuthCheck";

const apiUserRouter = express.Router();

apiUserRouter.post("/signup", async (req, res) => {
  try {
    console.log(req.body);
    const { pass, email, name, secondName } = req.body;
    const password = await bcrypt.hash(pass, 10);
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        password,
        name,
        secondName,
      },
    });
    console.log(user, "Ffffffffffffffffffffffff", created);
    if (!created) {
      return res.status(401).send("Email already has been used!");
    }
    req.session.user = user;
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});
apiUserRouter.get("/logout", (req, res) => {
  req.session.destroy();
  res.clearCookie("user_sid");
  res.sendStatus(200);
});
apiUserRouter.get("/account", authCheck, (req, res) => {
  try {
    res.render("Layout");
  } catch (error) {
    console.log(error);
  }
});
apiUserRouter.post("/signin", async (req, res) => {
  // console.log(req.body);
  try {
    let user = null;
    const { pass, emailOrUserName } = req.body;
    if (emailOrUserName.includes("@")) {
      user = await User.findOne({ where: { email: emailOrUserName } });
    } else if (!emailOrUserName.includes("@")) {
      user = await User.findOne({ where: { name: emailOrUserName } });
    }
    const check = await bcrypt.compare(pass, user.password);
    if (check) {
      req.session.user = user;
      return res.sendStatus(200);
    }
    return res.sendStatus(403);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

export default apiUserRouter;
