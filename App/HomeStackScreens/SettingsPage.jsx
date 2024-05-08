import { ScrollView, StyleSheet, View, Dimensions } from "react-native";
import React from "react";
import { Divider, Icon, Searchbar, Text } from "react-native-paper";
const { width, height } = Dimensions.get("screen");

const SettingListTile = ({ title }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text variant="headlineSmall">{title}</Text>
        <Icon source="chevron-right" size={20} style={{}} />
      </View>
      <Divider
        style={{
          marginVertical: 10,
        }}
      />
    </View>
  );
};

// "DevicePermissions",
//     "AppSettings",
//     "NotificationSettings",
//     "Archiving and Downloading",
//     "DataUsage",
//     "AccountSettings",
//     "PrivacySettings",
//     "TermsAndConditions",
//     "HelpAndSupport",
//     "AboutUs",
const SettingsPage = () => {
  const Settings_page_Contents = [
    {
      title: "Device Permissions",
      icon: "Mobile",
    },
    {
      title: "App Settings",
      icon: "cog",
    },
    {
      title: "Notification Settings",
      icon: "bell",
    },
    {
      title: "Archiving and Downloading",
      icon: "download",
    },
    {
      title: "Data Usage",
      icon: "data-usage",
    },
    {
      title: "Account Settings",
      icon: "account",
    },
    {
      title: "Privacy Settings",
      icon: "privacy",
    },
    {
      title: "Terms and Conditions",
      icon: "file-document",
    },
    {
      title: "Help and Support",
      icon: "help",
    },
    {
      title: "About Us",
      icon: "information",
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padddingTop: 30,
      }}
    >
      <Searchbar placeholder="Search" />
      <ScrollView
        style={{
          width: "100%",
          maxHeight: "80%",
          padding: 20,
          paddingBottom: 0,
        }}
        alwaysBounceVertical={false}
        showsVerticalScrollIndicator={true}
      >
        <View
          style={{
            flex: 1,
            rowGap: 20,
          }}
        >
          {Settings_page_Contents.map((item, index) => (
            <SettingListTile title={item.title} icon={item.icon} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingsPage;

const styles = StyleSheet.create({});
