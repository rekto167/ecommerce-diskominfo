import React, {useEffect} from 'react'
import {View, Text, Button, Image, StyleSheet} from 'react-native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {

    useEffect(() => {
        async function getToken(){
            let token = await AsyncStorage.getItem('access_token');
            if(!token){
                navigation.navigate('Login');
            }

            return token;
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
        .then((json) => AsyncStorage.removeItem('access_token'))

        let token = await AsyncStorage.getItem('access_token')

        if(!token){
            navigation.navigate('Login')
        }

    }

    return(
        <View>
            <View style={styles.containerImage}>
                <Image style={styles.image} source={require('../assets/4595687.webp')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerImage:{
        // widht:25,
        // height:25,
    },
    image:{
        width:100,
        height:100
    }
})

export default Profile