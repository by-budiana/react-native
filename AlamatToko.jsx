import React from "react";
<<<<<<< HEAD
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
=======
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function AlamatToko() {
  const dataToko = [
    { id: "1", alamat: "Jl. Diponegoro No.10, Denpasar" },
    { id: "2",  alamat: "Jl. Gatot Subroto No.22, Denpasar" },
    { id: "3",  alamat: "Jl. Teuku Umar No.45, Denpasar" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Alamat Toko </Text>

      <FlatList
        data={dataToko}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.namaToko}>{item.nama}</Text>
            <Text style={styles.alamat}>{item.alamat}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 3,
  },
  namaToko: {
    fontSize: 18,
    fontWeight: "bold",
  },
  alamat: {
    fontSize: 14,
    marginTop: 5,
    color: "#555",
  },
});
>>>>>>> bdd02e450b7003c70f13cb2973f6f81fd66ef44a
