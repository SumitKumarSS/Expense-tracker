import { useState,useEffect } from "react";
import Label from "./textinput";
import Buttons from "./Button";
import { useDispatch,useSelector } from "react-redux";
import { StyleSheet, View,Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { addExpense,updateExpense } from "../Store/Redux";
import { storeExpense, changeExpense } from "../Components/Request";

export default function ExpenseForm({isEditing}){


    const expenseData=useSelector(state=>state.expense.allexpense)
    const selectedExpense = expenseData.find(
        (expense) => expense.id === isEditing
      );

    const [isdate,setDate]=useState(isEditing?selectedExpense.date.toISOString().slice(0,10):'')
    const [amount,setAmount]=useState(isEditing?selectedExpense.price:'')
    const [title,setTitle]=useState(isEditing?selectedExpense.description:'')

    const navigation=useNavigation()
    const dispatch=useDispatch()

    const DateHandler=(input)=>{
        setDate(input)
    }
    const AmountHandler=(input)=>{
        setAmount(input)
    }
    const titleHandler=(input)=>[
        setTitle(input)
    ]


    const confirmHandler=()=>{

        const submit={
            price:amount,
            date:new Date(isdate),
            description:title.trim()
        }


        const priceisValid=!isNaN(submit.price)&&submit.price>0
        const dateisValid=(submit.date.toString()!=='Invalid Date')
        const titleisValid=(submit.description.trim().length>0)

        if(!priceisValid||!dateisValid||!titleisValid)
        {
            Alert.alert("Nice try","Don't try again")
            return
        }
        if(!(!!selectedExpense)){
            dispatch(addExpense({submit}))
            storeExpense(submit)
            navigation.goBack()
            return
        }
        changeExpense(selectedExpense.id,submit)
        const update={...submit,id:selectedExpense.id}
        dispatch(updateExpense(update))
        navigation.goBack()
    }
    const cancelHandler=()=>{
        navigation.goBack()
    }

    return (
        <View>
            <Text style={styles.text}>Your Expense</Text>
            <View style={styles.firstline}>
        <Label style={styles.row} text='Amount' config={{
            keyboardType:'decimal-pad',
            onChangeText:AmountHandler,
            value:amount
        }}/>
        <Label style={styles.row} text='Date' config={{
            placeholder:'YYYY-MM-DD',
            onChangeText:DateHandler,
            value:isdate
        }
        }/>
        </View>
        <Label text='Description' config={{
            multiline:true,
            onChangeText:titleHandler,
            value:title
        }}/>
        <View style={styles.buttons}>
        <Buttons onPress={cancelHandler}>Cancel</Buttons>
        <Buttons onPress={confirmHandler}>{isEditing?'Update':'Add'}</Buttons>
        </View>
        </View>
    )
}


const styles=StyleSheet.create({
    firstline:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop:40
    },
    row:{
        flex:1
    },
    text:{
        paddingTop:30,
        textAlign:'center',
        fontSize:30,
        color:'white',
        fontWeight:"bold"
    },
    buttons:{
        flexDirection:'row',
        marginTop:20,
        marginBottom:8,
        justifyContent:'center'
    }
})
