import { Component } from 'react';
import getJWT from '../getJWT';

import Weavy from '../Weavy';
import WeavyApp from '../WeavyApp';
import { feedsAppKey, feedsAppName, spaceKey, spaceName } from './constants';

export default class WeavyFeeds extends Component {
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
