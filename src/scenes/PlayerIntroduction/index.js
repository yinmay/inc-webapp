import React, { Component } from 'react';
import Title from './../../components/Title'
import Header from './../../components/Header'
import PlayerCard from './PlayerCard/index'
import Panel from './Panel/index'
import Background from './Background/index'
import Statistics from './Statistics/index'
import PlayerTab from './PlayerTab/index'
import Tendency from './Tendency/index'
import MarketAnalysis from './MarketAnalysis/index'
import {getPlayerInfo,getPlayerInfluence} from './../../actions/player'
import { connect } from 'react-redux'

import './index.css'

class PlayerIntroduction extends Component {
  componentDidMount() {
    const id = this.props.match.params.id // url 中的参数
    this.props.getPlayerInfo(id)
    this.props.getPlayerInfluence(id)
}

  render() {
    return (
      <div className='player-intro'>
        <Header />
        <Title name={'球星介绍'} />
        <PlayerCard>
          <div className='card-left'>
            <h4>{this.props.player.info.flower_name}</h4>
            <div className="sub-title">{this.props.player.info.flower_name_en}</div>
            <p>影响力 INDEX: <span className="index-number">{this.props.player.index}</span></p>
            <p className='renewTime'>更新时间: {this.props.player.info.update_at}</p>
          </div>
          <div className='card-right' >
            <img src={this.props.player.info.player_photo} alt="" />
          </div>
        </PlayerCard>

        <PlayerTab>
          <div name="背景介绍">
            <Background id={this.props.match.params.id}/>
          </div>
          <div name="技术统计">
            <Statistics id={this.props.match.params.id}/>
          </div>
          <div name="热度趋势">
            <Tendency />
          </div>
          <div name="舆情分析">
            <MarketAnalysis id={this.props.match.params.id}>
            </MarketAnalysis >
          </div>
        </PlayerTab>

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
    getPlayerInfo: (data) => dispatch(getPlayerInfo(data)),
    getPlayerInfluence: (data) => dispatch(getPlayerInfluence(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerIntroduction)