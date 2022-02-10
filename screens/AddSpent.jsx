import React from 'react';
import { SafeAreaView, Text, View, TextInput, StyleSheet, ScrollView, Button } from 'react-native';

import Spentform from '../components/SpentForm';

const Addspent = () => {
    return (
        <ScrollView style={styles.container}>
            <View>
                <TextInput style={styles.InputGroup} placeholder="Cantidad" />
            </View>
            <View>
                <TextInput style={styles.InputGroup} placeholder="Categoria" />
            </View>
            <View>
                <TextInput style={styles.InputGroup} placeholder="Cantidad" />
            </View>
            <View style={styles.ButtonContainer}>
                <Button title="Guardar Gasto" />
            </View>
        </ScrollView>
    );
}

export default Addspent;


const styles = StyleSheet.create({
    InputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 0,
        borderBottomWidth: .5,
        borderBottomColor: '#cccccc',
        height: 55
    },
    container: {
        flex: 1,
        padding: 35,
    },
    ButtonContainer: {
        marginTop: 20,
        flex: 1,
        padding: 5,
        width: '100%',
        borderColor: 'blue',
        borderWidth: .5,
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 13
    }
});