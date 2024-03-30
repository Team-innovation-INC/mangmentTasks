// material-ui
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

// styles
const LoaderWrapper = styled('div')({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1301,
  width: '100%'
});

// ==============================|| LOADER ||============================== //

function Loader({ _color }) {
  return (
    <LoaderWrapper>
      <LinearProgress color={_color || 'primary'} />
    </LoaderWrapper>
  );
}

Loader.propTypes = {
  _color: PropTypes.string.isRequired
};

export default Loader;
