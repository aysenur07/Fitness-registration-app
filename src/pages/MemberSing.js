import React,{useState} from "react";
import {SafeAreaView,Alert} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
function MemberSign({navigation}){
    const [userName,setUserName]=useState(null);
    const [userSurname,setUserSurname]=useState(null);
    const [userAge,setUserAge]=useState(null);
    const[userMail,setUserMail]=useState(null);
    const[userHometown,setUserHometown]=useState(null);
    function handleSubmit(){
        if(!userName|| !userSurname || !userAge || !userMail || !userHometown){
            Alert.alert('Green Fitness Salonu','Bilgiler boş bırakılamaz !');
            return;
        }
        const user={
            userName,
            userSurname,
            userAge,
            userMail,
            userHometown,

        };
        navigation.navigate('MemberResultScreen', {user});
    }
    return(
        <SafeAreaView>
            <Input label="Üye Adı" placeholder="Üyenin ismini giriniz..."  onChangeText={setUserName}/>
            <Input label="Üye soyadı" placeholder="Üye soyismini giriniz..." onChangeText={setUserSurname}/>
            <Input label="Üye yaşı" placeholder="Üyenin yaşını giriniz..." onChangeText={setUserAge}/>
            <Input label =" Üye E-Posta" placeholder= "Üyenin e-posta adresini giriniz..." onChangeText={setUserMail}/>
            <Input label="Üye Memleketi" placeholder="Üyenin memleketini giriniz..."onChangeText={setUserHometown}/>
            <Button text="KAYDI TAMAMLA" onPress={handleSubmit}/>
        </SafeAreaView>
    )
}
export default MemberSign;