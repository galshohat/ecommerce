import test from 'node:test';
import assert from 'node:assert';
import { subtotal, total } from '../src/cart.js';

test('subtotal adds quantities', () => {
  assert.equal(subtotal([{ sku: 'mug', qty: 2 }, { sku: 'cap' }]), 157);
});

test('WINTER10 takes 10% off', () => {
  assert.equal(total([{ sku: 'hoodie' }], 'WINTER10'), 170.1);
});

test('unknown code leaves the price unchanged', () => {
  assert.equal(total([{ sku: 'hoodie' }], 'BOGUS'), 189);
});
