import counterReducer from './counter'
import authReducer from './auth'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
})

//action creator --> create an action object



export default store

//connect react-app to redux store (providing the store)







// const counterReducer = (state = initialState, action) => {


//     if (action.type === 'increment') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'decrement') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'increase') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//         }
//     }
//     if (action.type === 'toggle') {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter
//         }
//     }
//     return state
// }


