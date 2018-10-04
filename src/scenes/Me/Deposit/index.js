import React, { Component } from 'react';
import Title from './../../../components/Title'
import Header from './../../../components/Header'
import Button from './../Button'
import Panel from './../../../components/Panel/index'
import './index.css'
import { getUserDepositAddr } from './../../../actions/user'
import { connect } from 'react-redux'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import QRcode from 'qrcode.react'

class Deposit extends Component {
  constructor() {
    super()
    this.state = {
      copied: false
    }
  }
  componentDidMount() {
    this.props.getUserDepositAddr(localStorage.getItem('userId'))
  }
  onCopy = () => {
    this.setState({ copied: true });

  }
  render() {
    return (
      <div className="deposit">
        <Header />
        <Title name="充币" />
        <Panel>
          <div className="qr-code">
            <div className="canvas"><QRcode value="改成deposit_addr_qr就OK" bgColor="#ffffff" fgColor="#000000"></QRcode></div>
            {this.props.user.address.deposit_addr}
          </div>
          <hr style={{ height: 1, border: 0, borderTop: '1px dashed rgba(255,255,255,.8)',position:'absolute',top:320,left:16 }} />
          <div className="deposit-text">请将INC转入当前的钱包地址</div>
        </Panel>
        <CopyToClipboard text={this.props.user.address.deposit_addr} onCopy={this.onCopy}>
          <Button name="复制地址" />

        </CopyToClipboard>
        {this.state.copied ? 
          <div className="copied-success">复制成功</div>
            : null}
        {/* </div> */}
        <br />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserDepositAddr: (data) => dispatch(getUserDepositAddr(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Deposit)
