import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'

class RuleModal extends Component {
    componentDidMount() {
    }
    render() {
        return (
            <div className="rule-modal">
                <h1>活动规则</h1>
                <p>1、投票说明：对影响力指数第一名的球星进行影响力指数预测，预测未来10分钟的影响力指数上涨或者下跌，押票成功的一方，将按投票比例获得总票池的奖励，奖励将发放到账号（若开盘后，球星的影响力指数没有上涨也没有下跌，将把押票的INC和票返还给用户）。</p>
                <p>2、开盘频率：足球明星影响力指数每10分钟开盘一次。</p>
                <p>3、如何得票：可用INC直接投票，1INC等于1票，每个用户每盘最多可投10000票；也可通过分享小程序到微信群来获得投票，每人每天可通过分享获得1票，仅限世界杯期间（2018.06.14~2018.07.15)。</p>
                <p>4、支持充币：小程序登录成功后，会得到一个钱包地址，可以直接从交易所或INC钱包，把INC转入小程序的钱包地址。</p>
                <p>5、支持提币。用户可通过提币将赚得的INC提到自己的钱包保存，并自由地进行交易。</p>
                <p>6、此次活动由影链举办，活动真实有效，活动最终解释权归影链所有。</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        vote: state.vote,
    }
}

export default connect(mapStateToProps)(RuleModal)
