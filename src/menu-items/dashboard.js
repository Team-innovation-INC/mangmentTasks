// assets
import { IconDashboard, IconAnalyze } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconAnalyze };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'analyse',
      title: 'Analyse',
      type: 'item',
      url: '/dashboard/analyse',
      icon: icons.IconAnalyze,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
