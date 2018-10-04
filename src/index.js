import 'babel-polyfill'
import 'url-search-params-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Switch, Route } from 'react-router-dom'
import history from './history'
import Helmet from 'react-helmet'
import { Provider, connect } from 'react-redux'
import 'moment/locale/zh-cn';
//import configureStore from './store'
import registerServiceWorker from './registerServiceWorker'
import './style/index.css'
import MainLayout from './routes/MainLayout'
import store from './store'
import PlayerIntroduction from './scenes/PlayerIntroduction'
import News from './scenes/News'
import NewsDetail from './scenes/News/NewsDetail'
import Deposit from './scenes/Me/Deposit'
import DepositRecord from './scenes/Me/DepositRecord'
import VoteRecord from './scenes/Me/VoteRecord'
import Withdraw from './scenes/Me/Withdraw'
import WalletAddress from './scenes/Me/WalletAddress'
import WithdrawRecord from './scenes/Me/WithdrawRecord'
import EditWalletAddress from './scenes/Me/EditWalletAddress'
import Login from './scenes/Login'

class App extends React.Component {

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <Helmet 
                    title="世界杯"
                    meta={[
                        { name: 'keywords', content: '' },
                        { name: 'description', content: '' }
                    ]}
                />
                <Switch>
                    <Route exact={true} path={'/inc/inc_auth_callback'} component={Login} />
                    <Route exact={true} path={'/inc/news/:id'} component={News} />
                    <Route exact={true} path={'/inc/player/news/:id'} component={NewsDetail} />
                    <Route exact={true} path={'/inc/me/deposit'} component={Deposit} />
                    <Route exact={true} path={'/inc/me/depositrecord'} component={DepositRecord} />
                    <Route exact={true} path={'/inc/me/voterecord'} component={VoteRecord} />
                    <Route exact={true} path={'/inc/me/withdraw'} component={Withdraw} />
                    <Route exact={true} path={'/inc/me/withdrawrecord'} component={WithdrawRecord} />
                    <Route exact={true} path={'/inc/me/walletaddress'} component={WalletAddress} />
                    <Route exact={true} path={'/inc/me/edit/walletaddress/:id'} component={EditWalletAddress} />
                    <Route exact={true} path={'/inc/player/:id'} component={PlayerIntroduction} />
                    <Route path="/" component={MainLayout} />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        app: state.app,
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={connect(mapStateToProps)(App)} />
        </Router>
    </Provider>, 
    document.getElementById('root')
)

registerServiceWorker()
