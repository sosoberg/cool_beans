import {createSlice} from "@reduxjs/toolkit"

const slice = createSlice({
    name: "User",
    initialState: {
        userName: ""
    },
    reducers:{
        setUserName: (User, action)=>{
            User.userName = action.payload
        }
    }
})
export const {setUserName} = slice.actions

export default slice.reducer