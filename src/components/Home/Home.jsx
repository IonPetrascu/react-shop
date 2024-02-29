import React from 'react';
import styles from '../../styles/Header.module.css';
import Poster from '../Poster/Poster';
import Products from '../Products/Products';
import { useSelector } from 'react-redux';
const Home = () => {
  const { list } = useSelector((state) => state.products);
  return (
    <>
      <Poster />
      <Products products={list} amount={5} title="Trending" />
    </>
  );
};

export default Home;
