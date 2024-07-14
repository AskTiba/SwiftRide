import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bike } from "lucide-react-native";


export default function index() {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  if (!location) {
    return (
      <SafeAreaView className="bg-[#FFFFFF] h-full w-full pt-3">
        <Stack.Screen options={{ headerShown: false }} />
        <View className="flex-1 justify-center items-center">
          {errorMsg ? <Text>{errorMsg}</Text> : <Text>Loading...</Text>}
        </View>
      </SafeAreaView>
    );
  }

  return (
    <View className="justify-center items-center w-full">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <MapView
        className="h-full w-full"
        // style={styles.map}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChangeComplete={(data) => console.log(data)}
        showsUserLocation={false}
        // mapType="satelliteFlyover"
      >
        <Marker
          // key={index}
          coordinate={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          }}
          title={"You Are Here"}
          onPress={(data) => console.log(data.nativeEvent.coordinate)}
          // description={marker.description}
        />
      </MapView>

      <TouchableOpacity className="absolute bottom-5">
        <View className="bg-black rounded-full w-20 h-20 justify-center items-center">
        <Bike color="white" size={24} />
        </View>
      </TouchableOpacity>
    </View>
  );
}