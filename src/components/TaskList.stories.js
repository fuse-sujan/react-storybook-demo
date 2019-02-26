import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { PureTaskList } from './TaskList';
import { task, actions } from './Task.stories';

export const defaultTasks = [
  { ...task, id: '1', title: 'Title 1' },
  { ...task, id: '2', title: 'Title 2' },
  { ...task, id: '3', title: 'Title 3' },
  { ...task, id: '4', title: 'Title 4' },
  { ...task, id: '5', title: 'Title 5' },
  { ...task, id: '6', title: 'Title 6' }
];

export const withPinnedTasks = [
  ...defaultTasks.slice(0, 5),
  { ...task, id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' }
];

storiesOf('TaskList', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('default', () => <PureTaskList tasks={defaultTasks} {...actions} />)
  .add('withPinnedTasks', () => <PureTaskList tasks={withPinnedTasks} {...actions} />)
  .add('loading', () => <PureTaskList loading tasks={[]} {...actions} />)
  .add('empty', () => <PureTaskList tasks={[]} {...actions} />)