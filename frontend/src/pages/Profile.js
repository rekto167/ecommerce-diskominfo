import React, {useState, useEffect} from 'react'
import {View, Text, Button, Image, StyleSheet} from 'react-native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchingData(){
            try {
                fetch('http://10.0.2.2:8000/api/user',{
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': await AsyncStorage.getItem('access_token')
                    }
                })
                .then((response) => response.json())
                .then((json) => {
                    for(let hasilData in json.data){
                        setData(json.data, hasilData)
                    }
                    console.log(data);
                })
            } catch (error) {
                console.error(error.message);
            }
        }

        fetchingData()
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

        if(await AsyncStorage.getItem('access_token')){
            navigation.navigate('Login')
        }

    }

    return(
        <View>
            <View style={styles.containerImage}>
                <Image style={styles.image} source={{ uri: `${data.profile_photo_url}` }} />
                {/* <Image style={styles.image} source={require('../assets/4595687.webp')} /> */}
                <Button title="Logout" onPress={handleLogout} />
                <Text>{`${data.profile_photo_url}+?format=png?size=50`}</Text>
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