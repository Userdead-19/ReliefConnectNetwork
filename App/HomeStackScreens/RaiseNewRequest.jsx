import React, { useState } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FAB, Searchbar, List, Divider } from "react-native-paper";
const donationData = [
  {
    id: 1,
    name: "Sponsor a Child's Education",
    amount: "$25/month",
    description:
      "Help provide educational resources and opportunities for a child in need.",
  },
  {
    id: 2,
    name: "Plant Trees for a Greener Future",
    amount: "$50 per tree",
    description:
      "Contribute to reforestation efforts and combat climate change. Plant a tree in honor of someone special!",
  },
  {
    id: 3,
    name: "Donate Medical Supplies",
    amount: "Varies",
    description:
      "Support hospitals and clinics in need of essential medical supplies. Choose from a pre-made kit or donate specific items.",
  },
  {
    id: 4,
    name: "Provide Food for Families in Need",
    amount: "Any Amount",
    description:
      "Help families struggling with food insecurity. Your donation will provide nutritious meals for families in need.",
  },
  {
    id: 5,
    name: "Clean Up Our Oceans",
    amount: "$20 per cleanup",
    description:
      "Support initiatives to remove plastic pollution from the oceans. Help sponsor a beach cleanup or contribute to ongoing efforts.",
  },
  {
    id: 6,
    name: "Empower Women Entrepreneurs",
    amount: "$100",
    description:
      "Provide microloans and training to women entrepreneurs in developing countries. Help them build their businesses and support their families.",
  },
  {
    id: 7,
    name: "Support Animal Shelters",
    amount: "$25",
    description:
      "Help care for homeless animals by providing food, shelter, and medical care. Your donation can make a difference in the lives of animals in need.",
  },
  {
    id: 8,
    name: "Disaster Relief Fund",
    amount: "Any Amount",
    description:
      "Contribute to relief efforts for communities affected by natural disasters. Your donation will help provide food, shelter, and medical care to those in need.",
  },
];

const DonationListScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [donateData, setDonationData] = useState(donationData); // Removed 'const' from the declaration

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredResources = donationData.filter(
      (resource) => resource.name.toLowerCase().includes(query.toLowerCase()) // Update property name from 'title' to 'name'
    );
    setDonationData(filteredResources);
  };

  const sortByName = () => {
    const sortedData = [...donationData].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setDonationData(sortedData);
  };

  // Additional logic to sort the donationData by id
  const sortById = () => {
    const sortedData = [...donationData].sort((a, b) => a.id - b.id);
    setDonationData(sortedData);
  };

  // Additional logic to reset the donationData to its original state
  const resetData = () => {
    setDonationData(donationData);
  };

  const renderDonationItem = ({ item }) => (
    <List.Item
      title={item.name}
      description={item.description}
      onPress={() => {
        console.log("Donation item pressed:", item.name);
      }}
    />
  );

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search donations..."
        onChangeText={handleSearch}
        value={searchQuery}
      />
      <Divider />
      <FlatList
        data={donateData}
        renderItem={renderDonationItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => {
          navigation.navigate("Createnewissue");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 40,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  list: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  donationName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  donationAmount: {
    color: "#666",
  },
  donationDescription: {
    fontSize: 14,
    marginVertical: 5,
  },
});

export default DonationListScreen;
