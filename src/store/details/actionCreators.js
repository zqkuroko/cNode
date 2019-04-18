import axios from "axios";
import * as constans from "./constans";

const changeDetail = () => ({
    type: constans.DETAILS_UPDATA
})

const changeDetailsData = (reuslt) => ({
    type: constans.DETAILS_UPDATA_SUCC,
    data: reuslt
});

const changeDetailsErrot = (error) => ({
    type: constans.DETAILS_UPDATA_ERROR
});

export const getDetailsData = (id) => {
    return (dispatch) => {
        dispatch(changeDetail());
        axios.get(`https://cnodejs.org/api/v1/topic/${id}`).then((res) => {
            const result = res.data.data;
            dispatch(changeDetailsData(result));
        }).catch((error) => {
            dispatch(changeDetailsErrot(error));
        })
    }
}