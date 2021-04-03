import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const FunctionButton= (props) => {
    return (
    < TouchableOpacity style={{...styles.container, width: props.ButtonWidth}}> 
        <Text style= {styles.text}> {props.ThisFunction }</Text>
    </ TouchableOpacity>
    );
};
// Bc the style of text and view compones are complex we are creating styles js object from them 

const styles = StyleSheet.create({
      container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 25, 
        backgroundColor: '#000000',
        paddingTop: '25%',
        position: 'relative',
      },
       text: {
        fontSize: 24,
        color: '#ffffff',
        position: 'absolute',
        textTransform: 'uppercase'
      },
    });
    
export default  FunctionButton;