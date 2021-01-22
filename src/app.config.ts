export default {
  pages: [
    'pages/index/index',
    'pages/pie-page/pie',
    'pages/line-page/line',
    'pages/bar-page/bar',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  compile: {
    exclude: ['src/components/ec-canvas/echarts.js']
  }
}
