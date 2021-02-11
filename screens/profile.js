import React from 'react';
import { StyleSheet, View, TextInput,Text, TouchableOpacity} from 'react-native';

import Colors from '../utils/colors';
import ContactThumbnail from '../components/ContactThumbnail';
import DetailListItem from '../components/DetailListItem';
 export default function Profile(props){
    const {route} = props
    const {item} = route.params
    const {name,phone,email}=item
    return (
        <View style={styles.container} >
            <View style={styles.thumbnailSection}>
                <ContactThumbnail name={name} phone={phone}/>
            </View>
            <View style={styles.detailSection}>
                <DetailListItem icon="email" title="Email" subTitle={email} />
                <DetailListItem icon="phone" title="Work" subTitle={phone} />
            </View>
        </View>
     )
 }

 const styles = StyleSheet.create({
     container: {
         flex: 1,
     },
     thumnailSection:{
         flex: 1,
         alignItems:'center',
         justifyContent: 'center',
         backgroundColor: Colors.primary,
         borderBottomWidth:1,
         boederBottomColor:Colors.secondry,
     },
     detailSection:{
         flex: 1,
         paddingTop:10,
     }
 })