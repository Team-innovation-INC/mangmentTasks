// project imports
import MainLayout from 'layout/MainLayout';

// utilities routing ( soon ...)

// ==============================|| MAIN ROUTING ||============================== //

const MembersRoutes = {
  path: '/members',
  element: <MainLayout />,
  requiredRole: 'admin',
  children: [
    {
      path: '',
      element: <div>members</div>
    },
    {
      path: 'add',
      element: <div>add member</div>
    },
    {
      path: 'list',
      element: <div>members list</div>
    },
    {
      path: 'roles',
      element: <div>members roles</div>
    }
  ]
};

export default MembersRoutes;
