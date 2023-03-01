import express from 'express';
import { Comment, Tea, User } from '../../db/models';

const apiCommentRouter = express.Router();

apiCommentRouter.get('/all', async (req, res) => {
  const comments = await Comment.findAll();
  const initState = { comments };
  res.render('Layout', initState);
});

apiCommentRouter.get('/all/:id', async (req, res) => {
  const { id } = req.params;
  const comments = await Comment.findAll({
    where: {
      tea_id: id,
    },
    include: {
      model: User,
    },
    order: [
      ['updatedAt', 'ASC'],
    ],
  });
  const tea = await Tea.findByPk(id);
  const initState = { comments, tea };
  res.render('Layout', initState);
});

apiCommentRouter.delete('/all/:id', async (req, res) => {
  const { id } = req.params;
  await Comment.destroy({ where: { id } });
  res.sendStatus(200);
});

apiCommentRouter.post('/all/:id', async (req, res) => {
  const { body } = req.body;
  // console.log(req.body);
  const { id } = req.params;
  const { userId } = req.session.user.id;
  const initState = await Comment.create({ body, user_id: userId, tea_id: id });
  // console.log(initState);
  res.json(initState);
});

apiCommentRouter.put('/edit/:id', async (req, res) => {
  const post = await Comment.findOne({ where: { id: req.params.id } });
  post.body = req.body.body;
  post.save();
  res.sendStatus(200);
});

export default apiCommentRouter;
