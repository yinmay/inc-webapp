import * as React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../scenes/Home'
import Me from '../scenes/Me'
import Player from '../scenes/Player'
import VoteIntroduction from '../scenes/VoteIntroduction'
import News from '../scenes/News'
import NewsDetail from '../scenes/News/NewsDetail'
import Deposit from '../scenes/Me/Deposit'
import DepositRecord from './../scenes/Me/DepositRecord'
import Reward from './../scenes/Me/Reward'



class MainLayout extends React.Component {
    render() {
        return (
            <div className="app">
                <Switch>
                    <Route exact={true} path="/inc" component={Home} />
                    <Route exact={true} path={'/inc/voteintroduction'} component={VoteIntroduction} />
                    <Route exact={true} path={'/inc/player'} component={Player} />
                    <Route exact={true} path={'/inc/me'} component={Me} />
                    <Redirect from='/' to='/inc'/>
                </Switch>
                <Footer />
            </div>
        )
    }
}

const PrivateRoute = ({ component: Component, token, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => (token && token.length > 0)
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}

export default connect(mapStateToProps)(MainLayout)
