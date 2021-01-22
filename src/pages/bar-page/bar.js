import React, { Component } from 'react';
import { View } from '@tarojs/components';
import './bar.scss';
import * as echarts from '../../components/ec-canvas/echarts';

let barDataA = null;
export default class BarIndex extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ec: {
        onInit: function (canvas, width, height) {
          barDataA = echarts.init(canvas, null, {
            width: width,
            height: height
          });
          canvas.setChart(barDataA);
          return barDataA;
        }
      }
    }
  }

  componentWillMount() {

    const _xAxis = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const _series = [120, 200, 150, 80, 70, 110, 130];

    setTimeout(() => {
      barDataA.setOption(this.initBarOption(_xAxis, _series));
    }, 100);
  }

  initBarOption(_xAxis, _series) {
    let barOption = {
      xAxis: {
        type: 'category',
        data: _xAxis
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: _series,
        type: 'bar',
        showBackground: true,
        color: ['#3AA1FF']

      }]
    };
    return barOption;
  }


  render() {
    return (
      <View className='barWrap'>
        <View className='mychart-con'>
          <ec-canvas ec={this.state.ec}></ec-canvas>
        </View>
      </View>
    )
  }
}