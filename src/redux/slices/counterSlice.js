import {createSlice} from "@reduxjs/toolkit";

let initialState={
    count:0
}

const counterSlice = createSlice({
    name: "counterSlice",
    initialState,
    reducers: {
        inc:(state,action)=>{
            state.count +=1
        },
        dec: state=>{
            state.count -=1
        },
        reset: state=>{
            state.count =0
        }
    }
})

const {actions,reducer:counterReducer} = counterSlice

const  counterActions={
    ...actions
}

export {
            counterActions,counterReducer
}