import {StyleSheet,View,} from 'react-native'
import IconButton from '../UI/IconButton'
import { useLayoutEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { deleteExpense } from '../Store/Redux'
import ExpenseForm from '../UI/Expenseform'
import { removeExpense } from '../Components/Request'

export default function ExpenseOverview({route,navigation}){

    let id=route.params
    const dispatch=useDispatch()
     useLayoutEffect(()=>{
        navigation.setOptions({
            title:id?'Edit Expense':'Add Expense'
        })
    })


    const items=useSelector((state)=>state.expense.allexpense)

    const trashHandler=()=>{
        const newitems=items.filter((e)=>e.id===route.params)
        id=newitems[0].id
        dispatch(deleteExpense({id}))
        removeExpense(id)
        navigation.goBack()
    }

    return(
    <View style={styles.root}>
        <ExpenseForm isEditing={id}/>
        
        <View style={styles.iconContainer}>
    {route.params&&<IconButton icon='trash' color={'white'} size={35} onPress={trashHandler}/>}
    </View>
    </View>
    )
}

const styles=StyleSheet.create({
    root:{
        backgroundColor:'#9F54CB',
        flex:1,
    },
    iconContainer:{
        margin:10,
        alignItems:'center',
        borderTopColor:'#38075B',
        borderTopWidth:2,
        padding:15
    },

})