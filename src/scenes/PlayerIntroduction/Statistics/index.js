import React, { Component } from 'react';
import { getPlayerStat } from './../../../actions/player'
import { connect } from 'react-redux'
import { isArray } from 'util';
import './index.css'
class Statistics extends Component {
  constructor() {
    super()
    this.state = {
      currentIndex: 0,
      currentValue: 0,
    }
  }
  componentDidMount() {
    this.props.getPlayerStat(this.props.id)
  }

  handleChange = (event) => {
    this.setState({ currentIndex: event.target.value })
  }

  render() {
    const stat = this.props.player.stat.keys
    const list = this.props.player.stat.list
    var i = this.state.currentIndex
    return (
      <div className="stat">
        <div className="select-items">
          <select value={this.state.currentIndex} onChange={this.handleChange}>
            {
              stat.map((item, index) =>
                <option value={index} key={index}>{item}</option>
              )
            }
          </select>
          {/* <div className="triangle"></div> */}
        </div>
        <div className="tab_item_wrap">
          {
            stat.length > 0 &&
            <table>
              <tbody>
                <tr>
                  <td>出场</td>
                  <td>出场时间</td>
                  <td>进球</td>
                  <td>进球助攻</td>
                </tr>
                <tr>
                  <td>{list[i].appear}</td>
                  <td>{list[i].minutes}</td>
                  <td>{list[i].goal}</td>
                  <td>{list[i].assists}</td>

                </tr>
                <tr>
                  <td>射门</td>
                  <td>射正</td>
                  <td>犯规</td>
                  <td>抢断</td>
                </tr>
                <tr>

                  <td>{list[i].shoot}</td>
                  <td>{list[i].shoot_exact}</td>
                  <td>{list[i].foul}</td>
                  <td>{list[i].steal}</td>

                </tr>
                <tr>
                  <td>越位</td>
                  <td>黄牌</td>
                  <td>红牌</td>
                  <td>解围</td>
                </tr>
                <tr>

                  <td>{list[i].offside}</td>
                  <td>{list[i].yellow}</td>
                  <td>{list[i].red}</td>
                  <td>{list[i].rescue}</td>

                </tr>
              </tbody>
            </table>
          }
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
    getPlayerStat: (data) => dispatch(getPlayerStat(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistics)