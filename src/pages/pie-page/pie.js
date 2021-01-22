import React, { Component } from "react";
import { View } from "@tarojs/components";
import "./pie.scss";
import * as echarts from "../../components/ec-canvas/echarts";

let pieDataA = null;
export default class PieIndex extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ec: {
        onInit: function (canvas, width, height) {
          pieDataA = echarts.init(canvas, null, {
            width: width,
            height: height
          });
          canvas.setChart(pieDataA);
          return pieDataA;
        }
      }
    }
  }

  componentWillMount() {
    let dataA = ['A', 'B', 'C', 'D'];

    let dataValA = [
      { value: 1548, name: 'A' },
      { value: 535, name: 'B' },
      { value: 510, name: 'C' },
      { value: 634, name: 'D' }
    ];

    setTimeout(() => {
      pieDataA.setOption(this.getOption(dataA, dataValA));
    }, 100);

  }

  getOption(data, dataVal) {
    let option = {
      animation: false,
      tooltip: {
        trigger: 'item',
        formatter: '{c} ({d}%)'
      },
      legend: {
        // bottom: 0,
        left: 'center',
        data: data
      },
      color: ['#3AA1FF', '#36CBCB', '#E91D63', '#4ECB73'],
      series: [
        {
          type: 'pie',
          radius: '65%',
          center: ['50%', '50%'],
          data: dataVal
        }
      ]
    };
    return option;
  }


  render() {
    return (
      <View className='list'>
        <View className='mychart-con'>
          <ec-canvas ec={this.state.ec}></ec-canvas>
        </View>
      </View>
    )
  }
}