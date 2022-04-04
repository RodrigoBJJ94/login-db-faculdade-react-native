import React, { useState, useRef } from "react";
import { View, ScrollView } from "react-native";
import Inputs from "../Inputs/Inputs";
import Register from "../Register/Register";
import Data from "../Data/Data";
import Edit from "../Edit/Edit";
import Delete from "../Delete/Delete";
import Styles from "./Styles";

export default function Table() {
    const [itemName, setItemName] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [itemQtd, setItemQtd] = useState("");

    const scrollRef = useRef();

    const onPressTouch = () => {
        scrollRef.current?.scrollTo({
            y: 0,
            animated: false,
        });
    };

    return (
        <View style={Styles.viewMain}>
            <ScrollView ref={scrollRef}>
                <View style={Styles.viewInputs}>
                    <Inputs setItemName={setItemName}
                        setItemDescription={setItemDescription} setItemQtd={setItemQtd} />
                    <Register itemName={itemName}
                        itemDescription={itemDescription} itemQtd={itemQtd} />
                </View>
                <View style={Styles.viewData}>
                    <Data itemName={itemName} itemDescription={itemDescription}
                        itemQtd={itemQtd} />
                    <Edit onPressTouch={onPressTouch} />
                    <Delete setItemName={setItemName}
                        setItemDescription={setItemDescription} setItemQtd={setItemQtd} />
                </View>
            </ScrollView>
        </View>
    );
};
