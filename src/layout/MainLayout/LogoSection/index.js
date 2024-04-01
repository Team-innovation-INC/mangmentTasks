import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui
import { ButtonBase } from '@mui/material';

// project imports
import config from 'config';
import Logo from 'ui-component/Logo';
import { MENU_OPEN } from 'store/actions';

import PropTypes from 'prop-types';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = ({ src }) => {
  const defaultId = useSelector((state) => state.customization.defaultId);
  const dispatch = useDispatch();

  const renderLogo = () => {
    if (src) {
      return <img src={src} alt="Logo" width={60} height={60} />;
    } else {
      return <Logo />;
    }
  };

  return (
    <ButtonBase disableRipple onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })} component={Link} to={config.defaultPath}>
      {renderLogo()}
    </ButtonBase>
  );
};

// Define PropTypes
LogoSection.propTypes = {
  src: PropTypes.string // src should be a string representing the image source
};

export default LogoSection;
