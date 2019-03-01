/* eslint-disable global-require */

import React from 'react';
import { storiesOf } from '@storybook/react';
import HomePage from './HomePage';

storiesOf('Pages/HomePage', module)
  .add('home', () => (
    <HomePage
      data={require('./HomePage.data')}
    />
  ));
