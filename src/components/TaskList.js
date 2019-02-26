import * as React from 'react';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';

import { archiveTask, pinTask } from '../lib/redux';

import Task from './Task';
import { bindActionCreators } from 'redux';

const LoadingRow = () => (
  <div className="loading-item">
    <span className="glow-checkbox" />
    <span className="glow-text">
      <span>Loading</span> <span>cool</span> <span>state</span>
    </span>
  </div>
);

export function PureTaskList({ loading, tasks, onPinTask, onArchiveTask }) {
  const events = {
    onPinTask,
    onArchiveTask
  };

  const tasksInOrder = [
    ...tasks.filter(task => task.state === 'TASK_PINNED'),
    ...tasks.filter(task => task.state !== 'TASK_PINNED')
  ];

  return (
    <React.Fragment>
      {
        loading ?
          (
            <div className="list-items">
              <LoadingRow />
              <LoadingRow />
              <LoadingRow />
              <LoadingRow />
              <LoadingRow />
              <LoadingRow />
            </div>
          ) :
          tasks.length === 0 ?
            (
              <div className="list-items">
                <div className="wrapper-message">
                  <span className="icon-check" />
                  <div className="title-message">You have no tasks</div>
                  <div className="subtitle-message">Sit back and relax</div>
                </div>
              </div>
            ) :
            (
              <React.Fragment>
                <div className="list-items">
                  {tasksInOrder.map(task => <Task key={task.id} task={task} {...events} />)}
                </div>
              </React.Fragment>
            )
      }
    </React.Fragment>
  );
};

PureTaskList.propTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  onArchiveTask: PropTypes.func.isRequired,
  onPinTask: PropTypes.func.isRequired
};

PureTaskList.defaultProps = {
  loading: false
};

const mapStateToProps = ({ tasks }) => ({
  tasks: tasks.filter(task => task.state === 'TASK_INBOX' || task.state === 'TASK_PINNED')
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ onArchiveTask: archiveTask, onPinTask: pinTask }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PureTaskList);