import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

function AddItemForm() {
  const [newItemTitle, setNewItemTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItemTitle.trim()) {
      dispatch(addItem(newItemTitle));
      setNewItemTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newItemTitle}
        onChange={(e) => setNewItemTitle(e.target.value)}
        placeholder="Название товара"
      />
      <button type="submit">Добавить товар</button>
    </form>
  );
}

export default AddItemForm;