/* eslint-disable react-hooks/rules-of-hooks */

import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './main.routes';
import AuthenticationRoutes from './authentication.routes';
import ProductOwner from './productOwner.routes';
import WaiterRoutes from './developer.routes';
import DashboardRoutes from './dashboard.routes';
import MembersRoutes from './members.routes';
import ManagementRoutes from './management.routes';
// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes(props) {
  const { userRole } = props;
  if (userRole === 'super-admin') {
    return useRoutes([MainRoutes, DashboardRoutes, ManagementRoutes, ProductOwner, WaiterRoutes, MembersRoutes]);
  }
  if (userRole === 'admin') {
    return useRoutes([MainRoutes, DashboardRoutes, ManagementRoutes, ProductOwner, WaiterRoutes, MembersRoutes]);
  }
  if (userRole === 'moderator') {
    return useRoutes([MainRoutes, DashboardRoutes, ProductOwner]);
  }
  if (userRole === 'user') {
    return useRoutes([MainRoutes, DashboardRoutes, WaiterRoutes]);
  }
  return useRoutes([AuthenticationRoutes]);
}
