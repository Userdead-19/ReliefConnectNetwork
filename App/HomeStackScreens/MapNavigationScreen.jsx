import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView from "react-native-maps";
import { Provider, Appbar } from "react-native-paper";
import App from "../../App";
import { useNavigation } from "@react-navigation/native";

const MapNavigationScreen = () => {
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
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </Provider>
  );
};

export default MapNavigationScreen;

const styles = StyleSheet.create({});
