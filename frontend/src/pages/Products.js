import React, {useState, useEffect} from 'react'
import {SafeAreaView, View, Text, FlatList, TouchableOpacity} from 'react-native'
import axios from 'axios'

const Products = () => {

    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch('http://10.0.2.2:8000/api/products', {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((json) => setData(json.data))
        .finally(() => setLoading(false))
    },[])

    return(
        <SafeAreaView>
            <Text>Products</Text>
            {isLoading ? <Text>Loading...</Text> :
            (
                <View>
                    <Text>{data}</Text>
                </View>
            )}
        </SafeAreaView>
    )
}

export default Products;