import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, ScrollView, Button, Alert } from 'react-native';

import db from '../database/firebase';
import { collection, addDoc } from "firebase/firestore";

const date = new Date();

const todayDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

const Addspent = ({ navigation }) => {


    const initialState = {
        qty: '',
        category: '',
        description: '',
        date: todayDate.toString()
    };

    const [state, setState] = useState(initialState);

    const handleChangeText = (value, name) => {
        setState({ ...state, [name]: value });
    };

    const createNewSpent = async () => {
        if (state.qty === '' || state.category === '' || state.date === '') Alert.alert("Rellena todos los campos")
        else {
            try {
                const docRef = await addDoc(collection(db, "spent"), {
                    qty: state.qty,
                    category: state.category,
                    description: state.description,
                    date: state.date
                });
                Alert.alert("Guardado");
                navigation.navigate("landing");
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View>
                <TextInput style={styles.InputGroup} placeholder="Cantidad" onChangeText={(value) => handleChangeText(value, 'qty')} value={state.qty} />
            </View>
            <View>
                <TextInput style={styles.InputGroup} placeholder="Categoria" onChangeText={(value) => handleChangeText(value, 'category')} value={state.category} />
            </View>
            <View>
                <TextInput style={styles.InputGroup} placeholder="Descripción" onChangeText={(value) => handleChangeText(value, 'description')} value={state.description} />

            </View>
            <View>
                <TextInput style={styles.InputGroup} placeholder="Fecha" onChangeText={(value) => handleChangeText(value, 'date')} value={state.date} />

            </View>
            <View style={styles.ButtonContainer}>
                <Button title="Guardar Gasto" onPress={() => createNewSpent()} />
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