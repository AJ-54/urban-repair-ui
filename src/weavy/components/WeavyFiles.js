import { Component } from 'react';
import getJWT from '../getJWT';

import Weavy from '../Weavy';
import WeavyApp from '../WeavyApp';
import { filesAppKey, filesAppName, spaceKey, spaceName } from './constants';

export default class WeavyFiles extends Component {
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
