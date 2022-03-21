import React from 'react'
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native'

const Register = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.textHeading} >Register</Text>
            <View style={styles.containerName}>
                <Text style={styles.label}>Nama Lengkap</Text>
                <TextInput style={styles.input} placeholder="Enter your fullname" />
            </View>
            <View style={styles.containerUsername}>
                <Text style={styles.label}>Username</Text>
                <TextInput style={styles.input} placeholder="Enter your username" />
            </View>
            <View style={styles.containerEmail}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput style={styles.input} placeholder="Enter your email" />
            </View>
            <View style={styles.containerPass}>
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry={true} />
            </View>
            <View style={styles.containerBottomMenu}>
                <TouchableOpacity style={styles.buttonRegister}>
                    <Text style={styles.labelbtnRegister}>Register</Text>
                </TouchableOpacity>
                <View style={styles.linkContainer}>
                    <TouchableOpacity>
                        <Text style={styles.textLink}>Have an account ?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 30
    },
    containerName:{
        marginTop:60
    },
    containerUsername:{
        marginTop:17
    },
    containerEmail:{
        marginTop:17
    },
    containerPass:{
        marginTop:17
    },  
    textHeading:{
        fontSize:24,
        fontFamily: 'Poppins-Regular'
    },
    label:{
        fontSize:14,
        fontFamily: 'Poppins-Regular',
    },
    input:{
        backgroundColor:'#F5F6FA',
        borderWidth:1,
        borderColor:'#DCDDE1',
        borderRadius:4,
        padding: 2,
        color: '#000000',
        fontFamily: 'Poppins-Regular',
        height: 35
    },
    containerBottomMenu:{
        marginTop:65,
        alignItems: 'center',
    },
    buttonRegister:{
        backgroundColor: '#00A8FF',
        width:150,
        height:45,
        borderRadius:4,
        padding: 10
    },
    labelbtnRegister:{
        fontFamily:'Poppins-SemiBold',
        fontSize:18,
        color: '#FFFFFF',
        textAlign:'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    linkContainer:{
        marginTop:63,
        alignItems: 'center'
    },
    textLink:{
        color: '#00A8FF',
        fontSize:12,
        fontFamily: 'Poppins-Regular'
    }
})

export default Register;