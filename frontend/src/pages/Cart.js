import React, {useEffect} from 'react'
import {
    View,
    Text
} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage';

const Cart = ({navigation}) => {

    useEffect(() => {
        async function getToken(){
            let token = await AsyncStorage.getItem('access_token');
            if(!token){
                navigation.navigate('Login');
            }
        }
        getToken();
    })

    return (
        <View>
            <Text>Cart</Text>
        </View>
    )
}

export default Cart