import React, { Component } from "react";
 
import TodoListUI from "./TodoListUI";
import store from "./store/index.js";

import {
  changeInputAction,
  addItemAction,
  deleteItemAction,
  getTodoList
} from "./store/actionCreators";
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();

    store.subscribe(this.storeChange); //订阅Redux的状态
  }

  componentDidMount() {
    store.dispatch(getTodoList())
    
  }

  storeChange = () => {
    this.setState(store.getState());
  };

  // 点击添加事件
  clickBtn = () => {
    store.dispatch(addItemAction());
  };

  // 输入框改变的时候的事件
  changeInputValue(e) {
    store.dispatch(changeInputAction(e.target.value));
  }

  // 删除事件
  deleteItem = (index) => {
    store.dispatch(deleteItemAction(index));
  };

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        changeInputValue={this.changeInputValue}
        clickBtn={this.clickBtn}
        list={this.state.list}
        deleteItem={this.deleteItem}
      />
    );
  }
}
