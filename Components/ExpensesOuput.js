import { View,StyleSheet } from "react-native";
import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";

export default function ExpenseOutput({data,title,recent}){

    const today=new Date()
    const Date7daysago= new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

    const newData=data.filter((data)=>data.date>=Date7daysago)
    return(
        <View style={styles.root}>
        <ExpenseSummary title={title} data={recent?newData:data}/>
        {recent?<ExpenseList data={newData}/>:<ExpenseList data={data}/>}
        </View>
    )
}

const styles=StyleSheet.create({
    root:{
        backgroundColor:'#9F54CB',
        flex:1
    }
})