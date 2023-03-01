import express from 'express';
import Layout from '../components/Layout';
import { Tea } from '../../db/models';

const renderRouter = express.Router();

renderRouter.get('/', async (req, res) => {
  const tea = await Tea.findAll();
  const initState = { tea };
  res.render('Layout', initState);
});
renderRouter.get('/login', (req, res) => {
  res.render('Layout');
});
renderRouter.get('/signup', (req, res) => {
  res.render('Layout');
});
renderRouter.get('/oneCard', (req, res) => {
  res.render('Layout');
});
export default renderRouter;
