import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import Modal from '../../../../components/Modal'
import VoteModal from '../../components/VoteModal'
import RuleModal from '../../components/RuleModal'
import { toLogin } from '../../../../util'
import { showVoteModal, showRuleModal } from '../../../../actions/app'
import { getCurrentVote, currentVote } from '../../../../actions/vote'
import './index.css'
import { Link } from 'react-router-dom'

class Vote extends Component {
    handleClickRise = () => {
        if (!this.props.auth.jwt_token) {
            toLogin()
            return
        }

        this.props.showVoteModal(true)
        this.setState({
            vote_type: 1
        })
    }

    handleClickDown = () => {
        if (!this.props.auth.jwt_token) {
            toLogin()
            return
        }

        this.props.showVoteModal(true)
        this.setState({
            vote_type: 2
        })
    }

    render() {
        return (
            <div className="vote-container">
                {
                    this.props.app.showVoteModal &&
                    <Modal modal={<VoteModal vote_type={this.state.vote_type} />} closeModal={this.props.showVoteModal} />
                }
                {
                    this.props.app.showRuleModal &&
                    <Modal modal={<RuleModal />} closeModal={this.props.showRuleModal} />
                }
                <div className="total-votes">
                    <h1>{moment.utc(this.props.vote.current.time_difference * 1000).format('mm:ss')}</h1>
                    <p>倒计时</p>
                </div>
                <div className="vote">
                    <div className="left" onClick={this.handleClickRise}>
                        投涨
                    </div>
                    <div className="right" onClick={this.handleClickDown}>
                        投跌
                    </div>
                </div>
                <div className="vote_sum">
                    <div className="left">
                        {this.props.vote.current.rise_sum}
                    </div>
                    <div className="right">
                        {this.props.vote.current.fail_sum}
                    </div>
                </div>
                <div className="rules" style={{ color: '#fff' }}>
                    <div className="icon" />
                        <span onClick={() => this.props.showRuleModal(true)} className="rules-vote" style={{ color: '#fff' }}>投票规则</span>
                        <span> | </span>
                        <Link to='/inc/me/voterecord'>
                            <span className="vote-records" style={{ color: '#fff' }}>投票记录</span>
                        </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        vote: state.vote,
        app: state.app,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showRuleModal: (data) => dispatch(showRuleModal(data)),
        showVoteModal: (data) => dispatch(showVoteModal(data)),
        getCurrentVote: (data) => dispatch(getCurrentVote(data)),
        currentVote: (data) => dispatch(currentVote(data)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Vote)
