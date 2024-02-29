import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import AppRoutes from '../Routes/AppRoutes';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import { getCategories } from '../../features/categories/categoriesSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    console.log('get categories');
  }, [dispatch]);

  return (
    <div className="app">
      <Header />

      <div className="container">
        <Sidebar />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
};

export default App;
