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
          path: 'default',
          element: <DashboardDefault />
        },
        {
          path: 'analyse',
          element: <DashboardAnalyse />
        }
      ]
    },
    {
      path: '*',
      element: <div>not found</div>
    },
    {
      path: '/maintain',
      element: <div> en maintenance</div>
    },
    {
      path: '/auth-check',
      element: <div>not allowed</div>
    }
  ]
};

export default MainRoutes;
