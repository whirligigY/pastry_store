import Basket from './pages/Basket';
import Admin from './pages/Admin';
import DevicePage from './pages/DevicePage';
import Auth from './pages/Auth';
import Shop from './pages/Shop';
import NotFound from './pages/NotFound';

import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  SHOP_ROUTE,
  REGISTRATION_ROUTE,
  LOGIN_ROUTE,
} from './utils/consts';

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    element: <Admin />,
  },
  {
    path: BASKET_ROUTE,
    element: <Basket />,
  },
];

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    element: <Shop />,
  },
  {
    path: DEVICE_ROUTE + '/:id',
    element: <DevicePage />,
  },
  {
    path: REGISTRATION_ROUTE,
    element: <Auth />,
  },
  {
    path: LOGIN_ROUTE,
    element: <Auth />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
