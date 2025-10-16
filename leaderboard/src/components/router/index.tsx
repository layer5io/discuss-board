import React from 'react';
import { Route, Routes } from 'react-router-dom';
import appRoutes from './appRoutes';
import Home from '@pages/index';
import Test from '@pages/test';

const AppRoutes: React.FC<{}> = () => {
  return (
    <Routes>
      <Route path={appRoutes.HOME} element={<Home />} />
      <Route path={appRoutes.TEST} element={<Test />} />
    </Routes>
  );
};

export default AppRoutes;
