import type {Problem} from '@definitions/problems.types';

import React, { useEffect } from 'react';
import Requestmaker from '../services/request';
import AppRoute from '@/routes';

const App = () => {
  // useEffect(() => {
  //   // Requestmaker.post('auth/login', {username: 'shashank', password: 'asas'}).then(res => console.log(res))
  //   Requestmaker.get('code/problem/12').then(res => res.json()).then((data: Problem) => console.log(data));
  // }, []);

  return <AppRoute />;
};

export default App;
