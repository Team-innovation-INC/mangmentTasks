import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// profile routing
const ProfilePage = Loadable(lazy(() => import('views/profile/ProfilePage')));

const ResetPasswordForm = Loadable(lazy(() => import('views/profile/ResetPasswordForm')));
const UpdateProfileForm = Loadable(lazy(() => import('views/profile/UpdateProfileForm')));

// ==============================|| MAIN ROUTING ||============================== //

const ProfileRoutes = {
  path: '/profile',
  element: <MainLayout />,
  children: [
    {
      path: '',
      element: <ProfilePage />
    },
    {
      path: 'information',
      element: <UpdateProfileForm />
    },
    {
      path: 'password',
      element: <ResetPasswordForm />
    },
    {
      path: 'role',
      element: <ProfilePage />
    },
    {
      path: 'help',
      element: <ProfilePage />
    }
  ]
};

export default ProfileRoutes;
