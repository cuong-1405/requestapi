// AlbumScreen.js

import React, { useState, useEffect } from "react";
import { View, FlatList, Text, Image, StyleSheet } from "react-native";
import axios from "axios";

const AlbumScreen = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    // Gọi API để lấy danh sách album
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={albums}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.albumItem}>
            <Image
              source={{ uri: `https://via.placeholder.com/150/92c952` }} // Thay bằng đường dẫn ảnh từ API
              style={styles.albumImage}
            />
            <View style={styles.albumDetails}>
              <Text style={styles.albumId}>ID: {item.id}</Text>
              <Text style={styles.albumTitle}>Title: {item.title}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  albumItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  albumImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderWidth: 20, // Loại bỏ viền ảnh
  },
  albumDetails: {
    flex: 1,
  },
  albumTitle: {
    fontSize: 16,
    // fontWeight: "bold",
  },
  albumId: {
    fontSize: 12,
    color: "#555",
  },
});

export default AlbumScreen;
