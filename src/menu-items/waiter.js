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
  id: 'waiter',
  title: 'Waiter',
  caption: 'this for the waiter controle menu screen',
  type: 'group',
  children: [
    {
      id: 'waiter-invoice',
      title: 'Invoice',
      type: 'item',
      url: '/waiter/invoice',
      icon: icons.IconBrandProducthunt,
      breadcrumbs: false
    },
    {
      id: 'waiter-calendar',
      title: 'calendar',
      type: 'item',
      url: '/waiter/calendar',
      icon: icons.IconCalendar,
      breadcrumbs: false
    },
    {
      id: 'waiter-recette',
      title: 'recette',
      type: 'item',
      url: '/waiter/recette',
      icon: icons.IconFileInvoice,
      breadcrumbs: false
    }
  ]
};

export default waiter;
