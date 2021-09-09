import { Card } from '@material-ui/core';
import { Component } from 'react';
import WeavyContext from './WeavyContext'

export default class WeavyApp extends Component {
  static contextType = WeavyContext;

  async createWeavyApp() {
    this.weavySpace = this.weavy.space({
      key: this.props.spaceKey,
      name: this.props.spaceName
    });

    this.weavyApp = this.weavySpace.app({
      key: this.props.appKey,
      type: this.props.appType,
      name: this.props.appName,
      container: this.el
    });
  }

  componentDidMount() {
    this.weavy = this.context.weavy;
    this.createWeavyApp();
  }

  shouldComponentUpdate(nextProps){
    // A key must change for the app to change
    var spaceChanged = nextProps.spaceKey !== this.props.spaceKey;
    var appChanged = nextProps.appKey !== this.props.appKey;
    return spaceChanged || appChanged;
  }

  componentDidUpdate(prevProps) {
    this.weavyApp.remove();
    this.createWeavyApp();
  }

  componentWillUnmount() {
    this.weavyApp.remove();
  };

  render() {
    const style = {
      height: this.props.height? this.props.height:"80vh",
      width: this.props.width? this.props.width:"100%",
    }
    return <Card><div className="weavy-container" ref={el => this.el = el} {...this.props} style={style}/></Card>;
  };
}
