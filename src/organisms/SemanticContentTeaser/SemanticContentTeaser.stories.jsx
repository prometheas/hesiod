/* eslint-disable global-require */

import React from 'react';
import { storiesOf } from '@storybook/react';
import SemanticContentTeaser from './SemanticContentTeaser';

storiesOf('Organisms/SemanticContentTeaser', module)
  .add('basic', () => (
    <SemanticContentTeaser
      item={{
        id: 1,
        url: 'http://uncarved.prometheas.com/posts/a-post',
        title: 'This is a sample post',
        publishedOn: '20180507T073000Z'
      }}
    />
  ));
