import React, { Component } from 'react';


import echarts from 'echarts/lib/echarts' //必须
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import { getPlayerSocialTrending } from './../../../../actions/player'
import { connect } from 'react-redux'
import { withRouter } from 'react-router';

class Twitter extends Component {

    componentDidMount() {
        const id = this.props.match.params.id
        this.props.getPlayerSocialTrending({
            player_id: id, social_network: 'twitter'
        }).then(res => {
            let createAt = res.create_at.reverse();
            let followerCount = res.follower_count.reverse();
            let minNum = Math.min.apply(null,followerCount);
			let maxNum = Math.max.apply(null,followerCount);
            let final = minNum- (maxNum-minNum)/8
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('bar-twitter'));
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
                    left: 50,
                },
                calculable: true,
                legend: {
                    data: ['Twitter粉丝总数(万)'],
                    textStyle: {
                        color: '#D7D9DA'
                    },
                    itemHeight: 4,
                    left: 20,

                },
                xAxis: [
                    {
                        type: 'category',
                        data: createAt,
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
                        min: final,
                        axisLabel: {
                            formatter: function (value) {
                                value = (value / 10000).toFixed(2)
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
                        name: 'Twitter粉丝总数(万)',
                        type: 'bar',
                        data: followerCount,
                        itemStyle: {
                            normal: {
                                color: '#6696DE'
                            }
                        },
                        barWidth: 10
                        // barGap: 40,y
                    },
                ]
                // };
            });
        })

    }

    render() {

        return (
            <div style={{width:320,height:200,display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div id="twitter-chart">
                    <div id="bar-twitter" style={{ width: 300, height: 200, marginTop: 40 }}>
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
        getPlayerSocialTrending: (data) => dispatch(getPlayerSocialTrending(data)),
    }
  }
  
  const Twitterbar =  withRouter(connect(mapStateToProps, mapDispatchToProps)(Twitter))
  export default Twitterbar
