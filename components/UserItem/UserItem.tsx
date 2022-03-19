import React from "react";

import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function UserItem(props) {
  // destructuring
  const {user} = props;


  const navigation = useNavigation();

  const onPress = ()=>{
    // create Chatroom with him
  }

  return (
    <TouchableOpacity onPress={onPress} style={styles.page}>
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:user.imageUri}}/>
      
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
  )
  
}
