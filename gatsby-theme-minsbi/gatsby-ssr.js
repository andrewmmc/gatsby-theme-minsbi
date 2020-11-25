/* eslint-disable react/prop-types, import/prefer-default-export */

import React from 'react';

// PrismJS theme
import 'prismjs/themes/prism.css';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';

import Theme from './src/components/Theme';

export const wrapPageElement = ({ element, props }) => {
  return <Theme {...props}>{element}</Theme>;
};

/* eslint-enable */
