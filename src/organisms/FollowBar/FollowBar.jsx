import React from 'react';
import PropTypes from 'prop-types';

class FollowBar extends React.Component {
  render() {
    const {
      icons,
      size,
    } = this.props;

    return (icons && icons.length) ?
      (
        <ul className="organisms--follow-bar">
          {icons.map(currentFollow => (
            <li>
              Following at {currentFollow.url} with size {size || 'no size'}
            </li>
          ))}
        </ul>
      ) : (
        <p>No follows provided</p>
      );
  }
}

FollowBar.propTypes = {
  icons: PropTypes.array.isRequired,
  size: PropTypes.oneOf([PropTypes.number, PropTypes.string]),
};

export default FollowBar;
