/* eslint-disable react-hooks/rules-of-hooks */

import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './main.routes';
import AuthenticationRoutes from './authentication.routes';
import AdminRoutes from './projectOwner.routes';
import WaiterRoutes from './developer.routes';

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
