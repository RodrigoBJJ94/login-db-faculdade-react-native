import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Login from "./screens/Login/Login/Login";
import Table from "./screens/Table/Table/Table";
import { navigationStyles } from "./NavigationStyles";
import Styles from "./Styles";

const Tab = createMaterialTopTabNavigator();

export default function App() {
    return (
        <View style={Styles.appView}>
            <NavigationContainer>
                <Tab.Navigator initialRouteName="Login" screenOptions={navigationStyles}>
                    <Tab.Screen name="Login" component={Login} />
                    <Tab.Screen name="Table" component={Table} />
                </Tab.Navigator>
            </NavigationContainer>
        </View>
    );
};
