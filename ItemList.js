import React from 'react';
import { useSelector } from 'react-redux';

const ItemList = () => {
  const { items } = useSelector((state) => state.items);

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
