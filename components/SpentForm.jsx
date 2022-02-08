import React from 'react';
import { View, StyleSheet, Text, TextInput, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Spentform = () => {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='  Cantidad'
                keyboardType={'numbers-and-punctuation'}
            />
        </View>
    );
}

export default Spentform;

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: windowWidth - 25,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: .4,
    }
});