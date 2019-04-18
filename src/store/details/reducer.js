import * as constans from "./constans";

const defaultState = {
    loading: true,
    data: {
        author: {
            loginname: "",
            avatar_url: ""
        },
        replies: [],
        reply_count: 0,
        create_at: "",
        good: true
    }
};

export default function details(state = defaultState, action) {
    switch (action.type) {
        case constans.DETAILS_UPDATA:
            return Object.assign({}, state, {
                loading: true,
                data: state.data
            })
        case constans.DETAILS_UPDATA_SUCC:
            return Object.assign({}, state , {
                loading: false,
                data: action.data
            });
        case constans.DETAILS_UPDATA_ERROR:
            return Object.assign({}, state, {
                loading: true,
                data: state.data
            })
        default:
            return state;
    }  
};