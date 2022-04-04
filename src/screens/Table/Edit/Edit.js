import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Styles from "./Styles";

export default function Edit({ onPressTouch }) {
    return (
        <TouchableOpacity style={Styles.button} onPress={onPressTouch}>
            <Text style={Styles.buttonText}>Editar Items</Text>
        </TouchableOpacity>
    );
};
