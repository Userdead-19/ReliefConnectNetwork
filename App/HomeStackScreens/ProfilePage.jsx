import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Avatar, Text, Icon, Surface } from "react-native-paper";

const RecentlyUsedResource = ({ title, date, time }) => {
  return (
    <View
      style={{
        height: 60,
        borderWidth: 1,
        width: "100%",
        paddingLeft: 10,
        borderRadius: 10,
        paddingTop: 5,
      }}
    >
      <Text variant="titleMedium">{title}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text variant="titleSmall">Date: {date}</Text>
        <Text variant="titleSmall">Time: {time}</Text>
        <Icon source="chevron-right" size={20} />
      </View>
    </View>
  );
};

const ContributionTile = ({ title, amount, transactionid }) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
      }}
    >
      <Text variant="titleMedium">{title}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text variant="titleSmall">Amount: {amount}</Text>
        <Text variant="titleSmall">Transaction-id:{transactionid}</Text>
        <Icon source="chevron-right" size={20} />
      </View>
    </View>
  );
};

const ProfilePage = () => {
  const emailaddress = "abinav10102@gmail.com";
  const ResourceData = [
    {
      title: "How to survive a flood",
      date: "12/12/2021",
      time: "12:00 PM",
    },
    {
      title: "How to survive an earthquake",
      date: "12/12/2021",
      time: "12:00 PM",
    },
    {
      title: "How to survive a wildfire",
      date: "24/4/2024",
      time: "12:00 PM",
    },
    {
      title: "How to survive a hurricane",
      date: "23/4/2024",
      time: "12:00 AM",
    },
  ];

  const ContributionData = [
    {
      title: "Donation for heart transplant",
      amount: "$100",
      transactionid: "641",
    },
    {
      title: "Funds for orphanage",
      amount: "$200",
      transactionid: "680",
    },
    {
      title: "Flood Relief Fund",
      amount: "$500",
      transactionid: "700",
    },
  ];

  const top3Resources = ResourceData.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  }).slice(0, 3);
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        paddingTop: 60,
        alignItems: "center",
      }}
    >
      <ScrollView alwaysBounceVertical={false}>
        <Surface elevation={3}>
          <View
            style={{
              height: 280,
              width: "100%",
              borderWidth: 1,
              borderRadius: 10,
              alignItems: "center",
              padding: 20,
            }}
          >
            <Avatar.Image
              source={require("../../assets/icon-256x256.png")}
              size={100}
            />
            <View
              style={{
                marginTop: 20,
                alignItems: "center",
                flexDirection: "row",
                gap: 10,
              }}
            >
              <Text variant="headlineSmall">John</Text>
              <Text variant="headlineSmall">Doe</Text>
            </View>
            <View
              style={{
                gap: 5,
                flexDirection: "row",
                paddingTop: 10,
              }}
            >
              <Icon source="email" size={20} />
              <Text variant="titleSmall">EmailAddress: </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    color: "blue",
                    textDecorationLine: "underline",
                    fontSize: emailaddress.length > 20 ? 13 : 16,
                    marginTop: 2,
                  }}
                >
                  {emailaddress}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                gap: 5,
                flexDirection: "row",
                paddingTop: 10,
              }}
            >
              <Icon source="phone" size={20} />
              <Text variant="titleSmall">Mobile Number: 1234567890</Text>
            </View>
            <View
              style={{
                gap: 5,
                flexDirection: "row",
                paddingTop: 10,
              }}
            >
              <Icon source="account" size={20} />
              <Text variant="titleSmall">Anonymous ID: 1234567890</Text>
            </View>
          </View>
        </Surface>
        <View
          style={{
            marginTop: 20,
            width: "100%",
            height: 300,
            borderWidth: 1,
            borderRadius: 10,
            padding: 20,
            gap: 12.5,
          }}
        >
          <Text
            variant="headlineSmall"
            style={{
              textDecorationStyle: "solid",
              textDecorationLine: "underline",
            }}
          >
            Recently used resources
          </Text>
          {top3Resources.map((resource, index) => (
            <RecentlyUsedResource
              title={resource.title}
              date={resource.date}
              time={resource.time}
              key={index}
            />
          ))}
        </View>
        <View
          style={{
            marginTop: 20,
            width: "100%",
            height: 300,
            borderWidth: 1,
            borderRadius: 10,
            padding: 20,
            gap: 12.5,
          }}
        >
          <Text variant="headlineSmall">Your Contributions</Text>
          {ContributionData.map((contribution, index) => (
            <ContributionTile
              title={contribution.title}
              amount={contribution.amount}
              transactionid={contribution.transactionid}
              key={index}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({});
