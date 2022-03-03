import * as React from 'react'

import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';
import chatRoomsData from '../assets/dummy-data/ChatRooms'

export default function HomeScreen() {
  return (
    <View style={styles.page}> 
      <FlatList
       data = {chatRoomsData}
       renderItem={({item:chatRoom})=> <ChatRoomItem chatRoom={chatRoom}/>}
       showsVerticalScrollIndicator = {false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  page:{
    backgroundColor:'white'
  }
})
  