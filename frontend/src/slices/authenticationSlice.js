import { createSlice } from "@reduxjs/toolkit";

const initilState = {
    userInfo: localStorage.getItem('userInfo')? JSON.parse(localStorage.getItem('userInfo')) : null,
}

const authenticationSlice = createSlice({

    name: 'authentication',
    initialState: initilState,
    reducers: {
        setUserCredentials: (state, action) => {
            state.userInfo = action.payload;
            localStorage.setItem('userInfo', JSON.stringify(action.payload));
        },
        logout: (state, action) => {
            state.userInfo = null;
            localStorage.removeItem('userInfo');
        }
    }
});
export const { setUserCredentials, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;