import React from 'react';
import { View, Image, SafeAreaView, StyleSheet, TouchableOpacity, Touchable } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { collection, getDocs } from "firebase/firestore";
import db from '../database/firebase';

import Floatingbutton from '../components/FloatingButton';
import SpentCard from '../components/SpentCard';


const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "spent"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().category}`);
    });
}
getData();


const Landingpage = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.containerBody}>
                    <SpentCard amountSpent="200" category="Gasolina" date="14/02/2021" />
                </View>
                <View style={styles.containerBody}>
                    <SpentCard amountSpent="200" category="Gasolina" date="14/02/2021" />
                </View>
                <View style={styles.containerBody}>
                    <SpentCard amountSpent="200" category="Gasolina" date="14/02/2021" />
                </View>
                <View style={styles.containerBody}>
                    <SpentCard amountSpent="200" category="Gasolina" date="14/02/2021" />
                </View>
                <View style={styles.containerBody}>
                    <SpentCard amountSpent="200" category="Gasolina" date="14/02/2021" />
                </View>
                <View style={styles.containerBody}>
                    <SpentCard amountSpent="200" category="Gasolina" date="14/02/2021" />
                </View>
                <View style={styles.containerBody}>
                    <SpentCard amountSpent="200" category="Gasolina" date="14/02/2021" />
                </View>
                <View style={styles.containerBody}>
                    <SpentCard amountSpent="200" category="Gasolina" date="14/02/2021" />
                </View>
                <View style={styles.containerBody}>
                    <SpentCard amountSpent="200" category="Gasolina" date="14/02/2021" />
                </View>

            </ScrollView>
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
