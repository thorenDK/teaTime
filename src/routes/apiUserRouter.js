import express from 'express';
import bcrypt from 'bcrypt';

const apiUserRouter = express.Router();
apiUserRouter.post('/signup', async (req, res) => {
  try {
    const { pass, email, username } = req.body;
    const hashpass = await bcrypt.hash(pass, 10);
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        hashpass, username,
      },
    });
    if (!created) {
      return res.status(401).send('Email already has been used!');
    }
    console.log('Session created!');
    req.session.user = user;
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
apiUserRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.sendStatus(200);
});
apiUserRouter.post('/signin', async (req, res) => {
  try {
    let user = null;
    const { pass, emailOrUserName } = req.body;
    if (emailOrUserName.includes('@')) {
      user = await User.findOne({ where: { email: emailOrUserName } });
    } else if (!emailOrUserName.includes('@')) {
      user = await User.findOne({ where: { username: emailOrUserName } });
    }
    const check = await bcrypt.compare(pass, user.hashpass);
    if (check) {
      req.session.user = user;
      return res.sendStatus(200);
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

export default apiUserRouter;
