import { FlatList, StyleSheet, View, Image, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import {
  Dialog,
  Button,
  Portal,
  Provider,
  Appbar,
  Surface,
  Text,
  Divider,
} from "react-native-paper"; // Changed from PaperProvider to Provider
import { useNavigation } from "@react-navigation/native";

const AD_IMAGES = [
  require("../../assets/icon-256x256.png"),
  require("../../assets/adimage2.jpeg"),
  require("../../assets/images.jpeg"),
];

const RenderLocalEmergencyContacts = ({ item }) => {
  return (
    <Surface
      style={{
        flex: 1,
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
        height: 200,
        width: 200,
        borderRadius: 20,
      }}
      elevation={2}
    >
      <View>
        <Image
          source={require("../../assets/icon-256x256.png")}
          style={{
            borderWidth: 1,
            width: 100,
            height: 100,
            borderRadius: 50,
            zIndex: 1,
          }}
        />
        <Text variant="titleMedium">{item.name}</Text>
        <Text variant="labelLarge">{item.role}</Text>
        <Text variant="bodySmall">{item.number}</Text>
      </View>
    </Surface>
  );
};

const HomePage = () => {
  const DialogContents = [
    "To continue, let your device turn on your location, which uses Google's location service",
    "Confirm to enable the notification service",
    "Confirm to enable the Camera service",
    "Confirm to enable BLE service",
  ];
  const navigator = useNavigation();

  const [currentDialogIndex, setCurrentDialogIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleConfirm = () => {
    setCurrentDialogIndex(currentDialogIndex + 1);
  };

  const renderDialog = () => {
    if (currentDialogIndex >= DialogContents.length) {
      return null; // No more dialogs to render
    }

    return (
      <Dialog visible={true} onDismiss={() => {}} key={currentDialogIndex}>
        <Dialog.Title>Enable {DialogContents[currentDialogIndex]}</Dialog.Title>
        <Dialog.Actions>
          <Button onPress={handleConfirm}>Confirm</Button>
          <Button onPress={handleConfirm}>Later</Button>
        </Dialog.Actions>
      </Dialog>
    );
  };

  const renderItem = ({ item }) => (
    <Surface style={styles.item} elevation={2}>
      <Image source={item} style={styles.image} />
    </Surface>
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % AD_IMAGES.length);
    }, 3000); // Change image every 7 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const LocalEmergencyContacts = [
    {
      name: "Ramesh",
      role: "Local Police",
      number: "123456789",
    },
    {
      name: "Suresh",
      role: "Local Supervisor",
      number: "123456789",
    },
    {
      name: "Hemanth",
      role: "NGO volunteer",
      number: "123456789",
    },
    {
      name: "Harry Luther",
      role: "Doctor",
      number: "123456789",
    },
  ];

  return (
    <Provider>
      <Appbar.Header>
        <Appbar.Content title="RCN" />
        <Appbar.Action
          icon="bell"
          onPress={() => {
            navigator.navigate("NotificationAlertScreen");
          }}
        />
        <Appbar.Action
          icon="pin"
          onPress={() => {
            navigator.navigate("MapNavigationScreen");
          }}
        />
      </Appbar.Header>
      <Portal>{renderDialog()}</Portal>
      <ScrollView alwaysBounceVertical showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            paddingTop: 30,
            alignItems: "center",
            padding: 20,
            gap: 10,
          }}
        >
          <FlatList
            data={[AD_IMAGES[currentIndex]]} // Render only the current image
            renderItem={renderItem}
            keyExtractor={(item) => item.toString()} // Unique key for each image
            horizontal={true} // Make the FlatList scroll horizontally
          />
          <Text variant="bodyLarge">
            Welcome to RCN, the app that helps you in case of emergencies
          </Text>
          <Divider
            style={{
              width: "100%",
              marginVertical: 20,
            }}
          />
          <Text variant="titleMedium">Emergency contacts to help you in</Text>
          <ScrollView horizontal={true} alwaysBounceHorizontal>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {LocalEmergencyContacts.map((item, index) => {
                return <RenderLocalEmergencyContacts item={item} key={index} />;
              })}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </Provider>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",

    height: 300,
    borderRadius: 20,
  },
  image: {
    borderWidth: 1,
    width: 300,
    height: 300,
  },
});
