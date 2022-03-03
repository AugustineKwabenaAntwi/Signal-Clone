import { 
    View,
    Text,
    StyleSheet, 
    TextInput,
    TouchableOpacity,
    Platform,
    KeyboardAvoidingView
 } from 'react-native'
import React,{useState} from 'react'
import { SimpleLineIcons, Feather, MaterialCommunityIcons, AntDesign, Ionicons} from '@expo/vector-icons';


const MessageInput = () => {
    const[message,setMessage]=useState('');



    const sendMessage=()=>{
        console.warn('sending: ',message)

        setMessage('');
    }

    const onPlusClicked=()=>{
        console.warn("On plus clicked")
    }

    const onPress = ()=>{
       if (message){
           sendMessage();
       }else{
           onPlusClicked();
       }
    }

  return (
      
    <KeyboardAvoidingView style ={styles.root}  behavior = {Platform.OS == "ios"? "padding":"height"}>
        {/*keybordconfig on both android and ios*/}
      <View style = {styles.inputContainer}>
          <SimpleLineIcons style={styles.icon}name="emotsmile" size={24} color="#595959" />

          <TextInput 
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder='Message ...'
          />


          <Feather style={styles.icon}  name="camera" size={24} color="#595959" />
          <MaterialCommunityIcons style={styles.icon} name="microphone-outline" size={24} color="#595959" />
      </View>
      <TouchableOpacity onPress={onPress} style = {styles.buttonContainer}>
            {message?<Ionicons name="send" size={18} color="white" />:<AntDesign name="plus" size={24} color="white" />}
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    root:{
        flexDirection:'row',
        alignItems:'center'
    },
    inputContainer:{
        backgroundColor:'#f2f2f2',
        flex:1,
        marginRight:10,
        borderRadius:25,
        alignItems:"center",
        borderWidth:1,
        borderColor:"#dedede",
        flexDirection:'row',
        padding:10
    },
    input:{
        flex:1,
        marginHorizontal:5
    },
    icon:{
        marginHorizontal:5
    },
    buttonContainer:{
        width:40,
        height:40,
        backgroundColor:'#3777f0',
        borderRadius:25,
        justifyContent:"center",
        alignItems:"center"
    },
    buttonText:{
        color:'white',
        fontSize:35
    }
});

export default MessageInput