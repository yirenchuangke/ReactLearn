import React, { Component } from "react";
import "./style//Xiaojiejie.css";
import XiaojiejieItem from "./XiaojiejieItem";
import axios from "axios";
import {CSSTransition , TransitionGroup} from 'react-transition-group'
export default class Xiaojiejie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://www.easy-mock.com/mock/5f8ee9c8bcca63581f44c27c/ReactDemo/xiaojiejie")
      .then((res) => {
        console.log(res.data.data);
        this.setState({
          list:res.data.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
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

  render() {
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
        <TransitionGroup>
        {this.state.list.map((item, index) => {
          return (
            <CSSTransition
            timeout={1000}
            classNames='boss-text'
            unmountOnExit
            appear={true}
            key={index+item}  
        >
            <XiaojiejieItem
              key={index}
              content={item}
              index={index}
              deleteItem={this.deleteItem.bind(this)}
            />
            </CSSTransition>
          );
        })}
        </TransitionGroup>
      </div>
    );
  }
}
