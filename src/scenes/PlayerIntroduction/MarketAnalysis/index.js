import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom'
import NewsItem from './../../News/NewsItem'
import { getPlayerNews } from './../../../actions/player'
import { connect } from 'react-redux'
import './index.css'
class MarketAnalysis extends Component {
    componentDidMount() {
        this.props.getPlayerNews(this.props.id)
    }
    render() {
        return (
            <div>
                <div className="player-market-analysis">
                        <div className='border'>
                            <h4 >最新新闻</h4>
                        </div>
                        <div className="more-news-right">
                         <Link to={`/inc/news/${this.props.match.params.id}`}> 
                            更多新闻 &gt;&gt;
                         </Link> 
                        </div>
                        {this.props.player.news.data && this.props.player.news.data.slice(0,6).map((item,index)=>{
                            return   <NewsItem 
                                        key={index}
                                        day={item.day}
                                        month={item.month}
                                        content={item.content}
                                        like={item.like}
                                        dislike={item.dislike}
                                        like_per={item.like_per}
                                        dislike_per={item.dislike_per}
                                        id={item.id}
                                        chooseNews={this.chooseNews}
                                        />
                        })}
                      
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
        getPlayerNews: (data) => dispatch(getPlayerNews(data)),
    }
  }
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MarketAnalysis))
