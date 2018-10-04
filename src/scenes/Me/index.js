import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Title from './../../components/Title'
import Panel from './../../components/Panel'
import './index.css'
import { toLogin } from '../../util'
import {getUserAmount} from './../../actions/user'
import { connect } from 'react-redux'
class Me extends Component {

    toWithdraw=()=>{
        if(!this.props.auth.jwt_token){
            toLogin()
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id // url 中的参数
        this.props.getUserAmount(localStorage.getItem('userId'))
    }
    render() {
        return (
            <div className="me">
                <Title name="个人中心" />
                <Panel>

                    <div className="user-avatar"></div>
                    <button className="user-charge-inc">
                        <Link to={'/inc/me/deposit'}>充币</Link>
                    </button>
                    <div className="user-name">{!this.props.auth.jwt_token?'请登录':'May'}</div>
                    <div className="user-inc">
                        {/* <p className="user-inc-number">{this.props.user.amount.available_inc}</p> */}
                        <p className="user-inc-number">{this.props.user.amount.available_inc}</p>
                        <p>拥有inc</p>
                    </div>

                    <table className="panel-bottom">
                        <tbody>
                            <tr>
                                <td onClick={this.toWithdraw}><Link to={`/inc/me/withdraw`}>提币</Link></td>
                                {/* <img src="./images/goTo.svg" alt=""/> */}
                                <td className="goTo">	&gt;</td>
                            </tr>
                            <tr>
                                <td onClick={this.toWithdraw}><Link to={`/inc/me/withdrawrecord`}>提币记录</Link></td>
                                <td className="goTo">	&gt;</td>
                            </tr>
                            <tr>
                                <td onClick={this.toWithdraw}><Link to={'/inc/me/depositrecord'}>充币记录</Link></td>
                                <td className="goTo">	&gt;</td>
                            </tr>
                            <tr>
                                <td onClick={this.toWithdraw}><Link to={`/inc/me/voterecord`}>投票记录</Link></td>
                                <td className="goTo">	&gt;</td>
                            </tr>
                            <tr>
                                <td>影响力说明</td>
                                <td className="goTo">	&gt;</td>
                            </tr>
                        </tbody>
                    </table>

                </Panel>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.user,
      auth: state.auth
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        getUserAmount: (data) => dispatch(getUserAmount(data)),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Me)