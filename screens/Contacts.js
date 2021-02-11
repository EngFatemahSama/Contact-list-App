import React from 'react';
import { StyleSheet, View,
   FlatList,Text, TouchableOpacity
  } from 'react-native';

  import Colors from '../utils/colors';
  import ContactListItem from '../components/ContactListItem';
  import {Feather} from "@expo/vector-icons";

  const contacts =[
    { id: '1', name: 'Fatemah', phone: '0799144566', email: 'samafatemah@gmail.com'},
    { id: '2', name: 'Aqida', phone: '0797874857', email: 'aqida@gmail.com'},
    { id: '3', name: 'sana', phone: '077656678', email: 'sana@gmail.com'},
    { id: '4', name: 'shakoofa', phone: '079434069', email: 'shakoofa@gmail.com'},
    { id: '5', name: 'Wajiha', phone: '0794332010', email: 'wajiha@gmail.com'},
    { id: '6', name: 'Monica', phone: '078965000', email: 'monica@gmail.com'},
    { id: '7', name: 'Razia', phone: '072434012', email: 'razia@gmail.com'},
    { id: '8', name: 'shodabah', phone: '0782943023', email: 'shodabah@gmail.com'},
    { id: '9', name: 'Morsal', phone: '0745347600', email: 'morsal@gmail.com'},
  ]

  export default function Contacts({navigation}){
    return (
      <View>
        <FlatList
           data={contacts}
           keyExtractor={(item)=>{item.id}}
           renderItem={({item})=>{
             return <ContactListItem name={item.name} phone={item.phone} onPress={()=> navigation.navigate('Profile',{item:item})}/>
           }}
           />
           <TouchableOpacity style={styles.floatButton}  onPress={()=> navigation.navigate('CreateContact')}>
              <Text>
                <Feather name="plus" size={28} color="white"/>
              </Text>
               
           </TouchableOpacity>
      </View>
    )
  }
  const styles = StyleSheet.create({

    floatButton:{
      backgroundColor:'red',
      padding:20,
      borderRadius:'50%',
      position:'absolute',
      bottom:40,
      right:40,
    
    } 
  })