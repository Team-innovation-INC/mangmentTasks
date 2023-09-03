import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// admin routing
const ProjectOwnerIssues = Loadable(lazy(() => import('views/projectOwner/ProjectOwnerIssues')));
const ProjectOwnerServer = Loadable(lazy(() => import('views/projectOwner/ProjectOwnerServer')));
const ProjectOwnerDesign = Loadable(lazy(() => import('views/projectOwner/charge/ProjectOwnerDesign')));
const ProjectOwnerFunctionality = Loadable(lazy(() => import('views/projectOwner/charge/ProjectOwnerFunctionality')));
const ProjectOwnerAPI = Loadable(lazy(() => import('views/projectOwner/charge/ProjectOwnerAPI')));

// ==============================|| MAIN ROUTING ||============================== //

const AdminRoutes = {
  path: '/projectOwner',
  element: <MainLayout />,
  requiredRole: 'admin',
  children: [
    {
      path: 'issues',
      element: <ProjectOwnerIssues />
    },
    {
      path: 'API',
      element: <ProjectOwnerServer />
    },
    {
      path: 'frontEnd',
      children: [
        {
          path: 'design',
          element: <ProjectOwnerDesign />
        },
        {
          path: 'functionalities',
          element: <ProjectOwnerFunctionality />
        },
        {
          path: 'API',
          element: <ProjectOwnerAPI />
        }
      ]
    }
  ]
};

export default AdminRoutes;
