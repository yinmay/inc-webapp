import React, { Component } from 'react';
import { getPlayerHonor, getPlayerRecord, getPlayerMatch, getPlayerTransfer } from './../../../actions/player'
import { connect } from 'react-redux'
import './index.css'
class Background extends Component {
    componentDidMount() {
        this.props.getPlayerRecord(this.props.id)
        this.props.getPlayerHonor(this.props.id)
        this.props.getPlayerMatch(this.props.id)
        this.props.getPlayerTransfer(this.props.id)
    }


    render() {
        return (
            <div className="player-background">
                <div className="player-background-item player-basic">

                    <div className='border'>
                        <h4 >基本资料</h4>

                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <th>国&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;籍</th>
                                <td>{this.props.player.info.country_of_birth_en}</td>
                            </tr>
                            <tr>
                                <th>出生日期</th>
                                <td>{this.props.player.info.date_of_birth}</td>
                            </tr>
                            <tr>
                                <th>出生地</th>
                                <td>{this.props.player.info.place_of_birth_en}</td>
                            </tr>
                            <tr>
                                <th>身&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;高</th>
                                <td>{this.props.player.info.height}</td>
                            </tr>
                            <tr>
                                <th>体&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;重</th>
                                <td>{this.props.player.info.weight}</td>
                            </tr>
                            <tr>
                                <th>身&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;价</th>
                                <td>{this.props.player.info.market_value}</td>
                            </tr>
                            <tr>
                                <th>所属运动队</th>
                                <td>{this.props.player.info.clubs_en}</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div className=" player-background-item player-record">
                    <div className='border'>
                        <h4 >球员履历</h4>
                    </div>
                    {this.props.player.record &&
                    <table>
                        <tbody>
                            <tr>
                                <th>赛季</th>
                                <th>俱乐部</th>
                                <th>号码</th>
                                <th>出场</th>
                                <th>进球</th>
                                <th>排名</th>
                            </tr>

                            
                            {
                                Object.values(this.props.player.record).map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.season}</td>
                                        <td>{item.club}</td>
                                        <td>{item.jersey_number}</td>
                                        <td>{item.apps}</td>
                                        <td>{item.goals}</td>
                                        <td>{item.rank}</td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                    }

                </div>

                <div className="player-background-item player-honor">


                    <div className='border'>
                        <h4 >个人荣誉</h4>
                    </div> 
                    {this.props.player.honor &&
                    <table>
                        <tbody>
                            <tr>
                                <th>年份</th>
                                <th>荣誉</th>
                            </tr>

                            {
                                Object.values(this.props.player.honor).map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.time_point}</td>
                                        <td>{item.content}</td>

                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                    }
                </div>
                <div className="player-background-item player-match">

                    <div className='border'>
                        <h4 >参加大赛</h4>
                    </div>
                    {this.props.player.match &&
                    <table>
                        <tbody>
                            <tr>
                                <th>赛事</th>
                                <th>年份</th>
                                <th>代表球队</th>
                                <th>号码</th>
                            </tr>

                            {
                                Object.values(this.props.player.match).map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.match}</td>
                                        <td>{item.season}</td>
                                        <td>{item.team}</td>
                                        <td>{item.jersey_number}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    }
                </div>
                <div className="player-background-item player-transfer">

                    <div className='border'>
                        <h4 >转会记录</h4>
                    </div>
                    {this.props.player.transfer && 
                    <table>


                        <tbody>
                            {Object.values(this.props.player.transfer).map((item, index) => (
                                <tr key={index}>
                                    <th>{item.date}</th>


                                    <th>签约{item.from_team}</th>

                                    <th>转会{item.to_team}</th>


                                    <th>转会费{item.fee}</th>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                    }
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
        getPlayerHonor: (data) => dispatch(getPlayerHonor(data)),
        getPlayerRecord: (data) => dispatch(getPlayerRecord(data)),
        getPlayerMatch: (data) => dispatch(getPlayerMatch(data)),
        getPlayerTransfer: (data) => dispatch(getPlayerTransfer(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Background)