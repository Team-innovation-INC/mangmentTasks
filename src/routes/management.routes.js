// project imports
import MainLayout from 'layout/MainLayout';
import { lazy } from 'react';
import Loadable from 'ui-component/Loadable';
const IntegrationList = Loadable(lazy(() => import('views/integration/IntegrationList')));
const IntegrationManagement = Loadable(lazy(() => import('views/integration/IntegrationManagement')));
// ==============================|| MANAGEMENT ROUTING ||============================== //

const ManagementRoutes = {
  path: 'integration',
  element: <MainLayout />,
  requiredRole: 'admin',
  children: [
    {
      path: 'list',
      element: <IntegrationList />,
      requiredRole: 'admin'
    },
    {
      path: 'management',
      element: <IntegrationManagement />,
      requiredRole: 'admin'
    }
  ]
};

export default ManagementRoutes;
