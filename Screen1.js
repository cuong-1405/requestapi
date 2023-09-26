import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Screen1 = ({ navigation }) => {
  const [dataFromScreen2, setDataFromScreen2] = useState(null);

  const goToScreen2 = () => {
    navigation.navigate("Screen2", {
      onGoBack: (data) => {
        setDataFromScreen2(data);
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.centeredText}>
        Data from Screen 2: {dataFromScreen2}
      </Text>
      <TouchableOpacity onPress={goToScreen2}>
        <Text style={styles.buttonText}>Go to Screen 2</Text>
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
  centeredText: {
    textAlign: "center",
    marginBottom: 20,
  },
  buttonText: {
    textAlign: "center",
    color: "blue",
  },
});

export default Screen1;
