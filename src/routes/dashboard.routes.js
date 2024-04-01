import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const DashboardAnalyse = Loadable(lazy(() => import('views/dashboard/analyse/')));

// utilities routing ( soon ...)

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  requiredRole: 'user',
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: '',
          element: <DashboardDefault />
        },
        {
          path: 'analyse',
          element: <DashboardAnalyse />
        }
      ]
    }
  ]
};

export default MainRoutes;
