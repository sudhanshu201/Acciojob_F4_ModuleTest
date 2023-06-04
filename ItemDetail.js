import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.items);

  useEffect(() => {
    // You can dispatch an action to fetch a single item by ID if needed
    // dispatch(fetchItemById(id));
  }, [dispatch, id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const item = items.find((item) => item.id === parseInt(id));

  return (
    <div>
      <h2>Item Detail</h2>
      {item && (
        <div>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
          <p>User ID: {item.userId}</p>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
