import { View,Text,StyleSheet, Pressable } from "react-native"

function PrimaryButton({children,onPress}){
return(
    <View style={styles.container}>
        <Pressable 
        style={styles.outerContainer}
        android_ripple={{color:'#640233'}}
        onPress={onPress}
        >
                <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    </View>
)
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#72063c',
        paddingVertical:8,
        paddingHorizontal:16,
        borderRadius:28,
        elevation:2,
        margin:4
    },
    buttonText:{
        color:'white',
        textAlign:'center'
    },
    outerContainer:{
        borderRadius:28,
        overflow:'hidden',
        margin:4
    }
})

export default PrimaryButton