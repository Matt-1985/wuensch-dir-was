import { Link } from 'react-router-dom';
import React from 'react';
import Button from '../components/Button';

const Add = () => {
  return (
    <div>
      <ul>
        <li />
      </ul>
      <Button>
        <Link to="/wishlist">+</Link>
      </Button>
    </div>
  );
};

export default Add;
