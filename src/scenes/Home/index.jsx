import * as React from 'react'
import './index.css'
import { connect } from 'react-redux'
import VoteHeader from './components/VoteHeader'
import Chart from './components/Chart'
import Vote from './components/Vote'


class Home extends React.Component {
    componentDidMount () {
    }

    render() {
        return (
            <div className="home grow">
                <VoteHeader />
                <Chart />
                <Vote />
            </div>
        
        )
    }
}
const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

