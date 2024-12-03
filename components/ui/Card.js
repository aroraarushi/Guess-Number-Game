import { StyleSheet,View,Dimensions } from "react-native";

function Card({children}){
    return <View style={styles.card}>{children}</View>
}

export default Card;

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    card:{
        marginTop:deviceWidth<380?18:36,
        marginHorizontal:24,
        padding:16,
        backgroundColor:'#4e0329',
        borderRadius:8,
        elevation:4,
        width:'90%',
        alignItems:'stretch'
    },
})