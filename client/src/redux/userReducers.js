import {createSlice} from "@reduxjs/toolkit"

const slice = createSlice({
    name: "User",
    initialState: {
        userName: "",
        loggedIn: false
    },
    reducers:{
        setLoginState: (User, action)=>{
            User.userName = action.payload.userName
            User.loggedIn = action.payload.loggedIn
        }
    }
})
export const {setLoginState} = slice.actions

export default slice.reducer