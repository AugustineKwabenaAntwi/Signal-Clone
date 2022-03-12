import * as React from 'react'
import { Auth } from 'aws-amplify';

import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';
import chatRoomsData from '../assets/dummy-data/ChatRooms'

export default function HomeScreen() {

  const logOut = ()=>{
    Auth.signOut()
  };

  return (
    <View style={styles.page}> 
      <FlatList
       data = {chatRoomsData}
       renderItem={({item:chatRoom})=> <ChatRoomItem chatRoom={chatRoom}/>}
       showsVerticalScrollIndicator = {false}
      />
      <TouchableOpacity onPress={logOut} style={{backgroundColor:"red",height:70,margin:10,borderRadius:5,justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:"white"}}>LOG OUT</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  page:{
    backgroundColor:'white',
    height:750
  }
})
  