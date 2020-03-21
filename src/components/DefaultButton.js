import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const DefaultButton = (props) => {
    return (
        <TouchableOpacity
        {...props}
        style={[styles.btn, props.style]}
        >
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn : {
        width : '90%',
        height : 40,
        justifyContent : "center",
        alignItems  :"center",
        padding : 10,
        backgroundColor : 'green',
        elevation : 2,
        shadowOpacity : 0.2,
        shadowRadius : 5,
        shadowOffset : {height : 5, width : 5}
    },
    title : {
        fontSize : 18,
        fontWeight : 'bold',
        
    },
})


export default DefaultButton
