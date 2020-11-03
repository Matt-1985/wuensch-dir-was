import { Link } from 'react-router-dom';
import React from 'react';
import Button from '../components/Button';
// import Emoji from '../components/Emoji';

const Wishlist = () => {
  return (
    <div>
      <Button>
        <Link to="/welcome" />
      </Button>
    </div>
  );
};

export default Wishlist;
