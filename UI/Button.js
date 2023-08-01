import { Pressable, Text,View,StyleSheet } from "react-native";

export default function Buttons({children,onPress}){
    return(
        <Pressable onPress={onPress}style={({pressed})=>pressed&&styles.pressed}>
            <View style={styles.root}>
                <Text>{children}</Text>
            </View>
        </Pressable>
    )
}

const styles=StyleSheet.create({
    pressed:{
        opacity:0.75
    },
    root:{
        backgroundColor:'yellow',
        marginHorizontal:10,
        padding:10,
        minWidth:150,
        paddingHorizontal:50,
        borderRadius:5,
        alignItems:'center'
    }
})