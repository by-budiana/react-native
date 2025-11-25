import React from "react";
import { View, Text, FlatList } from "react-native";

const alamatToko = [
  { id: "1", alamatToko: "Jl. Merdeka No. 10, Jakarta" },
  { id: "2", alamatToko: "Jl. Sudirman No. 20, Bandung" },
  { id: "3", alamatToko: "Jl. Malioboro No. 30, Yogyakarta" },
];

export default function FlatListExample() {
  return (
    <FlatList
      data={alamatToko}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View
          style={{
            padding: 15,
            borderBottomWidth: 1,
            borderBottomColor: "#ddd",
          }}
        >
          <Text>{item.alamatToko}</Text>
        </View>
      )}
    />
  );
}