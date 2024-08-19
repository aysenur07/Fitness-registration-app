import React from 'react';
import {TouchableOpacity,View,Text} from 'react-native';
import styles from './Button.style';

const Welcome = ({text,onPress})=>{
    return(
       <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style ={styles.text}>{text}</Text>
       </TouchableOpacity>

    );
}
 export default Welcome ;