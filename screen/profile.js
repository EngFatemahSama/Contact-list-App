import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import ContactThumbnail from '../components/ContactThumbnail'
import DetailListItem from '../components/DetailListItem'

import colors from '../utils/colors'

export default function Profile({name, phone, email}){
    return (
        <View style={styles.container}>
            <View style={styles.thumbnailSection}>
                <ContactThumbnail name={name} phone={phone}/>

            </View>
            <View style={styles.detailSection}>
             
              <DetailListItem  icon="email" title="Email" subTitle={email}/>
              <DetailListItem  icon="phone" title="work" subTitle={phone} />
                   
            </View>   
        </View>
    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    thumbnailSection:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: colors.primary,
        borderBottomWidth:1 ,
        borderBottomColor: colors.secondry,
    },
    detailSection:{
        flex: 1,
        paddingTop:10,
    }
   
     
})