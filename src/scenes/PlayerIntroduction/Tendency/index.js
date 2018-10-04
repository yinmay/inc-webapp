import React, { Component } from 'react';
import PlayerTab from './../PlayerTab'
import Weibar from './Weibo'
import WeiLine from './WeiLine'
import News from './NewsTrend'
import Insbar from './Ins'
import InsLine from './InsLine'
import Twitter from './Twitter'
import TwitterLine from './TwitterLine'
// import { getPlayerInfo } from '../../../actions/player'
import './index.css'
import { connect } from 'react-redux'


class Tendency extends Component {
    // componentDidMount(){
    //     let sns = this.props.player.info.tracked_sns
    //     console.log('sns',sns)
    //     this.setState({
    //         sns: sns
    //     })
    // }
    render() {
        if(this.props.player.info.tracked_sns){
            console.log(Object.values(this.props.player.info.tracked_sns).indexOf("Weibo") >0)

            return (
                <div className="player-tendency">
                    <div className="player-tendency-item">
                        <div className='border'>
                            <h4 >社区活跃趋势</h4>
                        </div>
                        <PlayerTab data={this.props.player.info.tracked_sns}>
                        {this.props.player.info.tracked_sns.map((item)=>{

                        
                          return  <div name={`${item}`}>
                            
                                <Twitter/>
                             <TwitterLine/>
                            
                              
                            </div>
                        })

                        }
                           
{/*                          
                            <div name="Instagram">
                                <Insbar/>
                                <InsLine/>
                            </div>
     
                            <div name="twitter">
                             
                            </div> */}
    
                        </PlayerTab>
                    </div>
    
                    <div className="player-tendency-item">
                        <div className='border'>
                            <h4 >资讯指数趋势</h4>
                        </div>
                        <News />
                    </div>
                </div>
            )
        }else{
            return null
        }
    }
}
const mapStateToProps = (state) => {
    return {
        player: state.player,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // getPlayerInfo:(data) => {dispatch(getPlayerInfo(data))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tendency)