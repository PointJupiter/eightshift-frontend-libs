import React from 'react';

import { HeadingLevel } from './heading-level';

export default {
  title: 'Sidebar Components|Heading Level',
};

const defaultProps = {
  minLevel: 1,
  maxLevel: 6,
  selectedLevel: 2,
  onChange: '',
};

export const component = () => (
  <HeadingLevel
    {...defaultProps}
  />
);
