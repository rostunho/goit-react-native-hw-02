import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  ImageBackground,
  Platform,
  KeyboardAvoidingView,
  Dimensions,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBg}
          source={require("./assets/images/photo-bg.jpg")}
        >
          <KeyboardAvoidingView
            style={styles.avoidingView}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            {/* <RegistrationScreen /> */}
            <LoginScreen />
          </KeyboardAvoidingView>

          <StatusBar style="auto" />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
  },
  imageBg: {
    flex: 1,
    resizeMode: "cover",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    // justifyContent: "flex-end",
    // alignItems: "center",
  },
  avoidingView: {
    // flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
});
