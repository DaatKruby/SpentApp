import React from 'react';
import { SafeAreaView, Text, View, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import Spentform from '../components/SpentForm';

const Addspent = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <TextInput style={styles.input} placeholder="Cantidad" />
                </View>
                <View>
                    <TextInput style={styles.input} placeholder="Categoria" />
                </View>
                <View>
                    <TextInput style={styles.input} placeholder="Cantidad" />
                </View>
                <View>
                    <TouchableOpacity>
                        <Text>Guardar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
    input: {
        marginTop: 5,
        height: 40,
        borderColor: 'black',
        borderWidth: .5
    },
    textTitle: {
        fontSize: 15,
        fontWeight: 'bold',


    },
    containerTitle: {
        paddingLeft: 15,
    }
});