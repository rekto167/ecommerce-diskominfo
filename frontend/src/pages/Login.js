import React from 'react'
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native'

const Login = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.textHeading} >Login</Text>
            <View style={styles.containerEmail}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput style={styles.input} placeholder="Enter your email" />
            </View>
            <View style={styles.containerPass}>
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input} placeholder="Enter your password" secureTextEntry={true} />
            </View>
            <View style={styles.containerBottomMenu}>
                <TouchableOpacity style={styles.buttonLogin}>
                    <Text style={styles.labelbtnLogin}>Login</Text>
                </TouchableOpacity>
                <View style={styles.linkContainer}>
                    <TouchableOpacity>
                        <Text style={styles.textLink}>Forget Password ?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.textLink}>Haven't account yet ?</Text>
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
    containerEmail:{
        marginTop:60
    },
    containerPass:{
        marginTop:17
    },  
    textHeading:{
        fontSize:24,
        fontFamily: 'Poppins-Regular'
    },
    label:{
        fontSize:18,
        fontFamily: 'Poppins-Regular',
    },
    input:{
        backgroundColor:'#F5F6FA',
        borderWidth:1,
        borderColor:'#DCDDE1',
        borderRadius:4,
        padding: 10,
        color: '#000000',
        fontFamily: 'Poppins-Regular'
    },
    containerBottomMenu:{
        marginTop:65,
        alignItems: 'center',
    },
    buttonLogin:{
        backgroundColor: '#00A8FF',
        width:150,
        height:45,
        borderRadius:4,
        padding: 10
    },
    labelbtnLogin:{
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

export default Login;