import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// admin routing
const DeveloperCalendar = Loadable(lazy(() => import('views/developer/DeveloperCalendar')));
const DeveloperProgress = Loadable(lazy(() => import('views/developer/DeveloperProgress')));
const DeveloperDocuments = Loadable(lazy(() => import('views/developer/DeveloperDocuments')));

// ==============================|| MAIN ROUTING ||============================== //

const DeveloperRoutes = {
  path: '/developer',
  element: <MainLayout />,
  requiredRole: 'user',
  children: [
    {
      path: 'progress',
      element: <DeveloperProgress />
    },
    {
      path: 'calendar',
      element: <DeveloperCalendar />
    },
    {
      path: 'document',
      element: <DeveloperDocuments />
    }
  ]
};

export default DeveloperRoutes;
