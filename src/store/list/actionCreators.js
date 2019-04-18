import axios from "axios";
import * as constans from "./constans";

const changeList = () => ({
  type: constans.LIST_UPDATA
})

const changeListData = (result, page) => ({
  type: constans.LIST_UPDATA_SUCC,
  data: result,
  page
});

const changeListError = (error) => ({
  type: constans.LIST_UPDATA_REEOR,
  data: error
})

export const getListData = (tab, page) => {
  return (dispatch) => {
    dispatch(changeList());
    axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}&limit=10`).then((res) => {
        const result = res.data.data;
        dispatch(changeListData(result, page));
    }).catch((error) => {
        dispatch(changeListError(error));
    })
  }
}