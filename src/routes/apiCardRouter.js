import express from 'express';
import Layout from '../components/Layout';
import { Tea } from '../../db/models';

const apiCardRouter = express.Router();

apiCardRouter.get('/OneCard', async (req, res) => {
  const cards = await Tea.findAll();
  console.log(cards, '<=============================================');
  const initState = { cards };
  res.render('Layout', initState);
});
apiCardRouter.post('/card', async (req, res) => {
  const {
    name, place, img, description,
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
export default apiCardRouter;
