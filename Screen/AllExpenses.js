import ExpenseOutput from '../Components/ExpensesOuput'
import {useSelector} from 'react-redux'



export default function AllExpenses(){

    const items=useSelector((state)=>state.expense.allexpense)
    return <ExpenseOutput data={items} title='Overall'/>
}