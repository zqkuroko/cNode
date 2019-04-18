import * as constans from "./constans";
const defaultState = {
    loading: true,
    data: {
        avatar_url: '',
        loginname: '',
        score: 0,
        create_at: '',
        recent_topics: [],
        recent_replies: []
    }
};

export default function user(state = defaultState, action) {
    switch (action.type) {
        case constans.USER_UPDATA:
            return Object.assign({}, state, {
                loading: true,
                data: state.data
            });
        case constans.USER_UPDATA_SUCC:
            return Object.assign({}, state, {
                loading: false,
                data: action.data
            });
        case constans.USER_UPDATA_ERROR:
            return Object.assign({}, state, {
                loading: true,
                data: state.data
            });
        default:
            return state;
    }
}