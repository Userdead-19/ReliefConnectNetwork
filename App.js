import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SignInScreen from "./App/SignInScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUpScreen from "./App/SignUpScreen";
import HomeScreenStack from "./App/HomeScreenStack";
import CreateDonationPage from "./App/HomeStackScreens/CreateDonationPAge";
import MapNavigationScreen from "./App/HomeStackScreens/MapNavigationScreen";
import NotificationAlertScreen from "./App/HomeStackScreens/NotificationAlertScreen";

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <stack.Screen name="SignInScreen" component={SignInScreen} />
        <stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <stack.Screen name="Createnewissue" component={CreateDonationPage} />
        <stack.Screen name="HomeScreenStack" component={HomeScreenStack} />
        <stack.Screen
          name="MapNavigationScreen"
          component={MapNavigationScreen}
        />
        <stack.Screen
          name="NotificationAlertScreen"
          component={NotificationAlertScreen}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
