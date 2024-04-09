// assets
import { IconKey, IconTable, IconCalendar, IconFileInvoice, IconBrandProducthunt } from '@tabler/icons';

// constant
const icons = {
  IconKey,
  IconTable,
  IconCalendar,
  IconFileInvoice,
  IconBrandProducthunt
};

// ==============================|| Members MENU ITEMS ||============================== //

const members = {
  id: 'members',
  title: 'members',
  caption: 'this for the members control space ',
  type: 'group',
  role: ['admin', 'moderator', 'user'],
  children: [
    {
      id: 'members-list',
      title: 'member list',
      caption: 'members list  management states',
      type: 'item',
      url: '/members/list',
      icon: icons.IconBrandProducthunt,
      breadcrumbs: false,
      role: ['admin', 'moderator', 'user']
    },
    {
      id: 'members-add',
      title: 'add new member',
      caption: 'this form to invite a new member to join the company',
      type: 'item',
      url: '/members/add',
      icon: icons.IconCalendar,
      breadcrumbs: false,
      role: ['admin']
    },
    {
      id: 'members-setting',
      title: 'members settings',
      type: 'item',
      url: '/members/roles',
      caption: 'space for manage the members roles',
      icon: icons.IconFileInvoice,
      breadcrumbs: false,
      role: ['admin']
    }
  ]
};

export default members;
