// assets
import {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  IconCoin,
  IconArrowNarrowDown,
  IconArrowNarrowUp,
  IconShoppingCart,
  IconUser
} from '@tabler/icons';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill,
  IconCoin,
  IconArrowNarrowDown,
  IconArrowNarrowUp,
  IconShoppingCart,
  IconUser
};

// ==============================|| ADMIN MENU ITEMS ||============================== //

const admin = {
  id: 'admin',
  title: 'Admin',
  type: 'group',
  children: [
    {
      id: 'admin-articles',
      title: 'articles',
      type: 'item',
      url: '/admin/articles',
      icon: icons.IconShoppingCart,
      breadcrumbs: false
    },
    {
      id: 'articles-waiters',
      title: 'Waiters',
      type: 'item',
      url: '/admin/waiters',
      icon: icons.IconUser,
      breadcrumbs: false
    },
    {
      id: 'articles-salaires',
      title: 'Salaires',
      type: 'item',
      url: '/admin/salaires',
      icon: icons.IconCoin,
      breadcrumbs: false
    },
    {
      id: 'articles-benefits',
      title: 'Benefits',
      type: 'item',
      url: '/admin/benefits',
      icon: icons.IconArrowNarrowUp,
      breadcrumbs: false
    },
    {
      id: 'admin-charge',
      title: 'Charge',
      type: 'collapse',
      icon: icons.IconArrowNarrowDown,
      children: [
        {
          id: 'admin-charge-products',
          title: 'Products',
          type: 'item',
          url: '/admin/charge/products',
          breadcrumbs: false
        },
        {
          id: 'admin-charge-factures',
          title: 'Factures',
          type: 'item',
          url: '/admin/charge/factures',
          breadcrumbs: false
        },
        {
          id: 'admin-charge-others',
          title: 'Others',
          type: 'item',
          url: '/admin/charge/othres',
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default admin;
