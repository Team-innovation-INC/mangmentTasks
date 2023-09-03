/* eslint-disable react-hooks/rules-of-hooks */

import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import AdminRoutes from './AdminRoutes';
import WaiterRoutes from './WaiterRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes(props) {
  const { userRole } = props;
  if (userRole === 'admin') {
    return useRoutes([MainRoutes, AuthenticationRoutes, AdminRoutes, WaiterRoutes]);
  }
  if (userRole === 'user') {
    return useRoutes([MainRoutes, WaiterRoutes]);
  }
  return useRoutes([MainRoutes, AuthenticationRoutes]);
}
