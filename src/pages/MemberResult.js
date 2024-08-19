import React from 'react';
import {SafeAreaView,Text,StyleSheet} from 'react-native';

function MemberResult({route}){
   const {user} = route.params;
    return(
        <SafeAreaView>
            <Text style={styles.message}>KAYIT TAMAMLANDI !</Text>
            <Text style ={styles.label}>Üye Adı: {user.userName}</Text>
            <Text style={styles.label}>Üye Soyadı: {user.userSurname}</Text>
            <Text style={styles.label}>Üye Yaş: {user.userAge}</Text>
            <Text style={styles.label}>Üye E posta: {user.userMail}</Text>
            <Text style= {styles.label}>Üye Memleketi: {user.userHometown}</Text>
       </SafeAreaView>
    )

}
   const styles = StyleSheet.create({
    label:{
        fontWeight:'bold',
        fontSize:25,
        margin:5,
    },
    message:{
        fontWeight:'bold',
        fontSize:50,
        textAlign:'center',
        padding:25,
        color:'pink',
    },
    container:{
        backgroundColor:'pink',
        fontStyle:'italic',

    }
   })

export default MemberResult;