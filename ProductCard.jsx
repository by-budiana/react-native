import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, NavigationIndependentTree } from "@react-navigation/native";
import { FlatList, Text, View } from "react-native";
import ProductCard from "./soaluts.jsx";


function MainPage({navigation}){
  return(
    <View style={{ padding: 20, marginTop: 25 }}>
      
      <ProductCard
        nama="Headphone"
        harga="250.000"
        gambar="https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1113"
      />

      <ProductCard
        nama="Handphone"
        harga="1.500.000"
        gambar="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
      />

    </View>
  )
}

function AddressScreen(){
  return (
      <FlatList
        data={dataMahasiswa}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              padding: 15,
              borderBottomWidth: 1,
              borderBottomColor: "#ddd",
            }}
          >
            <Text>{item.nama}</Text>
          </View>
        )}
      />
  )
}

const dataMahasiswa = [
  { id: "1", nama: "300 Tresser Blvd, Stamford, Connecticut(CT), 06901" },
  { id: "2", nama: "604 Goodman St, Kosciusko, Mississippi(MS), 39090" },
  { id: "3", nama: "190 Margaretta Dr, Hyde Park, Massachusetts(MA), 02136" },
];

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={MainPage}
            options={{
              title: "Main",
              tabBarIcon: ({ color }) => <MaterialIcons name="dashboard" size={24} color="black" />,
            }}
          />
          <Tab.Screen
            name="Address"
            component={AddressScreen}
            options={{
              title: "Address",
              tabBarIcon: ({ color }) => <Entypo name="address" size={24} color="black" />,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
// export default function App() {
//   return (
//     <View style={{ padding: 20, marginTop: 25 }}>
      
//       <ProductCard
//         nama="Headphone"
//         harga="250.000"
//         gambar="https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1113"
//       />

//       <ProductCard
//         nama="Handphone"
//         harga="1.500.000"
//         gambar="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
//       />

//     </View>
//   );
// }