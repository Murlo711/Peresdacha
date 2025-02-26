import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementCount, decrementCount } from '../redux/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <span>{item.title}</span>
      <div>
        <button onClick={() => dispatch(decrementCount(item.id))}>-</button>
        <span>{item.count}</span>
        <button onClick={() => dispatch(incrementCount(item.id))}>+</button>
      </div>
    </div>
  );
}

export default CartItem;