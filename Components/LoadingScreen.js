import { View,ActivityIndicator, StyleSheet } from "react-native";

export default function Loading(){
    return (
        <View style={styles.load}>
            <ActivityIndicator size='large' color='white'/>
        </View>
    )
}

const styles=StyleSheet.create({
    load:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:'#9F54CB'
    }
})