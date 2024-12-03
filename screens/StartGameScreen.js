import { View,TextInput ,StyleSheet, Alert,Text,useWindowDimensions,KeyboardAvoidingView,ScrollView} from "react-native"
import PrimaryButton from "../components/ui/PrimaryButton"
import { useState } from "react"
import Title from "../components/ui/Title"
import Colors from "../constants/colors"
import Card from "../components/ui/Card"
import InstructionText from "../components/ui/InstructionText"

function StartGameScreen({onPickerNumber}){

    const [enteredNumber,setEnteredNumber] = useState('')
    const{width,height} = useWindowDimensions();

    function numberInputHandler(enteredText){
        setEnteredNumber(enteredText)
    }

    function resetInputHandler(){
        setEnteredNumber('')
    }

    function confirmInputHandler(){
        const choosenNumber = parseInt(enteredNumber)

        if(isNaN(choosenNumber) || choosenNumber<=0 || choosenNumber>99){
            Alert.alert('Invalid Number!',
            'Number has to be in between 1 and 99.',
            [{text:'Okay',style:'destructive',onPress:resetInputHandler}])
            return;
        }
       
        onPickerNumber(choosenNumber)
    }

    const marginTopDistance = height<380?30:100

    return(
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior="position">
                <View style={[styles.rootContainer,{marginTop:marginTopDistance}]}> 
                    <Title >Guess My Number</Title>
                    <Card>
                        <InstructionText>Enter a Number</InstructionText>
                        <TextInput 
                        style={styles.numberInput} 
                        maxLength={2}
                        keyboardType="number-pad"
                        onChangeText={numberInputHandler}
                        value={enteredNumber} />

                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )

}

const styles=StyleSheet.create({
    screen:{
        flex:1
    },
    rootContainer:{
        flex:1,
        marginTop:100,
        alignItems:'center',
    },
 
    
    numberInput:{
        height:50,
        width:50,
        fontSize:32,
        borderBottomWidth:2,
        borderBottomColor:'#ddb52f',
        color:'#ddb52f',
        marginVertical:8,
        fontWeight:'bold',
        alignSelf:'center',
        textAlign:'center'
    },
    buttonsContainer:{
        flexDirection:'row'
    },
    buttonContainer:{
        flex:1
    }
})

export default StartGameScreen