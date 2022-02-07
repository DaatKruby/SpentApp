import React from 'react';
import { View, Image, SafeAreaView, StyleSheet, TouchableOpacity, Touchable } from 'react-native';

import Floatingbutton from '../components/FloatingButton';
import SpentCard from '../components/SpentCard';

const Landingpage = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerBody}>
                <SpentCard amountSpent="200" category="Gasolina" />
            </View>
            <View style={styles.containerBody}>
                <SpentCard amountSpent="200" category="Gasolina" />
            </View>
            <View style={styles.containerBody}>
                <SpentCard amountSpent="200" category="Gasolina" />
            </View>
            <View style={styles.containerBody}>
                <SpentCard amountSpent="200" category="Gasolina" />
            </View>
            <View style={styles.containerBody}>
                <SpentCard amountSpent="200" category="Gasolina" />
            </View>
            <View style={styles.containerBody}>
                <SpentCard amountSpent="200" category="Gasolina" />
            </View>
            <View style={styles.containerBody}>
                <SpentCard amountSpent="200" category="Gasolina" />
            </View>
            <View>
                <Floatingbutton goTo="addSpent" navigation={navigation} />
            </View>
        </SafeAreaView>
    );
}

export default Landingpage;

const styles = StyleSheet.create({
    containerBody: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    }
});