import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function SpentCard({ amountSpent, category }) {

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.amountContainer}>
                    <Text style={styles.textSpent}>${amountSpent}</Text>
                </View>
                <View style={styles.categoryContainer}>
                    <Text>Gastado en: {category}</Text>
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
        flex: 1,
        justifyContent: 'center'
    },
    categoryContainer: {
        position: 'absolute',
        flex: 1,
        paddingLeft: 20,
        paddingBottom: 10,
    },

    textSpent: {
        fontSize: 30,
        paddingLeft: 15,
        fontWeight: 'bold',
        alignItems: 'center'
    }
});
