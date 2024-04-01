import dashboard from './dashboard';
import waiter from './developer';
import admin from './projectOwner';
import other from './other';
import members from './members';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [dashboard, members, waiter, admin, other]
};

export default menuItems;
