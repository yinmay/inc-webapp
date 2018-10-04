import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import { ActionSheet, WingBlank, WhiteSpace, Button, Toast } from 'antd-mobile';

// fix touch to scroll background page on iOS
// https://github.com/ant-design/ant-design-mobile/issues/307
// https://github.com/ant-design/ant-design-mobile/issues/163
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}



export default class VoteIntroduction extends Component {
    constructor() {
        super();
        this.state = {
          clicked1: 'none',
        };
      }
    dataList = [
        { url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
        { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
        { url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
        { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
        { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' },
      ].map(obj => ({
        icon: <img src={`https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
        title: obj.title,
      }));
    
    showShareActionSheet = () => {
        ActionSheet.showShareActionSheetWithOptions({
          options: this.dataList,
          message: 'I am description, description, description',
        },
        (buttonIndex) => {
          this.setState({ clicked1: buttonIndex > -1 ? this.dataList[buttonIndex].title : 'cancel' });
          // also support Promise
          return new Promise((resolve) => {
            Toast.info('closed after 1000ms');
            setTimeout(resolve, 1000);
          });
        });
      }
  render() {
    return (
      <div>
         <NavBar
      mode="light"
      icon={<Icon type="left" />}
      onLeftClick={() => this.props.history.push('/')}
     
    ></NavBar>
    投票介绍
    <Button onClick={this.showShareActionSheet}>立即分享</Button>
      <WhiteSpace />
      </div>
    )
  }
};
