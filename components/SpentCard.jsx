import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function SpentCard({ amountSpent, category, date }) {

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.amountContainer}>
                    <Text style={styles.textSpent}>${amountSpent}</Text>
                </View>
                <View style={styles.categoryContainer}>
                    <Text>Gastado en: {category}</Text>
                </View>
                <View style={styles.dateContainer}>
                    <Text>{date}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        borderWidth: .5,
        borderColor: 'black',
        borderRadius: 20,
        height: windowHeight / 10,
        width: windowWidth - 20,
    },
    amountContainer: {
        flex: 1

    },
    categoryContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 15,
    },
    dateContainer: {
        flex: 1,
        paddingLeft: 15,
    },
    textSpent: {
        fontSize: 28,
        paddingLeft: 15,
        fontWeight: 'bold',
        alignItems: 'center'
    }
});
