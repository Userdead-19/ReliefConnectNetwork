import { StyleSheet, View } from "react-native";
import React from "react";
import { Provider, Text, Appbar, Icon, Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
const NotificationListTile = ({ title }) => {
  return (
    <View
      style={{
        minHeight: 50,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "start",
          gap: 30,
          alignItems: "center",
        }}
      >
        <Icon source="bell" size={20} />
        <View
          style={{
            flexDirection: "column",
          }}
        >
          <Text variant="titleLarge">{title}</Text>
          <View
            style={{
              flexDirection: "row",
              gap: 10,
            }}
          >
            <Text variant="labelSmall">Notification Description</Text>
            <Text variant="labelSmall">Date: 12/12/2021</Text>
          </View>
        </View>
      </View>
      <Divider
        style={{
          marginVertical: 10,
        }}
      />
    </View>
  );
};

const NotificationAlertScreen = () => {
  const navigator = useNavigation();
  const Notification_page_Contents = [
    {
      title: "Notification 1",
    },
    {
      title: "Notification 2",
    },
    {
      title: "Notification 3",
    },
    {
      title: "Notification 4",
    },
    {
      title: "Notification 5",
    },
    {
      title: "Notification 6",
    },
    {
      title: "Notification 7",
    },
    {
      title: "Notification 8",
    },
    {
      title: "Notification 9",
    },
    {
      title: "Notification 10",
    },
  ];
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
        <Appbar.Content title="Notification Alert" />
      </Appbar.Header>
      <View
        style={{
          padding: 20,
          width: "100%",
          gap: 10,
        }}
      >
        {Notification_page_Contents.map((item, index) => {
          return <NotificationListTile key={index} title={item.title} />;
        })}
      </View>
    </Provider>
  );
};

export default NotificationAlertScreen;

const styles = StyleSheet.create({});
