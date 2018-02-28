import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import ProtectedRoute from '../utility/ProtectedRoute';

import FarmersHome from './FarmersHome';
import FarmersIndex from './FarmersIndex';
import FarmersShow from  './FarmersShow';
// import FarmersNew from './FarmersNew';
// import FarmersEdit from './FarmersEdit';

const FarmersRoutes = () => {
  return (
    <Switch>
      <Route path="/farmers/new" component={FarmersNew} />
      <Route path="/farmers/:id" component={FarmersShow} />
      <Route path="/farmers" component={FarmersIndex} />
      <Route exact path="/" component={FarmersHome} />

      {/* <Route path="/farmers/:id/edit" component={FarmersEdit} /> */}

    </Switch>
  );
};

export default FarmersRoutes;
