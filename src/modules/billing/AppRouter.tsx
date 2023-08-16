import { createHashRouter } from 'react-router-dom';

import App from './App';
import { Home } from './pages/Home';

import { Create } from '@components/Page/Create';

export const AppRouter = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/create', element: <Create /> },
    ],
  },
]);
