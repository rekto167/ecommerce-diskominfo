import React, {useState, useEffect} from 'react'
import {View, Text, Button, Image, StyleSheet, TouchableOpacity} from 'react-native'
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
                <TouchableOpacity>
                    <Image style={styles.image} source={{ uri: `${data.profile_photo_url}` }} />
                </TouchableOpacity>
                <View>
                    <Text style={styles.username}>{data.username}</Text>
                    <Text style={styles.name}>{data.name}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerImage:{
        backgroundColor: '#fff',
        padding: 25,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image:{
        width:80,
        height:80,
        borderRadius:50
    },
    username:{
        marginLeft:25,
        fontFamily:'Poppins-SemiBold',
        fontSize:18,
        color: '#000'
    },
    name:{
        marginLeft:25,
        fontFamily:'Poppins-SemiBold',
        fontSize:12,
        color: '#95a5a6'
    }
})

export default Profile