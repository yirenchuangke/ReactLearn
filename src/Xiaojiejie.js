import React, { Component } from "react";
import "./style//Xiaojiejie.css";
import XiaojiejieItem from './XiaojiejieItem';
export default class Xiaojiejie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: ["头部按摩", "精油推背"],
    };
  }
  // 输入框变化的时候
  inoutChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };
  // 添加服务
  addList = () => {
    console.log(1);
    if (this.state.inputValue) {
      this.setState({
        list: [...this.state.list, this.state.inputValue],
        inputValue: "",
      });
    }
  };
  // 删除服务
  deleteItem = (index) => {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list,
    });
  };
  render() {
    return (
      <div className="warp">
        
        <div>
          <input
            type="text"
            value={this.state.inputValue}
            placeholder="请输入你想需要的服务"
            onChange={this.inoutChange}
          />
          <button onClick={this.addList}>增加服务</button>
        </div>
        {this.state.list.map((item, index) => {
          return (
            // <div
            //   key={index}
            //   onClick={this.deleteItem.bind(this, index)}
            //   className="list"
            // >
            //   {item}------------{index}
            // </div>
            <XiaojiejieItem key={index}></XiaojiejieItem>
          );
        })}
      </div>
    );
  }
}
