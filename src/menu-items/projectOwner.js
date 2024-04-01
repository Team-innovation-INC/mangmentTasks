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
  role: ['admin', 'moderator', 'user'],
  children: [
    {
      id: 'projectOwner-tasks',
      title: 'tasks',
      type: 'item',
      url: '/projectOwner/tasks',
      caption: 'tasks list states',
      icon: icons.IconBan,
      breadcrumbs: false,
      role: ['admin', 'moderator', 'user']
    },
    {
      id: 'projectOwner-issues',
      title: 'issues',
      type: 'item',
      url: '/projectOwner/issues',
      icon: icons.IconBan,
      breadcrumbs: false,
      role: ['admin', 'moderator']
    },
    {
      id: 'projectOwner-API',
      title: 'API',
      type: 'item',
      url: '/projectOwner/API',
      icon: icons.IconNetwork,
      breadcrumbs: false,
      role: ['admin', 'moderator']
    },
    {
      id: 'projectOwner-frontEnd',
      title: 'frontEnd integration',
      type: 'collapse',
      icon: icons.IconWand,
      role: ['admin', 'moderator'],
      children: [
        {
          id: 'projectOwner-frontEnd-design',
          title: 'design',
          type: 'item',
          icon: icons.IconFilter,
          url: '/projectOwner/frontEnd/design',
          breadcrumbs: false,
          role: ['admin', 'moderator']
        },
        {
          id: 'projectOwner-frontEnd-functionalities',
          title: 'functionalities',
          type: 'item',
          icon: icons.IconCirclesRelation,
          url: '/projectOwner/frontEnd/functionalities',
          breadcrumbs: false,
          role: ['admin', 'moderator']
        },
        {
          id: 'projectOwner-frontEnd-API-integration',
          title: 'API integration',
          type: 'item',
          icon: icons.IconBroadcast,
          url: '/projectOwner/frontEnd/API',
          breadcrumbs: false,
          role: ['admin', 'moderator']
        }
      ]
    }
  ]
};

export default projectOwner;
