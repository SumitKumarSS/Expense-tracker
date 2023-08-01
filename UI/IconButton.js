import { Pressable,StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons'

export default function IconButton({icon,color,size,onPress}){
    return (
        <Pressable onPress={onPress} style={({pressed})=>pressed&&styles.pressed} >
            <Ionicons style={styles.icon} name={icon} color={color} size={size}/>
        </Pressable>
    )
}

const styles=StyleSheet.create({
    pressed:{
        opacity:0.75
    },
    icon:{
        marginHorizontal:12
    }
})