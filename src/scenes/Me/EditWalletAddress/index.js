import React, { Component } from 'react';
import Title from './../../../components/Title'
import Header from './../../../components/Header'
import Panel from './../../../components/Panel'
import Button from './../Button'
import './index.css'
import { withdrawWalletAdd } from './../../../actions/withdraw'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
class EditWalletAddress extends Component {
    constructor() {
        super()
        this.state = {
            value: '',
        }
    }
    handleAddWalletAddress = (e) => {
        e.preventDefault()
        const id = this.props.match.params.id // url 中的参数
        debugger
        this.props.withdrawWalletAdd({user_id:localStorage.getItem('userId'),wallet:this.state.value})
    }
    handleAddWalletAddressChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <div className="edit-wallet-address">
                <Header />
                <Title name="编辑" />
                <form onSubmit={this.handleAddWalletAddress}>
                    <Panel>
                        <input 
                            type="text" 
                            value={this.state.value} 
                            placeholder="请输入您的钱包地址" 
                            onChange={this.handleAddWalletAddressChange} 
                        />
                    </Panel>
                    <Button name="保存" onSubmit={this.handleAddWalletAddress} />
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
        withdrawWalletAdd: (data) => dispatch(withdrawWalletAdd(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditWalletAddress)


