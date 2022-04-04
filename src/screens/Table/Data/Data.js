import React from "react";
import { Text } from "react-native";
import Styles from "./Styles";

export default function Data({ itemName, itemDescription, itemQtd }) {
    return (
        <>
            <Text style={Styles.texts}>Nome do Item: {itemName}</Text>
            <Text style={Styles.texts}>Descrição do Item: {itemDescription}</Text>
            <Text style={Styles.texts}>Quantidade do Item: {itemQtd}</Text>
        </>
    );
};
