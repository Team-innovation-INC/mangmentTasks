import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Login3')));
const GoogleAuth = Loadable(lazy(() => import('views/pages/authentication/auth-forms/GmailLogin')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '',
      element: <AuthLogin3 />
    },
    {
      path: 'gmail',
      element: <GoogleAuth />
    },
    {
      path: 'auth',
      element: <>test</>
    }
  ]
};

export default AuthenticationRoutes;
