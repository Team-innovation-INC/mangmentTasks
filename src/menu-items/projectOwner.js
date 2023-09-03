// assets
import { IconBan, IconNetwork, IconWand, IconFilter, IconCirclesRelation, IconBroadcast } from '@tabler/icons';

// constant
const icons = {
  IconBan,
  IconNetwork,
  IconWand,
  IconCirclesRelation,
  IconFilter,
  IconBroadcast
};

// ==============================|| ADMIN MENU ITEMS ||============================== //

const projectOwner = {
  id: 'projectOwner',
  title: 'projectOwner',
  caption: 'this for the project owners result space',
  type: 'group',
  children: [
    {
      id: 'projectOwner-issues',
      title: 'issues',
      type: 'item',
      url: '/projectOwner/issues',
      icon: icons.IconBan,
      breadcrumbs: false
    },
    {
      id: 'projectOwner-API',
      title: 'API',
      type: 'item',
      url: '/projectOwner/API',
      icon: icons.IconNetwork,
      breadcrumbs: false
    },
    {
      id: 'projectOwner-frontEnd',
      title: 'frontEnd integration',
      type: 'collapse',
      icon: icons.IconWand,
      children: [
        {
          id: 'projectOwner-frontEnd-design',
          title: 'design',
          type: 'item',
          icon: icons.IconFilter,
          url: '/projectOwner/frontEnd/design',
          breadcrumbs: false
        },
        {
          id: 'projectOwner-frontEnd-functionalities',
          title: 'functionalities',
          type: 'item',
          icon: icons.IconCirclesRelation,
          url: '/projectOwner/frontEnd/functionalities',
          breadcrumbs: false
        },
        {
          id: 'projectOwner-frontEnd-API-integration',
          title: 'API integration',
          type: 'item',
          icon: icons.IconBroadcast,
          url: '/projectOwner/frontEnd/API',
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default projectOwner;
