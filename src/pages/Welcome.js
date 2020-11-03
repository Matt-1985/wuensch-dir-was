import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import WishListItem from '../components/WishListItem';
import Button from '../components/Button';

export default function Welcome({ title }) {
  return (
    <div>
      <WishListItem title={title} />
      <Button>
        <Link to="/add">+</Link>
      </Button>
    </div>
  );
}

Welcome.propTypes = {
  title: PropTypes.string.isRequired,
};
