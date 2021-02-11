import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity} 
from 'react-native';
import Colors from '../utils/colors';

export default function SearchScreen(){
    return (
        <View style={styles.searchContainer}>
            <TextInput placeholder="Search...."  style={styles.searchInput}/>
        </View>
    )
}
const styles = StyleSheet.create({
    searchContainer:{
        backgroundColor:Colors.secondary,
    },
    searchInput:{
        paddingVertical:20,
        paddingHorizontal:10,
        margin:20,
        backgroundColor:Colors.white,
        borderRadius:10,
    }
})