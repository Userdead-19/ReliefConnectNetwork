import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import MapView, { MapMarker } from "react-native-maps";
import { Provider, Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";

const MapNavigationScreen = () => {
  const data = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  useEffect(() => {
    const LocationSetFunction = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status === "granted") {
          let location = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.High,
          });
          console.log(location);
        }
      } catch (error) {}
    };
    LocationSetFunction();
  }, []);
  const navigator = useNavigation();
  return (
    <Provider
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigator.goBack()} />
        <Appbar.Content title="Current Location" />
      </Appbar.Header>
      <MapView
        style={{ height: "100%", width: "100%" }}
        showsUserLocation
        initialRegion={data}
      >
        <MapMarker coordinate={data} />
      </MapView>
    </Provider>
  );
};

export default MapNavigationScreen;

const styles = StyleSheet.create({});
