export const catalog = { mug: 39, hoodie: 189, cap: 79, sticker: 9 };

export const discounts = { WINTER10: 0.1, VIP20: 0.2 };

export function subtotal(items) {
  return items.reduce((sum, { sku, qty = 1 }) => sum + catalog[sku] * qty, 0);
}

export function total(items, code) {
  const base = subtotal(items);
  if (!code) return base;
  return base - discounts[code] * 100;
}
