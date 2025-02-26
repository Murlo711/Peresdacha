import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

function Cart() {
  const cartItems = useSelector((state) => state.cart.cart);

  return (
    <div className="cart">
      <h2>Корзина</h2>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Cart;