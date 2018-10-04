import React, { Component } from 'react';
import Title from './../../components/Title';
import Header from './../../components/Header';
import Panel from './../../components/Panel'
import NewsItem from './NewsItem'
import { withRouter } from 'react-router-dom'
import './index.css'
import { getPlayerNews } from './../../actions/player'
import { connect } from 'react-redux'

class News extends Component {
    componentDidMount() {
        this.props.getPlayerNews(this.props.match.params.id)
    }

    render() {
        return (
            <div className="news-list-panel">
            <Header />
                <Title name='新闻列表' />
               
                    <div className="news-list">
                            {this.props.player.news.data.length > 0 
                                && this.props.player.news.data.map((item, index)=>{
                                return   <Panel >
                                            <NewsItem 
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
                                        </Panel>
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
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(News))
