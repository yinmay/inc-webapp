import React, { Component } from 'react';

//element 表示滚动元素
//isloading 是否正在加载
// hasmore 是否有更多
//loadMore 获取更多方法
export default class Scroll extends Component {
    constructor(){
        super()
        this.state={
            flag:false,//减少事件绑定
        }
    }
    componentWillReceiveProps(nextProps){//父组件数据更新会触发子组件的数据更新（子组件先加载）
        if(nextProps.element && !this.state.flag ){
            nextProps.element.addEventListener('scroll',()=>{
                clearTimeout(this.timer)
                this.timer = setTimeout(()=>{//节流：滚动时减少判断
                    let{scrollTop,offsetHeight,scrollHeight}=nextProps.element
                    if(scrollTop + offsetHeight + offsetHeight  > scrollHeight ){
                            this.props.loadMore()
                    }
                },50)
            })
            this.setState({flag:true})
        }
    }
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
};
