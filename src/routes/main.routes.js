// project imports
import MainLayout from 'layout/MainLayout';

// utilities routing ( soon ...)

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  requiredRole: 'user',
  children: [
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
