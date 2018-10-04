import React, { Component } from 'react';
import { List } from 'antd-mobile';
import { Link } from 'react-router-dom'
import './index.css'
import Title from './../../components/Title/index'
import { getPlayerList } from './../../actions/player'
import { connect } from 'react-redux'

class Player extends Component {

  componentDidMount() {
    this.props.getPlayerList()
  }

  indexOf(arr, item) {
    return (arr.indexOf(item) + 1)
  }
  render() {
    return (
      <div className='ranking-list'>
        <Title name={'INDEX'} />
        <div className="player-item-panel">
          <h4>INDEX TOP 20</h4>
          <ul>
            {this.props.player.list &&
              this.props.player.list.slice(0, 20).map((item, index) => (
                <li key={index} className="player-item">
                  <Link to={`/inc/player/${item.player_id}`} >
                    <img src={`${item.player_photo}`} alt="" style={{ height: 30, width: 30 }} />
                    <div className='player-name'>
                      {item.flower_name}
                      <div className='player-enName'>
                        {item.flower_name_en}
                      </div>
                    </div>
                    <div className="play-ranking">
                      {this.indexOf(this.props.player.list, item)}
                    </div>
                    <div className={'play-influence ' + (item.delta_influence_value > 0 ? 'font-green' : 'font-red')}>
                      {item.influence_value}
                    </div>
                    <div className="isUp-icon">
                      {
                        item.delta_influence_value > 0 ?
                          <div className='triangle-up' /> :
                          <div className='triangle-down' />
                      }
                    </div>
                  </Link>
                </li>

              ))}
          </ul>
        </div>
      </div>
    )
  }
};
const mapStateToProps = (state) => {
  return {
    player: state.player,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPlayerList: (data) => dispatch(getPlayerList(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)