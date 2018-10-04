import React, { Component } from 'react';


import echarts from 'echarts/lib/echarts' //必须
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import { connect } from 'react-redux'
import { withRouter } from 'react-router';

import { getPlayerNewsHistogram } from './../../../../actions/player'

class NewsTrend extends Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getPlayerNewsHistogram({ player_id: id }).then(res => {

      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main-news'));
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        grid: {
          show: false,
          height: 120,
          // top: 10,
          left: 60,
          // right: 10,
        },
        calculable: true,
        legend: {
          data: ['资讯总数'],
          textStyle: {
            color: '#D7D9DA'
          },
          itemHeight: 4,
          left: 20,
        },
        xAxis: [
          {
            type: 'category',
            data: this.props.player.newshistogram.create_at,
            axisLabel: {
              interval: 5,
              textStyle: {
                color: '#A9ACAE',
              },
              show: true
            },
            axisLine: {
              lineStyle: {
                color: '#3F464C' //坐标轴线颜色
              }
            }
          },

        ],
        yAxis: [
          {
            type: 'value',
            name: '',
            min: 0,
            axisLabel: {
              formatter: function (value) {
                return value
              },
              textStyle: {
                color: '#A9ACAE',
                align: 'right',
                fontSize: 10
              },
              show: true
            },
            splitLine: {
              show: false,
            },
            axisLine: {
              lineStyle: {
                color: '#3F464C' //坐标轴线颜色
              }
            }
          }
        ],
        series: [

          {
            name: '资讯总数',
            type: 'bar',
            data: this.props.player.newshistogram.news_count,
            itemStyle: {
              normal: {
                color: '#6696DE'
              }
            },
            barWidth: 10
            // barGap: 40,y
          }

        ]
      });
    })
  }


  render() {
    return (
      <div style={{width:300,height:220,display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div id="news-chart">
        <div id="main-news" style={{ width: 300, height:200, marginTop: 40 }}>
        </div>

      </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    player: state.player,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPlayerNewsHistogram: (data) => dispatch(getPlayerNewsHistogram(data)),
  }
}

const News = withRouter(connect(mapStateToProps, mapDispatchToProps)(NewsTrend))
export default News