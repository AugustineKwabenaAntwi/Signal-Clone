/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
 import { FontAwesome } from '@expo/vector-icons';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { NavigationContainer, DefaultTheme, DarkTheme, useNavigation } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';
 import * as React from 'react';
 import { ColorSchemeName, Text, View, Image, useWindowDimensions, TouchableOpacity } from 'react-native';
 
 import Colors from '../constants/Colors';
 import useColorScheme from '../hooks/useColorScheme';
 import ModalScreen from '../screens/ModalScreen';
 import NotFoundScreen from '../screens/NotFoundScreen';
 import HomeScreen from '../screens/HomeScreen';
 import UsersScreen from '../screens/UsersScreen';
 import TabTwoScreen from '../screens/TabTwoScreen';
 import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
 import LinkingConfiguration from './LinkingConfiguration';
 import { Feather } from '@expo/vector-icons';
 import { LogBox } from 'react-native';
 LogBox.ignoreLogs(['Warning: AsyncStorage']);
 
 import ChatRoomScreen from '../screens/ChatRoomScreen';
 
 export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
   return (
     <NavigationContainer
       linking={LinkingConfiguration}
       theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
       <RootNavigator />
     </NavigationContainer>
   );
 }
 
 /**
  * A root stack navigator is often used for displaying modals on top of all other content.
  * https://reactnavigation.org/docs/modal
  */
 const Stack = createNativeStackNavigator<RootStackParamList>();
 
 function RootNavigator() {
   return (
     <Stack.Navigator >
       <Stack.Screen
        name="Home"
        component={HomeScreen}  
        options={{ headerTitle: HomeHeader}} 
        />
       <Stack.Screen
        name="ChatRoom" 
        component={ChatRoomScreen} 
        options={{ headerTitle: ChatRoomHeader,headerBackVisible:false}}
        />
       <Stack.Screen
        name="UsersScreen" 
        component={UsersScreen} 
        options={{
          title:"Users",
        }}
        />
       <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
     </Stack.Navigator>
   );
 }
 
 const HomeHeader = (props)=>{
 
   const {width} = useWindowDimensions();
   const navigation = useNavigation();
 
   return(
     <View 
     style={{
      flexDirection:'row',
      justifyContent:'space-between',
      width:width-50,
      padding:10,
      marginRight:30,
      alignItems:'center'
 
      }}>
       <Image
        source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png'}}
        style={{width:30, height:30,borderRadius:30}}
        />
       <Text style={{flex:1,textAlign:"center",marginLeft:35,fontWeight:'bold'}}>Home</Text>
       <View style={{flexDirection:"row"}}>
         <Feather  name="camera" size={24} color="black" style={{marginHorizontal:10} }/>
         <TouchableOpacity onPress={()=>navigation.navigate('UsersScreen')}>
            <Feather name="edit-2" size={24} color="black" style={{marginHorizontal:10}} />
         </TouchableOpacity>
       </View>
     </View>
   )
 }
 const ChatRoomHeader = (props)=>{
   const {width} = useWindowDimensions();
 
   return(
     <View 
     style={{
      flexDirection:'row',
      justifyContent:'space-between',
      width,
      padding:10,
      marginRight:30,
      alignItems:'center'
 
      }}>
       <Image
        source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png'}}
        style={{width:30, height:30,borderRadius:30}}
        />
       <Text style={{flex:1,textAlign:"center",marginLeft:35,fontWeight:'bold'}}>{props.children}</Text>
       <View style={{flexDirection:"row"}}>
         <Feather  name="camera" size={24} color="black" style={{marginHorizontal:10} }/>
         <Feather name="edit-2" size={24} color="black" style={{marginHorizontal:10}} />
       </View>
     </View>
   )
 }