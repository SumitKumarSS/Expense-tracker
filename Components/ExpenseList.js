import { FlatList,Pressable,StyleSheet,Text,View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export default function ExpenseList({data}){

    const navigation=useNavigation()
    const ListItem=(itemData)=>{
        const pressHandler=()=>{
            navigation.navigate("ExpenseOverview",
            expenseId=itemData.item.id)
        }
        const items=itemData.item
        const date=`${items.date.getDate()}-${items.date.getMonth()+1}-${items.date.getFullYear()}`
        return(
            <Pressable onPress={pressHandler} style={({pressed})=>pressed&&styles.pressed}>
            <View style={styles.root}>
                <View >
                    <Text style={styles.item}>{items.description}</Text>
                    <Text>{date}</Text>
                </View>
                <View style={styles.price}>
                    <Text>₹ {items.price}</Text>
                    </View>
            </View>
            </Pressable>
        )
    }


    return <FlatList data={data} renderItem={ListItem}/>
}

const styles=StyleSheet.create({
    root:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#D8D82F',
        margin:8,
        borderRadius:8,
        padding:8,
        justifyContent:'space-between',
        paddingHorizontal:12,
    },
    item:{
        marginBottom:5
    },
    price:{
        paddingHorizontal:15,
        paddingVertical:6,
        backgroundColor:'#ADAD50',
        borderRadius:8,
        minWidth:70,
        justifyContent:"center",
        marginRight:5
    },
    pressed:{
        opacity:0.75
    }
})