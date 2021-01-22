import React, { Component } from 'react';
import { View } from '@tarojs/components';
import './line.scss';
import * as echarts from '../../components/ec-canvas/echarts';

let lineDataA = null;

export default class LineIdx extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ec: {
        onInit: function (canvas, width, height) {
          lineDataA = echarts.init(canvas, null, {
            width: width,
            height: height
          });
          canvas.setChart(lineDataA);
          return lineDataA;
        }
      }
    }
  }

  componentWillMount() {


    const _xAxisData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const _seriesData = [820, 932, 901, 934, 1290, 1330, 1320];

    setTimeout(() => {
      lineDataA.setOption(this.initLineOption(_xAxisData, _seriesData));
    }, 100);


  }

  initLineOption(XAxisData, seriesData) {
    let lineOption = {
      xAxis: {
        type: 'category',
        data: XAxisData
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: seriesData,
        type: 'line',
        smooth: true,
        color: ['#3AA1FF']
      }]
    };
    return lineOption;
  }

  render() {
    return (
      <View className='lineWrap'>
        <View className='mychart-con'>
          <ec-canvas ec={this.state.ec}></ec-canvas>
        </View>
      </View>
    )
  }
}