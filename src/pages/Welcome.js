import React from "react";
import { SafeAreaView,View,Text, StyleSheet } from "react-native";

import Button from '../components/Button';

 function Welcome({navigation}){
    function gotoMemberSign(){
          navigation.navigate('MemberSignScreen');
            }
    return(
        <SafeAreaView style={styles.container}>
            <Text style ={styles.header}>Green Fitness Salonu</Text>
            <Button text ="Üye Kaydı Oluştur" onPress ={gotoMemberSign}/>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
     flex:1,
     justifyContent:'center',

    },
    header:{
        
      textAlign:'center',
      margin:10,
      fontSize:30,
      fontWeight:'bold',
    },
})
export default Welcome;
