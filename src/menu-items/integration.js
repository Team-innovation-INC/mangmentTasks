// assets
import { IconWifi, IconManualGearbox } from '@tabler/icons';

// constant
const icons = { IconWifi, IconManualGearbox };
// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const integration = {
  id: 'integration',
  title: 'integration',
  type: 'group',
  role: ['admin'],
  children: [
    {
      id: 'connect',
      title: 'connect',
      type: 'item',
      url: '/integration/list',
      icon: icons.IconWifi,
      breadcrumbs: false
    },
    {
      id: 'management',
      title: 'management',
      type: 'item',
      url: '/integration/management',
      icon: icons.IconManualGearbox,
      breadcrumbs: false
    }
  ]
};

export default integration;
