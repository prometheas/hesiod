import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const DATE_FORMAT = 'D MMM YYYY';

class SemanticContentTeaser extends React.Component {
  render() {
    const { item } = this.props;

    return (
      <article
        id="post-{post.id}"
        className="o--semantic-content-teaser"
      >
        <h1
          className="entry-title"
        >
          <a
            href="{item.url}"
            rel="bookmark"
          >
            {item.title}
          </a>
        </h1>

        {item.summary ? (
          <p
            className="summary"
          >
            {item.summary}
          </p>
        ) : null}

        {item.publishedOn ? (
          <time
            dateTime="{item.publishedOn}"
          >
            {moment(item.publishedOn).format(DATE_FORMAT)}
          </time>
        ) : null}

        {item.modifiedOn ? (
          <time
            dateTime="{item.modifiedOn}"
          >
            {moment(item.modifiedOn).format(DATE_FORMAT)}
          </time>
        ) : null}
      </article>
    );
  }
}

export default SemanticContentTeaser;

SemanticContentTeaser.propTypes = {
  item: PropTypes.objectOf({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    publishedOn: PropTypes.string,
    modifiedOn: PropTypes.string,
    authorshipInfo: PropTypes.object,
  }),
};
