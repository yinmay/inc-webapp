import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'

import {getCurrentVote, currentVote} from '../../../../actions/vote'
import {getPlayerInfluence} from '../../../../actions/player'
import { cloneObject } from '../../../../util'
import echarts from 'echarts/lib/echarts' //必须
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/title';
import 'echarts/lib/chart/line'

let refreshInterval = null
let recallInterval = null

class Chart extends Component {
    componentDidMount () {
        const data = {
            user_id: this.props.auth.user_id
        }
        this.props.getCurrentVote(data).then((res) => {
            const current = cloneObject(res) 
            refreshInterval = setInterval(() => {
                current.time_difference = current.time_difference - 1
                this.props.currentVote(current)

                if (current.time_difference <= 0) {
                    clearInterval(refreshInterval)
                    window.location.reload()
                }
            }, 1000)

            recallInterval = setInterval(() => {
                this.props.getCurrentVote(data)
            }, 60000)

            this.props.getPlayerInfluence(res.member_id).then((res) => {
                // 基于准备好的dom，初始化echarts实例
                const myChart = echarts.init(document.getElementById('main'));
                // 绘制图表
                myChart.setOption({
                    tooltip : {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#6a7985'
                            }
                        }
                    },
                    legend: {
                        textStyle: {
                            color: '#fff'          //legend字体颜色 
                        }
                    },
                    grid: {
                        show: false,
                        top: 10,
                        height: 220,
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data:  res.create_at,
                        // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],

                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#424956',
                            }
                        },
                    },
                    yAxis: {
                        type: 'value',
                        min: 60,
                        splitLine: {
                            show: true,
                            lineStyle: {
                                // 使用深浅的间隔色
                                color: ['#424956']
                            }
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#424956',
                            }
                        }
                    },
                    series: [{
                        type: 'line',
                        data:   res.influence_value,
                        // data:   [820, 932, 901, 934, 1290, 1330, 1320],

                        smooth: true,
                            show: false,
                            itemStyle: {
                                normal: {
                                    color: 'rgb(255, 70, 131)',
                                    lineStyle:{  
                                        color:'#E6813F',  
                                    }
                                },
                                
                            },
                            areaStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#E6813F'
                                    }, 
                                    {
                                        offset: 1,
                                        color: '#474D51'
                                    }])
                                }
                            },
                    }]
                });
            })
        })
    }

    componentWillUnmount() {
        clearInterval(refreshInterval)
        clearTimeout(recallInterval)
    }

    render() {
        return (
            <div id="home-chart">
                <div id="main" style={{ width: 354, height: 314 }} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        vote: state.vote,
        player: state.player,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getCurrentVote: (data) => dispatch(getCurrentVote(data)),
        currentVote: (data) => dispatch(currentVote(data)),
        getPlayerInfluence: (data) => dispatch(getPlayerInfluence(data)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Chart)
