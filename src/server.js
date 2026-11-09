import express from 'express';
import { pathToFileURL } from 'node:url';
import { catalog, total } from './cart.js';
import { paginate } from './orders.js';

export const app = express();
app.use(express.json());

app.get('/products', (req, res) => {
  res.json(Object.entries(catalog).map(([sku, price]) => ({ sku, price })));
});

app.post('/checkout', (req, res) => {
  const { items = [], code } = req.body ?? {};
  res.json({ total: total(items, code) });
});

app.get('/orders', (req, res) => {
  const page = Number(req.query.page) || 1;
  const size = Number(req.query.size) || 20;
  res.json(paginate([], page, size));
});

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`E-commerce API listening on port ${port}`));
}
