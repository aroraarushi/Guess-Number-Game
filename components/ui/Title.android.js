import { Text,StyleSheet,Platform } from "react-native"

function Title({children}){
   return <Text style={styles.title}>{children}</Text>
}

export default Title;

const styles= StyleSheet.create({
    title:{
        fontFamily:'open-sans-bold',
        fontSize:18,
        color:'#ddb52f',
        textAlign:'center',
        borderWidth: 2,
        borderColor:'#ddb52f',
        padding:12,
        maxWidth:'80%',
        width:300,
        alignSelf:'center'
    }

})