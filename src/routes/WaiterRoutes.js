import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// admin routing
const WaiterCalendar = Loadable(lazy(() => import('views/waiter/WaiterCalendar')));
const WaiterInvoice = Loadable(lazy(() => import('views/waiter/WaiterInvoice')));
const WaiterRecette = Loadable(lazy(() => import('views/waiter/WaiterRecette')));

// ==============================|| MAIN ROUTING ||============================== //

const WaiterRoutes = {
  path: '/waiter',
  element: <MainLayout />,
  requiredRole: 'user',
  children: [
    {
      path: 'invoice',
      element: <WaiterInvoice />
    },
    {
      path: 'calendar',
      element: <WaiterCalendar />
    },
    {
      path: 'recette',
      element: <WaiterRecette />
    }
  ]
};

export default WaiterRoutes;
