import React from "react";
import { Text, TextInput } from "react-native";
import Styles from "./Styles";

export default function Inputs({ setItemName, setItemDescription, setItemQtd }) {
    return (
        <>
            <Text style={Styles.texts}>Nome do Item</Text>
            <TextInput style={Styles.textInputs}
                onChangeText={text => setItemName(text)} />
            <Text style={Styles.texts}>Descrição do Item</Text>
            <TextInput style={Styles.textInputs}
                onChangeText={text => setItemDescription(text)} />
            <Text style={Styles.texts}>Quantidade de Items</Text>
            <TextInput style={Styles.textInputs}
                onChangeText={text => setItemQtd(text)} />
        </>
    );
};
