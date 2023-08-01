import {createSlice,configureStore} from '@reduxjs/toolkit'



const initialstate={
    allexpense:[]
}

const expense=createSlice({
    name:'expneses',
    initialState:initialstate,
    reducers:{
        setExpense:(state,action)=>{
            state.allexpense=action.payload.reverse()
        },
        addExpense:(state,action)=>{
            state.allexpense.push(action.payload.submit)
        },
        deleteExpense:(state,action)=>{
            state.allexpense = state.allexpense.filter(
                (el) => el.id !== action.payload.id)
        
        },
        updateExpense:(state,action)=>{
            const id = state.allexpense.findIndex(
                (expense) => expense.id === action.payload.id
            );
 
            // Gets current list of expenses and updates it
            const currentExpenses = [...state.allexpense];
            currentExpenses[id] = action.payload;
 
            state.allexpense = currentExpenses;
        }
    }
})


export const addExpense=expense.actions.addExpense
export const deleteExpense=expense.actions.deleteExpense
export const updateExpense=expense.actions.updateExpense
export const setExpense=expense.actions.setExpense

export default  store=configureStore({
    reducer:{expense:expense.reducer},
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
      })
})