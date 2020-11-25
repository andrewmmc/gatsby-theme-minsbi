import React from 'react';
import { node } from 'prop-types';
import { ThemeProvider } from 'styled-components';

import light from 'themes/light';

const Theme = ({ children, ...props }) => {
  return (
    <ThemeProvider theme={light} {...props}>
      {children}
    </ThemeProvider>
  );
};

Theme.propTypes = {
  children: node.isRequired,
};

export default Theme;
