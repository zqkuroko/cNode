import axios from "axios";
import * as constans from "./constans";

const changeUser = () => ({
    type: constans.USER_UPDATA
});

const changeUserData = (result) => ({
    type: constans.USER_UPDATA_SUCC,
    data: result
});

const changeUserError = () => ({
    type: constans.USER_UPDATA_ERROR
});

export const getUserData = (id) => {
    return (dispatch) => {
        dispatch(changeUser());
        axios.get(`https://cnodejs.org/api/v1/user/${id}`).then((res) => {
            const result = res.data.data;
            dispatch(changeUserData(result));
        }).catch((error) => {
            dispatch(changeUserError());
        })
    }
};