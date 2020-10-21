import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from "./actionTypes";
import axios from "axios";
export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value,
});

export const addItemAction = () => ({
  type: ADD_ITEM,
});

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  index,
});

export const getListAction = (data) => ({
  type: GET_LIST,
  data,
});

export const getTodoList = () => {
  return (dispatch) => {
    axios
      .get(
        "https://www.easy-mock.com/mock/5f8ee9c8bcca63581f44c27c/ReactDemo/xiaojiejie"
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        dispatch(
          getListAction([
            "早8点开晨会，分配今天的开发工作",
            "早9点和项目经理作开发需求讨论会",
            "晚5:30对今日代码进行review",
          ])
        );
      });
  };
};
