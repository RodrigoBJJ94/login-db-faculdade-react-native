import React from "react";
import { TouchableOpacity, Text, Alert } from "react-native";
import Styles from "./Styles";

export default function Delete({ setItemName, setItemDescription, setItemQtd }) {
    function deleteItems() {
        setItemName("");
        setItemDescription("");
        setItemQtd("");
        Alert.alert("Items removidos!");
    };

    return (
        <TouchableOpacity style={Styles.button} onPress={() => deleteItems()}>
            <Text style={Styles.buttonText}>Remover Items</Text>
        </TouchableOpacity>
    );
};
