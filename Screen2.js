import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

const Screen2 = ({ navigation, route }) => {
  const [text, setText] = useState("");

  const goBack = () => {
    route.params.onGoBack(text);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter data to pass back"
        value={text}
        onChangeText={(value) => setText(value)}
      />
      <TouchableOpacity onPress={goBack}>
        <Text style={styles.buttonText}>Go Back to Screen 1</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    marginBottom: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "blue",
  },
});

export default Screen2;
