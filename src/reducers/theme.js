const themeReducer = (state = 'light', action) => {
    switch (action.type) {
        case 'UPDATE_THEME':
            return action.payload;
        default:
            return state;
    }
}

export default themeReducer