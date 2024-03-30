import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../../ui-component/Loader';
// Default export defines the component title in Storybook
export default {
  title: 'generators/Loader',
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    color: {
      description: 'Specifies the color of the loader.',
      options: ['primary', 'secondary', 'success', 'warning', 'info', 'error'],
      control: { type: 'select' }
    }
  }
};

// Story for the Loader component
export const Default = ({ color }) => <Loader _color={color} />;
export const Primary = () => <Loader _color={'primary'} />;
export const Secondary = () => <Loader _color={'secondary'} />;
export const Success = () => <Loader _color={'success'} />;
export const Warning = () => <Loader _color={'warning'} />;
export const Info = () => <Loader _color={'info'} />;
export const Error = () => <Loader _color={'error'} />;

Default.propTypes = {
  color: PropTypes.string
};
Default.args = {
  color: 'primary'
};
