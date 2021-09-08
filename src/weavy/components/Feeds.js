import { Component } from 'react';
import getJWT from '../auth/getJWT';

import Weavy from '../weavy/Weavy';
import WeavyApp from '../weavy/WeavyApp';
import { feedsAppKey, feedsAppName, spaceKey, spaceName } from './constants';

export default class Feeds extends Component {
  render() {
    return (
      <Weavy jwt={getJWT}>
        <WeavyApp
          spaceKey={spaceKey}
          spaceName={spaceName}
          appKey={feedsAppKey}
          appName={feedsAppName}
          appType="posts"
          height={this.props.height}
        />
      </Weavy>
    );
  }
}
