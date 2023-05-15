/* eslint-disable prettier/prettier */
export const INITIAL_STATE = {
    loading: false,
    error: false,
    Data: [],
};

export const loadReducer = (state, action) => {
    switch (action.type){
        case 'Fetch_Start':
            return {
                loading: true,
                error: false,
                Data: [],
            };
        case 'Fetch_Success':
            return {
                loading: false,
                error: false,
                Data: action.payload,
            };
        case 'Fetch_Error':
            return {
                loading: false,
                error: true,
                Data: [],
            };
        default:
            return state;
    }
};
