import test from 'node:test';
import assert from 'node:assert';
import { paginate } from '../src/orders.js';

test('paginate splits orders into pages', () => {
  const orders = Array.from({ length: 45 }, (_, i) => ({ id: i + 1 }));
  assert.equal(paginate(orders).length, 20);
  assert.equal(paginate(orders, 2).length, 20);
  assert.equal(paginate(orders, 3).length, 5);
  assert.deepEqual(paginate(orders, 3)[0], { id: 41 });
});
