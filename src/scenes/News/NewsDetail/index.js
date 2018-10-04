import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Title from './../../../components/Title';
import Header from './../../../components/Header';
import Panel from './../../../components/Panel';
import { getNewsDetail, newsVote } from './../../../actions/news'
import { connect } from 'react-redux'

import './index.css'

class NewsDetail extends Component {
  goTo = () => {
    window.location.href = `${this.props.news.detail.url}`
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getNewsDetail(id)
  }

  handleClick = (action) => {
    this.props.newsVote({
        action: action,
        news_id: this.props.match.params.id,
    })
    .then((res) => {
        if(!res.hasError) {
            this.props.getNewsDetail(this.props.match.params.id)
        }
    })
  } 

  render() {
    const item = this.props.news.detail
    console.log('id',this.props.match.params.id)

    return (
      <div className="news-detail">
        <Header />
        <Title name="新闻详情" />
        <Panel >
          <div className="news-item">
            <div className="news-item-left">
              <p className="news-item-date">{item.day}</p>
              <p className="news-item-month">{item.month}</p>
            </div>
            <div className="news-item-title"> {item.title}</div>
            <div className="news-item-subtitle">
              <span onClick={this.goTo}>来源：{item.source}</span>
              <span>&nbsp;&nbsp;{item.pub_time}</span>
            </div>
            <div className="news-item-content"> &nbsp;&nbsp;&nbsp;&nbsp;{item.content}</div>
          </div>
          <div className="news-vote-item">
            <div className="news-vote">
              <div
                className={'vote-like ' + (item.like ? 'button-color' : '')}
                onClick={() => this.handleClick('like')}
              >
                <div className="vote-like-text">赞</div>
                <div
                  className={'vote-like-icon ' + (item.like ? 'solid-image' : 'line-image')} >
                </div>
              </div>
              <div className="vote-bar">
                <div
                  className="vote-unlike-bar"
                  style={{ width: `${(item.dislike_per === 0 && item.like_per === 0)? 50 : item.dislike_per}%`, height: `(${item.dislike_per > 50 ? '30px' : '20px'})` }}
                >
                  {
                    <p>{`${item.dislike_per}%`}</p>
                  }
                </div>

                <div
                  className="vote-like-bar"
                  style={{ width: `${(item.like_per === 0 && item.dislike_per === 0) ? 50 : item.like_per}%`, height: `(${item.dislike_per > 50 ? '30px' : '20px'}` }}
                >
                  {
                    <p>{`${item.like_per}%`}</p>
                  }
                </div>
              </div>

              <div
                className={'vote-unlike ' + (item.dislike ? 'button-color' : '')}
                onClick={() => this.handleClick('dislike')}
              >
                <div className="vote-unlike-text">踩</div>
                <div className={'vote-unlike-icon ' + (item.dislike ? 'solid-image' : 'line-image')}>
                </div>
              </div>
            </div>

          </div>

        </Panel >
      </div>
    )
  }
};
const mapStateToProps = (state) => {
  return {
    news: state.news
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNewsDetail: (data) => dispatch(getNewsDetail(data)),
    newsVote: (data) => dispatch(newsVote(data)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewsDetail))