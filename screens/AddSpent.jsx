import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

import Spentform from '../components/SpentForm';

const Addspent = () => {
    return (
        <SafeAreaView>
            <View style={styles.containerTitle}>
                <Text style={styles.textTitle}>Cantidad gastada:</Text>
            </View>
            <View style={styles.containerForm}>
                <Spentform />
            </View>
        </SafeAreaView>
    );
}

export default Addspent;


const styles = StyleSheet.create({
    containerForm: {
        paddingTop: 15,
        flex: 1,
        alignItems: 'center'
    },
    textTitle: {
        fontSize: 15,
        fontWeight: 'bold',


    },
    containerTitle: {
        paddingLeft: 15,
    }
});