import { Component } from 'react';
import getJWT from '../getJWT';

import Weavy from '../Weavy';
import WeavyApp from '../WeavyApp';
import { chatAppKey, chatAppName, feedsAppKey, feedsAppName, filesAppKey, filesAppName, spaceKey, spaceName, tasksAppKey, tasksAppName } from './constants';

export default class Tasks extends Component {
  render() {
    return (
      <Weavy jwt={getJWT}>
        <WeavyApp
          spaceKey={spaceKey}
          spaceName={spaceName}
          appKey={tasksAppKey}
          appName={tasksAppName}
          appType="tasks"
          height={this.props.height}
        />
      </Weavy>
    );
  }
}
