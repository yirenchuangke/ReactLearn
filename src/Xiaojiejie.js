import React, { Component } from "react";
import "./style//Xiaojiejie.css";
import XiaojiejieItem from "./XiaojiejieItem";

export default class Xiaojiejie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: ["头部按摩", "精油推背"],
    };
  }
  // 输入框变化的时候
  inoutChange = () => {
    this.setState({
      inputValue: this.inputRef.value,
    });
  };
  // 添加服务
  addList = () => {
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

//   shouldComponentUpdate() {
//     console.log("1shouldComponentUpdate---组件发生改变前执行");
//     return true;
//   }
//   componentWillUpdate() {
//     console.log(
//       "2componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行"
//     );
//   }
//   componentDidUpdate(){
//     console.log('4componentDidUpdate----组件更新之后执行')
// }
  // componentWillMount() {
  //   console.log("componentWillMounts----组件将要挂载到页面的时刻");
  // }
  // componentDidMount() {
  //   console.log("componentDidMount----组件挂载完成的时刻执行");
  // }
  render() {
    console.log("3render---组件挂载中.......");

    return (
      <div className="warp">
        <div>
          <input
            type="text"
            value={this.state.inputValue}
            placeholder="请输入你想需要的服务"
            onChange={this.inoutChange}
            ref={(input) => {
              this.inputRef = input;
            }}
          />
          <button onClick={this.addList}>增加服务</button>
        </div>
        {this.state.list.map((item, index) => {
          return (
            <XiaojiejieItem
              key={index}
              content={item}
              index={index}
              deleteItem={this.deleteItem.bind(this)}
            />
          );
        })}
      </div>
    );
  }
}
