import React from "react";

import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import styles from "../components/ChatRoomItem/styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import Message from "../components/Message";
import chatRoomData from "../assets/dummy-data/Chats"
import MessageInput from "../components/MessageInput";

export default function ChatRoomScreen() {
  const route = useRoute();
  
  const navigation = useNavigation();
  navigation.setOptions({title:route.params?.id})
  
  console.warn("Displaying chat room : ",route.params?.id)



  return (
    <SafeAreaView style = {look.page}>
        <FlatList
        data={chatRoomData.messages}
        renderItem={({item})=> <Message message={item}/>}
        inverted
        style={{backgroundColor:'white'}}
        />
        <MessageInput />
    </SafeAreaView>
  )
}
// changed styles to look because of an unresolved bug
const look= StyleSheet.create({
   page:{
       backgroundColor:"white",
       flex:1
    } 
})
