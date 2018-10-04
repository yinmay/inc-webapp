import React, { Component } from 'react';
import Title from './../../../components/Title'
import Header from './../../../components/Header'
import './index.css'

export default class Reward extends Component {
  render() {
    return (
      <div className="reward">
      <Header />
        <Title name="我的奖励" />
        <div className="reward-background">
            <div className="reward-avatar">
            </div>
            <div className="user-name">May</div>

            <div className="reward-items">
                <div className="reward-inc">
                    <p>INC</p>
                    <div className="reward-amount">
                        <p className="reward-amount-inc">400</p>
                        <p className="reward-amount-cny">≈ CNY</p>
                    </div>
                    <div className="reward-button">提币
                    </div>
                </div>
            </div>
            <hr style={{height:1,border:0,borderTop:'1px dashed rgba(255,255,255,.1)'}} />

            <div className="reward-bottom">
                <h4>提币规则</h4>
                <p>
                1.提币时间: 提币时间不受限制，且凡在影响力指数参加活动获得的INC可累计，不清零。
                </p>
                <p>
                2.打币时间: 运营小姐姐们将在提交提币申请后3～5天内给各位老铁们打币，不要太着急哦！
                </p>
                <p>
                3.提币手续费: 因每次提币都会产生手续费，我们统一收取0.01%的手续费，手续费会直接在提币数量中扣除。                </p>
                <p>
                4.提币条件: 为减少多次提币产生不必要的手续费,首次提币需满足大于或等于100个INC的条件。
                </p>
                <p>
                4.提币条件: 为减少多次提币产生不必要的手续费,首次提币需满足大于或等于100个INC的条件。
                </p>
                <p>
                5.钱包地址: 请正确填写提币的钱包地址，如填写有误造成打币失败，用户自行承担责任，影链不做二次打币。

                </p>
                <p>
                6.提币审核: 用户提交提币请求后需经过审核,请耐心等待! 原则上，同一用户不能在“审核中”提交第二次提币申请，需等前一次提币完成后方可再次提币
                </p>
                <p>
                7.如发现恶意刷量的行为，直接取消该用户的活动资格。
                </p>
                <p>
                8.活动最终解释权归活动举办方影响力指数所有。
                </p>
        
            </div>
        </div>
      </div>
    )
  }
};
