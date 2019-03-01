/* eslint-disable no-unused-expressions */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import FollowBar from './FollowBar';

const { describe, it } = global;

describe('FollowBar', () => {
  it('should report lack of follow options', () => {
    const wrapper = mount(
      <div>
        <FollowBar
          icons={[]}
        />
      </div>
    );

    expect(wrapper.text()).to.match(/^No follow/);
  });

  it.skip('other test', () => {
    const wrapper = shallow(
      <FollowBar
        data={{
          posts: [],
        }}
      />
    );

    expect(wrapper.find('article').count).to.equal(1);
    expect(wrapper.text()).to.match(/afraid/);
  });
});
