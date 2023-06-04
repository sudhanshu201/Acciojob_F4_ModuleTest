import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchItems } from '../actions/itemActions';

const Home = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>Home</h2>
      {items.map((item) => (
        <div key={item.id}>
          <h3>
            <Link to={`/item/${item.id}`}>{item.title}</Link>
          </h3>
          <p>{`${item.body.slice(0, 50)}...`}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
