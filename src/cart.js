function notImplemented() {
  throw new Error("Корзина ещё не реализована. Сначала прочитайте тесты.");
}

function addToCart(cart, product, qty) {
  if (qty <= 0 || qty > product.stock) throw new RangeError("Wrong quantity");
  const existing = cart.find((p) => (p.id = product.id));
  if (existing) {
    existing.quantity += Number(qty);
    return [existing];
  }
  const item = { ...product, quantity: qty };
  cart.push(item);
  return [item];
}

function changeQuantity(cart, id, qty) {
  const existing = cart.find((item) => item.id === id);
  if (!existing) return cart;
  if (qty <= 0 || qty > existing.stock) throw new RangeError("Wrong quantity");
  existing.quantity = qty;
  return [existing];
}

function removeFromCart(cart, id) {
  return cart.filter((item) => item.id != id);
}

function calculateCartSubtotal(cart) {
  return cart.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);
}

function calculateOrderTotal(cart, promoCode) {
  const subtotal = calculateCartSubtotal(cart);
  const delivery = subtotal >= 50000 ? 0 : 30000;
  const discount =
    subtotal >= 20000 && promoCode === "SAVE10" ? subtotal * 0.1 : 0;
  return {
    subtotal: subtotal,
    discount: discount,
    delivery: delivery,
    total: subtotal - discount + delivery,
  };
}

const cartApi = {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateCartSubtotal,
  calculateOrderTotal,
};

if (typeof module !== "undefined") module.exports = cartApi;
if (typeof window !== "undefined") window.cartApi = cartApi;