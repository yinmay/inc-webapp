import React, { Component } from 'react';
import Title from './../../../components/Title'
import Header from './../../../components/Header'
import Panel from './../../../components/Panel'
import Tab from './Tab'
import './index.css'
import { getVoteFinishedRecord, getVoteUnfinishedRecord } from './../../../actions/vote'
import { connect } from 'react-redux'

class VoteRecord extends Component {
    constructor() {
        super()
        this.state = {
            vote: [{
                "inc_num": 20,
                "vote_num": 0,
                "member_photo": null,
                "flower_name": "特林",
                "first_name_en": "Isaac Kiese",
                "last_name_en": "Thelin",
                "vote_time": "2018-05-21T00:01:09.621864Z",
                "vote_type": 1,
                "settled": true,
            }],
        }
    }
    componentDidMount() {
        this.props.getVoteFinishedRecord()
        this.props.getVoteUnfinishedRecord()
        console.log('this.props', this.props)
    }
    render() {
        return (
            <div className="vote-record">
                <Header />
                <Title name='投票记录' />
                <Tab>
                    <div name="未开奖">
                        {this.props.vote.unfinishedrecord.map((item, index) => {
                            return <Panel key={index}>
                                {/* <div className={(item.vote_type ===1)?'green-up':'red-down'}></div>
                                <p>{item.flower_name}</p>
                                <p>{item.first_name_en}</p>
                                <div>{item.member_photo}</div>
                                <div>{item.inc_num}</div>
                                <div>{item.vote_num}</div>
                                <div>{item.vote_time}</div> */}
                                <div className="star-info">
                                    <div className="star-icon"><img src={item.member_photo}/></div>
                                    <div className="star-name">
                                        <div className="star-cn-name">{item.flower_name}</div>
                                        <div className="star-en-name">{item.flower_name_en}</div>
                                    </div>
                                    <div className={(item.vote_type === 1) ? 'green-up' : 'red-down'}></div>
                                </div>
                                <div className="vote-num">投票指数: {item.inv_begin}</div>
                                <div className="vote-num">投票数量 {item.inc_num}INC</div>
                                <div className="vote-num">投票时间: {item.vote_time}</div>
                            </Panel>
                        })}
                    </div>
                    <div name="已开奖">
                        {this.props.vote.finishedrecord.map((item, index) => {
                            return <Panel key={index}>
                                {/* <div className={(item.vote_type ===1)?'green-up':'red-down'}></div>
                                <p>{item.flower_name}</p>
                                <p>{item.first_name_en}</p>
                                <div>{item.member_photo}</div>
                                <div>{item.inc_num}</div>
                                <div>{item.vote_num}</div>
                                <div>{item.vote_time}</div> */}
                                <div className="star-info">
                                    <div className="star-icon"><img src={item.member_photo}/></div>
                                    <div className="star-name">
                                        <div className="star-cn-name">{item.flower_name}</div>
                                        <div className="star-en-name">{item.flower_name_en}</div>
                                    </div>
                                    <div className={(item.vote_type === 1) ? 'green-up' : 'red-down'}></div>
                                </div>
                                <div className="vote-num">投票指数: {item.inv_begin}</div>
                                <div className="vote-num">开奖指数: {item.inv_end}</div>
                                <div className="vote-num">投票数量 {item.inc_num}INC</div>
                                <div className="vote-num">开奖时间: {item.finished_at}</div>
                                {(item.win_or_lose_amount > 0) ?
                                    <div className="vote-num up">盈利状况: {item.win_or_lose_amount}INC </div> :
                                    <div className="vote-num down">盈利状况: {item.win_or_lose_amount}INC</div>
                                }
                            </Panel>
                        })}
                    </div>

                </Tab>

            </div>
        )
    }
};
const mapStateToProps = (state) => {
    return {
        vote: state.vote,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getVoteFinishedRecord: (data) => dispatch(getVoteFinishedRecord(data)),
        getVoteUnfinishedRecord: (data) => dispatch(getVoteUnfinishedRecord(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteRecord)