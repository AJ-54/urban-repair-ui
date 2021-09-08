import { Component } from 'react';
import getJWT from '../getJWT';

import Weavy from '../Weavy';
import WeavyApp from '../WeavyApp';
import { feedsAppKey, feedsAppName, filesAppKey, filesAppName, spaceKey, spaceName } from './constants';

export default class Feeds extends Component {
  render() {
    return (
      <Weavy jwt={getJWT}>
        <WeavyApp
          spaceKey={spaceKey}
          spaceName={spaceName}
          appKey={filesAppKey}
          appName={filesAppName}
          appType="files"
          height={this.props.height}
        />
      </Weavy>
    );
  }
}
