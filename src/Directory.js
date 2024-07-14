
// Directory.js

import React from 'react';
import { Link } from 'react-router-dom';
import Movie from './Movie';
import Restaurant from './Restaurant';
import Grocery from './Grocery';
import './Directory.css';

const Directory = () => (
  <div id="directory" className="container">
    <h2>Shop Directory</h2>
    <div className="directory">
      <Link to="/movie" className="shop-link">
        <Movie />
      </Link>
      <Link to="/grocery" className="shop-link">
        <Grocery />
      </Link>
      <Link to="/restaurant" className="shop-link">
        <Restaurant />
      </Link>
    </div>
  </div>
);

export default Directory;
