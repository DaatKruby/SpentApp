import React from 'react';
import { View, Image, SafeAreaView, StyleSheet, TouchableOpacity, Touchable } from 'react-native';


const Floatingbutton = ({ goTo, navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchableOpacity}
                onPress={() => navigation.navigate(goTo)}>
                <Image
                    source={{ uri: 'https://raw.githubusercontent.com/tranhonghan/images/main/plus_icon.png' }}
                    style={styles.floatingButton}
                />
            </TouchableOpacity>
        </View>
    );
}

export default Floatingbutton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    touchableOpacity: {
        position: 'absolute',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    floatingButton: {
        width: 70,
        height: 70,
    },
    floatingButton: {
        resizeMode: 'contain',
        width: 50,
        height: 50
    }
});