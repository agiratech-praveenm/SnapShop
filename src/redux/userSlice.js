import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        setUser: (state, action) => {
            localStorage.setItem('user', JSON.stringify(action.payload));
            return action.payload;
        },
        clearUser: () => {
            localStorage.removeItem('user');
            return [];
        },
    },
});

export const selectUser = (state) => state.user;
export const {setUser, clearUser} = userSlice.actions;
export default userSlice.reducer;