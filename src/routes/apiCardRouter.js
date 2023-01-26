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

export default apiCardRouter;