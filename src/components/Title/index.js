import React, { Component } from 'react';
import './index.css'

export default class Title extends Component {
  render() {
    return (
      <div className="title">
        <h3>{this.props.name}</h3>
      </div>
    )
  }
};
