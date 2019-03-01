/* eslint-disable global-require */

import React from 'react';
import { storiesOf } from '@storybook/react';
import FollowBar from './FollowBar';

storiesOf('Organisms/FollowBar', module)
  .add('with follows', () => (
    <FollowBar
      size="20"
      icons={[
        {
          url: 'https://linkedin.com/in/prometheas',
        },
        {
          url: 'https://github.com/prometheas',
        },
        {
          url: 'https://twitter.com/prometheas',
        },
      ]}
    />
  ))
  .add('no follows', () => (
    <FollowBar />
  ));
