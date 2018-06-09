import React from 'react';
import PropTypes from 'prop-types';

class HomePage extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <React.Fragment>
        <header>
          Some stuff
        </header>
        <div>
          {data.posts && data.posts.length ?
            (
              <React.Fragment>
                {data.posts.map(post => (
                  <article>
                    <header>
                      <h1>
                        {post.title}
                      </h1>
                    </header>
                    <footer>
                      <span>Published {post.dates.published}</span>
                    </footer>
                  </article>
                ))}
              </React.Fragment>
            ) : (
              <React.Fragment>
                <p>No posts, I fear!</p>
                <pre>
                  {JSON.stringify(this.props)}
                </pre>
              </React.Fragment>
            )
          }
        </div>
        <footer>
          <pre>
            {JSON.stringify(this.props.data)}
          </pre>
        </footer>
      </React.Fragment>
    );
  }
}

HomePage.propTypes = {
  data: PropTypes.object,
};

export default HomePage;
