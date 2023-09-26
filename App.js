// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import React, { useState, useEffect } from "react";
// import { View, Text, TextInput, Button, StyleSheet } from "react-native";
// import Screen1 from "./Screen1";
// import Screen2 from "./Screen2";
// import axios from "axios";
// import { ScrollView } from "react-native";

// const Stack = createStackNavigator();

// const App = () => {
//   const [data, setData] = useState(null);
//   const [postData, setPostData] = useState("");
//   const apiUrl = "https://reactnative.dev/movies.json";

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     axios
//       .get(apiUrl)
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((error) => console.error("Error fetching data: ", error));
//   };

//   const handlePostDataChange = (text) => {
//     setPostData(text);
//   };
//   const postDataToServer = () => {
//     axios
//       .post(apiUrl, { body: postData })
//       .then((response) => {
//         console.log("Data posted successfully:", response.data);
//         // You can perform any actions after successful data posting here
//       })
//       .catch((error) => console.error("Error posting data: ", error));
//   };
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Screen1" component={Screen1} />
//         <Stack.Screen name="Screen2" component={Screen2} />
//       </Stack.Navigator>
//       <ScrollView>
//         <View style={styles.container}>
//           <Text>Data from API: {JSON.stringify(data)}</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Enter data to post"
//             value={postData}
//             onChangeText={handlePostDataChange}
//           />
//           <Button title="Post Data" onPress={postDataToServer} />
//         </View>
//       </ScrollView>
//     </NavigationContainer>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   input: {
//     width: "100%",
//     padding: 10,
//     borderWidth: 1,
//     marginBottom: 20,
//   },
// });
// export default App;
// App.js

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AlbumScreen from "./AlbumScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Albums" component={AlbumScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
