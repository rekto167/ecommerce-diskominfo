import React, {useEffect} from 'react'
import {View, Text, Button} from 'react-native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {

    useEffect(() => {
        async function getToken(){
            let token = await AsyncStorage.getItem('access_token');
            if(!token){
                navigation.navigate('Login');
            }
        }

        getToken();
    })

    const handleLogout = async () => {

        fetch('http://10.0.2.2:8000/api/logout', {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Authorization': await AsyncStorage.getItem('access_token')
            }
        })
        .then((response) => response.json())
        .then((json) => navigation.navigate('Login'))
    }

    return(
        <View>
            <Button onPress={handleLogout} title='Logout' />
        </View>
    )
}

export default Profile