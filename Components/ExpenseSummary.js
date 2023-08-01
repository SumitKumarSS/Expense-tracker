import { View,Text,StyleSheet } from "react-native";

export default function ExpenseSummary({title,data}){
    const expenseSum=data.reduce((sum,expense)=>{
        return sum + +expense.price
    },0)
    return (
    <View style={styles.root}>
    <Text style={styles.text1}>{title}</Text>
    <Text style={styles.text2}>₹ {expenseSum}</Text>
    </View>
    )
}

const styles=StyleSheet.create({
    root:{
        backgroundColor:"#CFCC89",
        margin:8,
        marginTop:18,
        borderRadius:5,
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        elevation:18
    },
    text1:{
        color:'#E63A3A',
        fontWeight:'bold',
        fontSize:18
    },
    text2:{
        color:'#E63A3A',
        fontWeight:'bold',
        fontSize:18
    }
})