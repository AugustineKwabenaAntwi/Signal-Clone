import React from "react";

import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function ChatRoomItem(props) {
  // destructuring
  const {chatRoom} = props;


  const user = chatRoom.users[1]

  const navigation = useNavigation();

  const onPress = ()=>{
    navigation.navigate('ChatRoom', { id: chatRoom.id});
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.page}>
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:user.imageUri}}/>

      {/* if statement: if chatRoomMessages is not 0 render --- otherwise render null */}
     {chatRoom.newMessages && <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
      </View>}
      
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={1} style={styles.text}>{chatRoom.lastMessage.content}</Text>
      </View>
    </View>
  </TouchableOpacity>
  )
  
}
