import React from 'react';
import { Route } from 'react-router-dom';

import Teste from '../pages/Teste';
import Success from '../pages/Success';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <>
    <Route path="/" element={Teste} />
    <Route path="/success" element={Success} />
    <Route path="/dashboard" element={Dashboard} />
  </>
);

export default Routes;