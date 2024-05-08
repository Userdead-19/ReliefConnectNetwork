import React, { useState, useEffect } from "react";
import { View, FlatList, Text, Image, StyleSheet } from "react-native";
import { TextInput, IconButton, Searchbar } from "react-native-paper";
import { Linking } from "react-native";

const educationalResources = [
  {
    title: "Introduction to JavaScript",
    description:
      "Learn the fundamentals of JavaScript, a versatile programming language for web development.",
    source: "Khan Academy",
    url: "https://www.khanacademy.org/computing/computer-programming/intro-to-js/welcome/v/welcome-to-javascript",
  },
  {
    title: "The Chemistry of Everyday Life",
    description:
      "Explore the fascinating world of chemistry and its applications in our daily lives.",
    source: "Crash Course Chemistry",
    url: "https://www.youtube.com/watch?v=uZ2OvuFAykY",
  },
  {
    title: "The Art of Public Speaking",
    description:
      "Develop your confidence and communication skills with this public speaking course.",
    source: "Udemy",
    url: "https://www.udemy.com/course/the-complete-confidence-course/",
  },
  {
    title: "Calculus for Beginners",
    description:
      "Master the fundamentals of calculus, a powerful tool for understanding change and motion.",
    source: "MIT OpenCourseware",
    url: "https://ocw.mit.edu/courses/mathematics/single-variable-calculus-18.01sc-fall-2009/index.htm",
  },
  {
    title: "The History of Art",
    description:
      "Explore the evolution of art through time, from prehistoric cave paintings to modern masterpieces.",
    source: "The Metropolitan Museum of Art",
    url: "https://www.metmuseum.org/toah/splash",
  },
  {
    title: "How to Code Your First Game",
    description:
      "Learn the basics of game development and create your own interactive game.",
    source: "CodeCombat",
    url: "https://codecombat.com/play/level/intro-to-python",
  },
  {
    title: "Understanding the Universe",
    description:
      "Explore the vastness of space and unravel the mysteries of the cosmos.",
    source: "National Geographic",
    url: "https://www.nationalgeographic.com/science/space/",
  },
  {
    title: "Creative Writing for Everyone",
    description:
      "Develop your writing skills and explore your creativity through writing exercises and prompts.",
    source: "Masterclass",
    url: "https://www.masterclass.com/classes/james-pattersons-writing-masterclass",
  },
];
const MyComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [resources, setResources] = useState(educationalResources);

  const handleSearch = (text) => {
    setSearchText(text);
    const filteredResources = educationalResources.filter((resource) =>
      resource.title.toLowerCase().includes(text.toLowerCase())
    );
    setResources(filteredResources);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.sourceContainer}>
          <Text style={styles.sourceText}>Source: {item.source}</Text>
          <IconButton
            icon="link"
            onPress={() => Linking.openURL(item.url)}
            color="#007bff"
          />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Searchbar placeholder="Search resources" onChangeText={handleSearch} />

      <FlatList
        data={resources}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 30,
  },
  searchBar: {
    marginBottom: 10,
  },
  item: {
    flexDirection: "row",

    padding: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "#666",
  },
  sourceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  sourceText: {
    marginRight: 10,
  },
});

export default MyComponent;
