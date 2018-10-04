import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { newsVote } from '../../../actions/news'
import { getPlayerNews } from '../../../actions/player'
import { cutString } from './../../../util/index'
import './index.css'

class NewsItem extends Component {
    handleClick = (action) => {
        this.props.newsVote({
            action: action,
            news_id: this.props.id,
        }).then((res) => {
            if(!res.hasError) {
                this.props.getPlayerNews(this.props.match.params.id)
            }
        })
    }

    render() {
        return (
            <div className="news-list-item" onClick={this.choose}>
                <Link to={`/inc/player/news/${this.props.id}`} >
                    <div className="news-item" key={this.props.index}>
                        <div className="news-item-left">
                            <p className="news-item-date">{this.props.day}</p>
                            <p className="news-item-month">{this.props.month}</p>
                        </div>
                        <div className="news-item-content"> {cutString(this.props.content, 45)}</div>
                    </div>
                </Link>

                <div className="news-vote">
                    <div
                        className={'vote-like ' + (this.props.like ? 'button-color' : '')}
                        onClick={() => this.handleClick('like')}
                    >
                        <div
                            className={'vote-like-icon ' + (this.props.like ? 'solid-image' : 'line-image')} >
                        </div>
                        <div className="vote-like-text">
                            {this.props.like_per}
                        </div>
                    </div>
                    <div
                        className={'vote-unlike ' + (this.props.dislike ?  'button-color' : '')}
                        onClick={() => this.handleClick('dislike')}
                    >
                        <div className={'vote-unlike-icon ' + (this.props.dislike ? 'solid-image' : 'line-image')}>
                        </div>
                        <div className="vote-unlike-text">
                            {this.props.dislike_per}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newsVote: (data) => dispatch(newsVote(data)),
        getPlayerNews: (data) => dispatch(getPlayerNews(data)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewsItem))
