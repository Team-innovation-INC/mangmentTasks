import dashboard from './dashboard';
import waiter from './developer';
import admin from './projectOwner';
import other from './other';
import members from './members';
import integration from './integration';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [dashboard, integration, members, waiter, admin, other]
};

export default menuItems;
