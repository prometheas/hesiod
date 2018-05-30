/* eslint-disable no-unused-expressions */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

import HomePage from './HomePage';

const { describe, it } = global;

describe('HomePage', () => {
  it('should render post listing when it has posts', () => {
    const wrapper = mount(
      <div>
        <HomePage
          data={{
            posts: [
              {
                title: 'Foo',
                author: 'John',
                dates: {
                  published: '2018-05-02T14:42:22',
                },
              },
            ],
          }}
        />
      </div>
    );

    expect(false).to.be.true;
    expect(wrapper.find('article').count).to.equal(1);
  });

  it('should apologize when it has no posts', () => {
    const wrapper = shallow(
      <HomePage
        data={{
          posts: [],
        }}
      />
    );

    expect(wrapper.text()).to.match(/afraid/);
  });
});
