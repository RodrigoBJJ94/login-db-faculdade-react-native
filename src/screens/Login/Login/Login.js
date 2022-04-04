import React, { useState } from "react";
import { View } from "react-native";
import Statusbar from "../Statusbar/Statusbar";
import User from "../User/User";
import Password from "../Password/Password";
import LoginMain from "../LoginMain/LoginMain";
import Tip from "../Tip/Tip";
import Styles from "./Styles";

export default function Login({ navigation }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={Styles.app}>
      <Statusbar />
      <User setUser={setUser} />
      <Password setPassword={setPassword} />
      <LoginMain user={user} password={password} navigation={navigation} />
      <Tip user={user} />
    </View>
  );
};
