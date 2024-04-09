// material-ui
import { Typography } from '@mui/material';

// project imports
import NavGroup from './NavGroup';
import menuItem from 'menu-items';
import WebService from 'api/useJwt';

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
  const userRole = WebService().getUserData()?.role?.roleName;

  const navItems = menuItem.items.map((item) => {
    switch (item.type) {
      case 'group':
        return (item.role === undefined || item.role.includes(userRole)) && <NavGroup key={item.id} item={item} />;
      default:
        return (
          <Typography key={item.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });

  return <>{navItems}</>;
};

export default MenuList;
