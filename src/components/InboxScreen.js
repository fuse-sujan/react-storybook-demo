import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TaskList from './TaskList';

export function PureInboxScreen({ error, title }) {
  return (
    <React.Fragment>
      {
        error ? (
          <div className="page lists-show">
            <div className="wrapper-message">
              <span className="icon-face-sad" />
              <div className="title-message">Oh no!</div>
              <div className="subtitle-message">Something went wrong</div>
            </div>
          </div>
        ) : (
            <div className="page lists-show">
              <nav>
                <h1 className="title-page">
                  <span className="title-wrapper">{title}</span>
                </h1>
              </nav>
              <TaskList />
            </div>
          )
      }
    </React.Fragment>
  )
}

PureInboxScreen.propTypes = {
  title: PropTypes.string,
  error: PropTypes.string
};

PureInboxScreen.defaultProps = {
  title: 'Taskbox',
  error: null
};

const mapStateToProps = ({ error }) => ({
  error
});

export default connect(mapStateToProps)(PureInboxScreen);