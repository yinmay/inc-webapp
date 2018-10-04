import React, { Component } from 'react';
import Title from './../../../components/Title'
import Header from './../../../components/Header'
import Panel from './../../../components/Panel'
import Button from './../../Me/Button'
import './index.css'
import { connect } from 'react-redux' 
import {withdraw,withdrawConfirm,getWithdrawRecord, getWalletAddr} from './../../../actions/withdraw'
import {getUserAmount} from './../../../actions/user'
import {cutString} from './../../../util'
import {Link} from 'react-router-dom'

 class Withdraw extends Component {
    constructor() {
        super()
        this.state = {
            withdraw_wallet_address: "0xE1f9e31D131Dc26ab49AccFF04B335E3f1191f46",
            withdraw_amount: 1.2,
            // inputInc: ''
            walletAddr:[]
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.submitWithdraw = this.submitWithdraw.bind(this)
        this.handleAllIn = this.handleAllIn.bind(this)
    }
    handleInputChange(e) {
        // const target = e.target
        // const value = target.value
        // const name = target.name
        // this.setState({
        //     [name]: value,
        // })
    }
    submitWithdraw(e){
        e.preventDefault();
        const data = new FormData(e.target);
        this.props.withdrawConfirm(data)
        

    }
    handleAllIn(e){
        e.preventDefault();
        // const amount = document.getElementByName("amount")
        this.setState({
            inputInc: this.props.user.amount.available_inc
        })
        // amount.value=this.props.user.amount.available_inc
    }
    componentDidMount() {
        this.props.getWithdrawRecord(localStorage.getItem('userId'))
        this.props.getUserAmount(localStorage.getItem('userId'))
        this.props.getWalletAddr(localStorage.getItem('userId'))

    }
    getDefaultAddr = (record) => {
        if(record.length === 0){
            return ''
        } else {
            for(let i=0;i<record.length;i++){
                if(record[i].is_default===true){
                    return record[i].withdraw_wallet_address
                }
            }
        }
    }
    
    render() {       
        return (
            <div className="withdraw">
                <Header />
                <Title name="提币" />
                <form className="withdraw-form" onSubmit={this.submitWithdraw}>
                    <Panel>
                        <label>
                            <Link to={'/inc/me/walletaddress'}>
                            钱包地址
                            <div className="goto-record"></div>
                            <input
                                type="text"
                                name="address"
                                // placeholder={cutString(`${this.state.defaultAddr}`,10)}
                                placeholder={this.getDefaultAddr(this.props.withdraw.walletAddr)}
                                onChange={this.handleInputChange}
                            />
                            </Link>
                        </label>
                        <br />
                        <label>币种
                            <input type="text" placeholder="INC" disabled="true" />
                        </label>
                        <br />
                        <label>数量
                            <input
                                type="number"
                                name="amount"
                                placeholder="请输入INC数量"
                                // min="100"
                                onChange={this.handleInputChange} 
                                value={this.state.inputInc}
                            />
                        </label>


                    </Panel>
                    <div className="form-bottom">

                        <div className="form-bottom-left">本次最多可转{this.props.user.amount.available_inc}</div>
                        <button className="form-bottom-right" onClick={this.handleAllIn}>全部转入</button>
                    </div>
                    <Button name="申请提币" />
                </form>
                <div className="width-role">
                    <h4>
                        提币规则
                    </h4>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
      withdraw: state.withdraw,
      user: state.user
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        withdrawConfirm: (data) => dispatch(withdrawConfirm(data)),
        getWithdrawRecord: (data) => dispatch(getWithdrawRecord(data)),
        getUserAmount: (data) => dispatch(getUserAmount(data)),
        getWalletAddr: (data) => dispatch(getWalletAddr(data))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Withdraw)