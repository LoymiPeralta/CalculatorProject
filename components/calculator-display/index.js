import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const CalculatorDisplay = (props) => {
    return (
    < View style={styles.container}> 
        <Text style= {styles.text}> {props.Numbers.lengh === 0 ? 0 : props.Numbers}</Text>
    </View>
    );
};
// Bc the style of text and view compones are complex we are creating styles js object from them 

const styles = StyleSheet.create({
      container: {
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'flex-end', 
        justifyContent: 'center',
      },
       text: {
        fontSize: 36,
        color: "#FFFFFF",
      },
    });
    
export default  CalculatorDisplay;