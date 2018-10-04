import React, { Component } from 'react';
import Title from './../../../components/Title'
import Header from './../../../components/Header'
import Panel from './../../../components/Panel'
import Button from './../../Me/Button'
import './index.css'
import { getWithdrawRecord,setDefaultWallet,removeWallet, getWalletAddr } from './../../../actions/withdraw'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class WalletAddress extends Component {
    constructor() {
        super()
        this.state = {
            DefaultWallet:'',
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id // url 中的参数
        this.props.getWithdrawRecord(localStorage.getItem('userId'))
        this.props.getWalletAddr(localStorage.getItem('userId'))
    }
    handleWalletDefaultChange = (e) => {
        console.log(e.target.value)
        this.setState({
            DefaultWallet: e.target.value
        })
        this.props.setDefaultWallet({user_id: localStorage.getItem('userId'),wallet:`${this.state.DefaultWallet}`})
    }
    handleDeleteWallet = () => {
        this.props.removeWallet({user_id: localStorage.getItem('userId'),wallet:`${this.state.DefaultWallet}`})
    }
    
    
    render() {
        
        return (
            <div className="wallet-address">
                <Header />
                <Title name="钱包地址" />
                <form >
                    {this.props.withdraw.walletAddr.map((item, index) => {
                        return <Panel key={index}>
                                    <div className="wallet-address-code">{item.withdraw_wallet_address}</div>
                                    <div className="wallet-bottom">
                                        <div className="radio" >
                                                <input 
                                                    id={index}
                                                    name="wallet"
                                                    type="radio" 
                                                    value={item.withdraw_wallet_address} 
                                                    //不知道checked这边的逻辑
                                                    checked={item.is_default ? true : false}
                                                    onChange={this.handleWalletDefaultChange}
                                                />
                                                <label htmlFor={index} onClick={this.handleWalletDefaultChange} />
                                                <span>{item.is_default ? "默认地址" : "设为默认"} </span>
                                        </div>

                                        <div className="wallet-right">
                                            <Link to='/inc/me/edit/walletaddress'>
                                                <div className="edit"></div><span>编辑</span>   
                                            </Link>   
                                            <div className="delete" onClick={this.handleDeleteWallet}></div><span>删除</span>
                                        </div>
                                    </div>
                                </Panel>

                    })}
                    <Link to={`/inc/me/edit/walletaddress/:id`}>
                        <Button name="添加地址"></Button>
                    </Link>
                </form>

            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        withdraw: state.withdraw,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getWithdrawRecord: (data) => dispatch(getWithdrawRecord(data)),
        setDefaultWallet: (data) => dispatch(setDefaultWallet(data)),
        removeWallet: (data) => dispatch(removeWallet(data)),
        getWalletAddr: (data) => dispatch(getWalletAddr(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WalletAddress)