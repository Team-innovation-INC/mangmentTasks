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
    }
  ]
};

export default MembersRoutes;
