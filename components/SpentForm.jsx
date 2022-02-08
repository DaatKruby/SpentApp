import React from 'react';
import { View, StyleSheet, Text, TextInput, Dimensions } from 'react-native';

import SpentInput from '../components/SpentInput';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Spentform = () => {
    return (
        <View>
            <SpentInput />
        </View>
    );
}

export default Spentform;

const styles = StyleSheet.create({

});