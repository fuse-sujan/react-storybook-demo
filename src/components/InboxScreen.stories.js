import * as React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';

import { defaultTasks } from './TaskList.stories';

import { PureInboxScreen } from './InboxScreen';

// A super-simple mock of a redux store
const store = {
  getState: () => {
    return {
      tasks: defaultTasks
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch')
};

storiesOf('InboxScreen', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .addDecorator(withKnobs)
  .add('default', () => <PureInboxScreen title={object('title', 'Title')} />)
  .add('defaultTitle', () => <PureInboxScreen />)
  .add('error', () => <PureInboxScreen error="Something" />)