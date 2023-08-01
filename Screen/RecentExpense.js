import { useEffect } from 'react'
import ExpenseOutput from '../Components/ExpensesOuput'
import {useSelector} from 'react-redux'
import { getExpense } from '../Components/Request'
import { setExpense } from '../Store/Redux'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import Loading from '../Components/LoadingScreen'


export default function RecentExpense(){
    const[isFetching,setFetching]=useState(true)
    const dispatch=useDispatch()
    useEffect(() => {
        async function getExpenses() {
            const expenses = await getExpense();
            setFetching(false)
            dispatch(setExpense(expenses));
        }
        void getExpenses();

    }, []);
    const items=useSelector((state)=>state.expense.allexpense)

    if(isFetching){
        return <Loading/>
    }
    


    return <ExpenseOutput data={items} title='Last 7 Days' recent={7}/>
}