import * as React from 'react'
import { connect } from 'react-redux'
import './index.css'

class VoteHeader extends React.Component {
    render() {
        const current = this.props.vote.current
        return (
            <div className="vote-header">
                <div className="left"  style={{backgroundImage: 'url(' + current.player_photo + ')'}}/>
                <div className="right">
                    <div className="title">
                        {current.flower_name}
                    </div>
                    <div className="sub-title">
                        {current.flower_name_en}
                    </div>
                </div>
                <div className="influence">
                    <p>影响力</p>
                    <h1>{current.influence_value}</h1>
                    <div className={current.delta_influence_value <= 0 ? 'down' : 'up'} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        vote: state.vote,
    }
}

export default connect(mapStateToProps)(VoteHeader)
