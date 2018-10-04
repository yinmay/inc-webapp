import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'
import { vote } from './../../../../actions/vote'
import { getUserAmount } from './../../../../actions/user'
import { showVoteModal } from '../../../../actions/app'


class VoteModal extends Component {
    constructor() {
        super()
        this.state = {
            inc_num: '',
        }
    }

    componentDidMount() {
        this.props.getUserAmount(this.props.auth.user_id)
    }

    handleINCVoteChange = (e) => {
        this.setState({ inc_num: Number(e.target.value) })
    }

    handleINCVoteSubmit = (e) => {
        e.preventDefault()

        if(!this.state.inc_num) {
            return
        }

        if(this.state.inc_num > 10000) {
            return alert('金额太大')
        }
        this.props.vote({
            vote_type: this.props.vote_type, 
            inc_num: this.state.inc_num,
            activity_id: this.props.voteData.current.activity_id ,
            vote_num: 0
        }).then((res) => {
            if (res.hasError) {
                alert(this.props.voteData.error)
            } else {
                this.props.showVoteModal(false)
            }
        })

        this.setState({ inc_num: ''})
    }

    render() {
        return (
            <div>
                <div className="toast"></div>
                <div className="vote-modal">
                    <div className="vote-modal-header">INC : {this.props.user.amount.available_inc}</div>
                    <form >
                        <input type="number" value={this.state.inc_num} placeholder="请输入INC数量" onChange={this.handleINCVoteChange} />
                        <br />
                        <button onClick={this.handleINCVoteSubmit}>确认投票</button>
                    </form>

                </div>

            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        voteData: state.vote,
        user: state.user,
        auth: state.auth,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        vote: (data) => dispatch(vote(data)),
        getUserAmount: (data) => dispatch(getUserAmount(data)),
        showVoteModal: (data) => dispatch(showVoteModal(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteModal)
