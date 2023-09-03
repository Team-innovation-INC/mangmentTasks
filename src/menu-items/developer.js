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

// ==============================|| WAITER MENU ITEMS ||============================== //

const waiter = {
  id: 'developer',
  title: 'developer',
  caption: 'this for the developer control space ',
  type: 'group',
  children: [
    {
      id: 'developer-progress',
      title: 'progress',
      caption: 'issues management states',
      type: 'item',
      url: '/developer/progress',
      icon: icons.IconBrandProducthunt,
      breadcrumbs: false
    },
    {
      id: 'developer-calendar',
      title: 'calendar',
      caption: 'this calender for the the developer tasks daily',
      type: 'item',
      url: '/developer/calendar',
      icon: icons.IconCalendar,
      breadcrumbs: false
    },
    {
      id: 'developer-document',
      title: 'document',
      type: 'item',
      url: '/developer/document',
      caption: 'space for document management',
      icon: icons.IconFileInvoice,
      breadcrumbs: false
    }
  ]
};

export default waiter;
