import { Component } from 'react';
import getJWT from '../getJWT';

import Weavy from '../Weavy';
import WeavyApp from '../WeavyApp';
import { searchAppKey, searchAppName, spaceKey, spaceName } from './constants';

export default class WeavySearch extends Component {
  render() {
    return (
      <Weavy jwt={getJWT}>
        <WeavyApp
          spaceKey={spaceKey}
          spaceName={spaceName}
          appKey={searchAppKey}
          appName={searchAppName}
          appType="search"
          height={this.props.height}
        />
      </Weavy>
    );
  }
}
