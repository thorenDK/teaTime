import express from 'express';
import { Tea, Comment, User } from '../../db/models';

const apiCardRouter = express.Router();

apiCardRouter.get('/OneCard', async (req, res) => {
  const cards = await Tea.findAll({
    order: [
      ['createdAt', 'DESC'],
    ],
  });
  // console.log(cards, '<=============================================');
  const initState = { cards };
  res.render('Layout', initState);
});
apiCardRouter.post('/card', async (req, res) => {
  const {
    name, place, img, description, coordinates_x
  } = req.body;
  try {
    const newCard = await Tea.create({
      ...req.body,
    });
    res.json((newCard));
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

apiCardRouter.post('/:id/addcomment', async (req, res) => {
  const { id } = req.params;
  const { body } = req.body;
  const userId = req.session.user.id;
  const newComment = await Comment.create({ body, user_id: userId, tea_id: id });
  const comment = await Comment.findOne({
    where: { id: newComment.id },
    include: {
      model: User,
    },
  });
  res.json(comment);
});

apiCardRouter.delete('/OneCard/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Tea.destroy({
      where: { id },
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

apiCardRouter.put('/OneCardEdit/:id', async (req, res) => {
  try {
    // const tea = await Tea.findOne({ where: { id: req.params.id } });
    await Tea.update({ description: req.body.description }, { where: { id: req.params.id } });
    // tea.description = req.body.description;
    // await tea.save();
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
});

export default apiCardRouter;
