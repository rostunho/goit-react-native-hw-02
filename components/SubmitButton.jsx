import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default function SubmitButton({ text, secondaryText, onPress }) {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.75}
          onPress={onPress}
        >
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.secondaryView}>
        <TouchableOpacity style={styles.secondaryButton} activeOpacity={0.75}>
          <Text style={styles.secondaryText}>{secondaryText}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  button: {
    height: 50,
    marginTop: 27,
    marginBottom: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  text: {
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },
  secondaryView: {
    justifyContent: "center",
    alignItems: "center",
  },
  secondaryButton: {
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  secondaryText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
});
