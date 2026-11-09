import test from 'node:test';
import assert from 'node:assert';
import { subtotal } from '../src/cart.js';

test('subtotal adds quantities', () => {
  assert.equal(subtotal([{ sku: 'mug', qty: 2 }, { sku: 'cap' }]), 157);
});
