import React, { Component } from 'react';
import Title from './../../../components/Title'
import Header from './../../../components/Header'
import Panel from './../../../components/Panel'
import './index.css'

export default class WithdrawRecord extends Component {
    constructor() {
        super()
        this.state = {
            widthdraw: [
                {
                    "withdraw_wallet_address": "0xE1f9e31D131Dc26ab49AccFF04B335E3f1191f46",
                    "created_at": "2018-05-23 15:01:24",
                    "withdraw_amount": 1.2,
                    "status": "pending",
                    "failed_type": "address_incorrect",
                    "failed_message": null
                },
            ]
        }
    }
    TimeSlice = (timeStr) => {
        return timeStr.slice(0, 10)
    }
    getStatus(status) {
        if (status === "pending") {
            return { __html: '<span style="color:#F8AB2E">审核中</span>' };
        }
        else if (status === "success") {
            return { __html: '<span style="color:#3DC47E">提币完成</span>' };
        }
        else {
            return { __html: '<span style="color:#FF4F52">提币失败</span>' };
        }
    }
    getFailedType(state, message) {
        if (state === "address_incorrect") {
            return '失败原因: 提现地址不正确'
        } else if (state === "account_abnormal") {
            return '失败原因: 账户异常'
        } else {
            return `失败原因: ${message}`
        }
    }
    handleLoadMore = () => {
        //加载10条数据

    }

    render() {

        return (
            <div className="withdraw-record">
                <Header />
                <Title name="提币记录" />
                {this.state.widthdraw.map((item, key) => (
                    <Panel key={key} >
                        <div className="withdraw-panel">
                            <div className="withdraw-wallet">{item.withdraw_wallet_address}</div>
                            <div className="withdraw-time">{this.TimeSlice(item.created_at)}</div>
                            <div className="withdraw-amount">({item.withdraw_amount}  INC)</div>
                            <div className="withdraw-status" dangerouslySetInnerHTML={this.getStatus(item.status) }>                                    
                            </div>

                        </div>
                        {/* <div>
                            {this.getFailedType(item.failde_type, item.failed_message)}
                            <div className="withdraw-status" dangerouslySetInnerHTML={this.getStatus(item.status)}>
                            </div>
                        </div> */}
                    </Panel>
                ))}
                {
                    this.state.withdraw && this.state.withdraw.length > 10 ?
                        <div className="load-more" onClick={this.handleLoadMore}>点击查看更多</div>
                        : null
                }

            </div>
        )
    }
};
