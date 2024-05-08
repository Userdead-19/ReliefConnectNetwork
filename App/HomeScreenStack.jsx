import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  BottomNavigation,
  Dialog,
  Button,
  DialogContents,
} from "react-native-paper";
import HomePage from "./HomeStackScreens/HomePage";
import SearchPage from "./HomeStackScreens/SearchPage";
import CartPage from "./HomeStackScreens/RaiseNewRequest";
import ProfilePage from "./HomeStackScreens/ProfilePage";
import SettingsPage from "./HomeStackScreens/SettingsPage";

const HomeScreenStack = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "home",
      title: "Home",
      focusedIcon: "home",
    },
    { key: "search", title: "Resources", focusedIcon: "magnify" },
    { key: "cart", title: "Requests", focusedIcon: "water" },
    { key: "profile", title: "Profile", focusedIcon: "account" },
    { key: "settings", title: "Settings", focusedIcon: "cog" },
  ]);

  const BottomNavigationScene = BottomNavigation.SceneMap({
    home: HomePage,
    search: SearchPage,
    cart: CartPage,
    profile: ProfilePage,
    settings: SettingsPage,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={BottomNavigationScene}
    />
  );
};

export default HomeScreenStack;

const styles = StyleSheet.create({});
