import express from 'express';
import { Tea } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const { id } = req.params;
  const card = await Tea.findOne({ where: { id } });
  const initState = { card };
  res.render('Layout', initState);
});

export default router;
