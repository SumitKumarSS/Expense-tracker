import {View,Text, TextInput, StyleSheet} from 'react-native'

export default function Label({text,config,style}){
    return(
        <View style={[styles.root,style]}>
            <Text style={styles.text}>{text}</Text>
            <TextInput style={[styles.textinput,config.multiline&&styles.description]} {...config} />
        </View>
    )
}

const styles=StyleSheet.create({
    root:{
        marginVertical:10,
        marginHorizontal:15,
    },
    text:{
        color:'white',
        marginBottom:8
    },
    textinput:{
        backgroundColor:'#EAE4E4',
        borderRadius:8,
        padding:5,

    },
    description:{
        height:100,
        paddingHorizontal:10,
        textAlignVertical:'top'
    }
})