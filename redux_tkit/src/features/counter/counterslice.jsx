import { createSlice } from '@reduxjs/toolkit'


//just creating a slice for counter feature
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        reset : (state) => {
            state.value = 0
        }
    }
})

//exporting actions
export const { increment, decrement, incrementByAmount , reset} = counterSlice.actions

//exporting reducer
export default counterSlice.reducer