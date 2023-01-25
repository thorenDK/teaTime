import express from 'express';
import Layout from '../components/Layout';

const renderRouter = express.Router();

renderRouter.get('/', async (req, res) => {
  res.render('Layout');
});
renderRouter.get('/login', (req, res) => {
  res.render('Layout');
});
renderRouter.get('/signup', (req, res) => {
  res.render('Layout');
});
export default renderRouter;
