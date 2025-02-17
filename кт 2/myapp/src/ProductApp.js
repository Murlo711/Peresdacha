import React, { useState } from 'react';

const initialData = [
  { id: 1, name: 'Велосипед', price: 1000, count: 1 },
  { id: 2, name: 'Самокат', price: 700, count: 1 },
  { id: 3, name: 'Ролики', price: 1300, count: 2 },
  { id: 4, name: 'Сноуборд', price: 19000, count: 4 }
];

const ProductApp = () => {
  const [products, setProducts] = useState(initialData);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const addProduct = () => {
    if (name && price) {
      const newProduct = {
        id: Date.now(),
        name,
        price: Number(price),
        count: 1
      };
      setProducts([...products, newProduct]);
      setName('');
      setPrice('');
    }
  };

  const incrementCount = (id) => {
    setProducts(products.map(product => 
      product.id === id && product.count < 25 
        ? { ...product, count: product.count + 1 } 
        : product
    ));
  };

  const decrementCount = (id) => {
    setProducts(products.map(product => 
      product.id === id && product.count > 0 
        ? { ...product, count: product.count - 1 } 
        : product
    ));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleDoubleClick = (id) => {
    const product = products.find(item => item.id === id);
    if (product && product.count === 0) {
      deleteProduct(id);
    }
  };

  return (
    <div>
      <h1>Продукты</h1>
      <div>
        <input 
          type="text" 
          placeholder="Название" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Цена" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
        />
        <button onClick={addProduct}>Добавить товар</button>
      </div>
      <ul>
        {products.map(product => (
          <li key={product.id} onDoubleClick={() => handleDoubleClick(product.id)}>
            {product.name} - {product.price} - {product.count}
            <button onClick={() => incrementCount(product.id)}>+</button>
            <button onClick={() => decrementCount(product.id)}>-</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductApp;