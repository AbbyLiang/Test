import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import './index.scss';

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  // eslint-disable-next-line react/sort-comp
  render() {
    return (
      <View className='idx-wrap'>
        <Button onClick={this.toMOseTracker.bind(this, 'pie')}>Pie</Button>
        <Button onClick={this.toMOseTracker.bind(this, 'bar')}>Bar</Button>
        <Button onClick={this.toMOseTracker.bind(this, 'line')}>Line</Button>
      </View>
    )
  }

  toMOseTracker(name) {
    switch (name) {
      case 'pie':
        Taro.navigateTo({
          url: '../pie-page/pie'
        });
        break;
      case 'bar':
        Taro.navigateTo({
          url: '../bar-page/bar'
        });
        break;
      case 'line':
        Taro.navigateTo({
          url: '../line-page/line'
        });
        break;
    }
  }
}
