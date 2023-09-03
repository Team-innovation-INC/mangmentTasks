import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// admin routing
const AdminArticales = Loadable(lazy(() => import('views/admin/Articales')));
const AdminWaiters = Loadable(lazy(() => import('views/admin/Waiters')));
const AdminSalaires = Loadable(lazy(() => import('views/admin/Salaires')));
const AdminBenefits = Loadable(lazy(() => import('views/admin/Benefits')));
const AdminChargeProducts = Loadable(lazy(() => import('views/admin/charge/Products')));
const AdminChargeFeatures = Loadable(lazy(() => import('views/admin/charge/Features')));
const AdminChargeOthers = Loadable(lazy(() => import('views/admin/charge/Others')));

// ==============================|| MAIN ROUTING ||============================== //

const AdminRoutes = {
  path: '/admin',
  element: <MainLayout />,
  requiredRole: 'admin',
  children: [
    {
      path: 'articles',
      element: <AdminArticales />
    },
    {
      path: 'waiters',
      element: <AdminWaiters />
    },
    {
      path: 'salaires',
      element: <AdminSalaires />
    },
    {
      path: 'benefits',
      element: <AdminBenefits />
    },
    {
      path: 'charge',
      children: [
        {
          path: 'products',
          element: <AdminChargeProducts />
        },
        {
          path: 'factures',
          element: <AdminChargeFeatures />
        },
        {
          path: 'othres',
          element: <AdminChargeOthers />
        }
      ]
    }
  ]
};

export default AdminRoutes;
