import React, { Component } from 'react';
import Panel from './../../../components/Panel'
import Header from './../../../components/Header'
import Title from './../../../components/Title'
import './index.css'

export default class DepositRecord extends Component {
    constructor() {
        super()
        this.state = {
            deposit: [{
                "deposit_id": 3,
                "deposit_wallet": "be7f05040abefdf3",
                "deposit_amount": 233,
                "create_at": "2018-05-23T21:50:21.597970Z"
            },
            {
                "deposit_id": 2,
                "deposit_wallet": "be7f05040abefdf3",
                "deposit_amount": 233,
                "create_at": "2018-05-23T21:50:21.597970Z"
            },]
        }
    }
    TimeSlice = (timeStr) => {
        return  timeStr.slice(0, 10)
    }
    render() {
        return (
            <div className="deposit" id="deposit">
                <Header />
                <Title name="充币记录" />
                {this.state.deposit.map((item) => (
                    <Panel key={item.deposit_id} >
                        <div className="deposit-panel">
                            <div className="deposit-wallet">{item.deposit_wallet}</div>
                            <div className="deposit-amount">{item.deposit_amount}  INC</div>
                            <div className="deposit-time">{this.TimeSlice(item.create_at)}</div>
                        </div>
                    </Panel>
                ))}
            </div>
        )
    }
};
