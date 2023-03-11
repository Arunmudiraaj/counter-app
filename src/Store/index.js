import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name : 'counter',
    initialState : {counter:0},
    reducers : {
        increment(state) {
            
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        decrease(state, action) {
            state.counter = state.counter - action.payload
        },
    }
})

const authSlice = createSlice({
    name : 'auth',
    initialState : {isAuthenticated: false},
    reducers : {
        login(state){
            state.isAuthenticated= true
        },
        logout(state){
            state.isAuthenticated=false
        }
    }
})

const store = configureStore({
    reducer : {counter : counterSlice.reducer, authentication : authSlice.reducer}
})

export const authActions = authSlice.actions
export const counterActions = counterSlice.actions
export default store