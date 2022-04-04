import React from "react";
import { TouchableOpacity, Text, Alert } from "react-native";
import Styles from "./Styles";

export default function Register({ itemName, itemDescription, itemQtd }) {
    function registerItems() {
        if (itemName === "" || itemDescription === "" || itemQtd === "") {
            Alert.alert("Por favor preencha todos os dados!");
        } else {
            Alert.alert("Item cadastrado com sucesso!");
        };
    };

    return (
        <TouchableOpacity style={Styles.button} onPress={() => registerItems()}>
            <Text style={Styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
    );
};
