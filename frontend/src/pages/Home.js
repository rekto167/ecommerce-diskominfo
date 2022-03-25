import React, {useEffect} from 'react'
import {View, Text, Button,} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {

    useEffect(() => {
        async function getToken(){
            let token = await AsyncStorage.getItem('access_token');
            if(!token){
                navigation.navigate('Login');
            }
            console.log(token);
        }

        getToken();
    })

    return(
        <View>
            <Text>Welcome to My App</Text>
            <Button onPress={() => navigation.navigate('Login')} title="Coba" />
        </View>
    )
}

export default Home
