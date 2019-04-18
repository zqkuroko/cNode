import * as constans from './constans';
const defaultState = {
    loading: true,
    data: [],
    page: 1
};

export default function list(state = defaultState, action) {
    switch (action.type) {
        case constans.LIST_UPDATA:
            return Object.assign({}, state, {
                loading: true,
                data: state.data
            });
        case constans.LIST_UPDATA_SUCC:
            return Object.assign({}, state, {
                loading: false,
                data: action.data,
                page: action.page
            });
        case constans.LIST_UPDATA_REEOR:
            return Object.assign({}, state, {
                loading: true,
                data: state.data
            }); 
        default:
            return state;
    }
};