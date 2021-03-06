import React from 'react'
import {
    View,
    Text,
    StyleSheet,
   
} from 'react-native'

import {MaterialIcons} from '@expo/vector-icons'
import colors from '../utils/colors'

export default function DetailListItem({icon, title, subTitle}){
     return(
        <View>
            <View style={styles.broderContainer}>
             <View style={styles.container}>
             <MaterialIcons name={icon} size={24}  color="black" />
            <View  style={styles.contentContainer}>
                <Text style={styles.title}>
                    {title}
                </Text>
                <Text style={styles.subTitle}>
                    {subTitle}
                </Text>
            </View>
             </View>
            </View>
        </View> 
     )
}
const styles = StyleSheet.create({

    broderContainer:{
        paddingLeft: 24
    },
    container: {
        flexDirection:'row',
        paddingVertical: 16,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.secondary
    },
    contentContainer:{
         paddingLeft:20 ,
    },
    title:{
        fontSize:20,
        fontWeight:'bold',

    },
    subTitle:{
       fontSize:16,
       color: colors.primary, 
    }


      

   
})