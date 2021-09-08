import { Component } from 'react';
import getJWT from '../getJWT';

import Weavy from '../Weavy';
import WeavyApp from '../WeavyApp';
import { chatAppKey, chatAppName, feedsAppKey, feedsAppName, filesAppKey, filesAppName, spaceKey, spaceName } from './constants';

export default class Messenger extends Component {
  render() {
    return (
      <Weavy jwt={getJWT}>
        <WeavyApp
          spaceKey={spaceKey}
          spaceName={spaceName}
          appKey={chatAppKey}
          appName={chatAppName}
          appType="messenger"
          height={this.props.height}
        />
      </Weavy>
    );
  }
}
