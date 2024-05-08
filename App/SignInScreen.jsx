import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { Surface, TextInput, Button } from "react-native-paper";
import React from "react";
import LinearGradient from "react-native-linear-gradient";

import { useNavigation } from "@react-navigation/native";

export default function SignInScreen() {
  const [secure, setSecure] = React.useState(true);
  const Emailref = React.useRef(null);
  const navigation = useNavigation();
  React.useEffect(() => {
    Emailref.current.focus();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Surface elevation={5}>
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              margin: 10,
            }}
          >
            Sign-In
          </Text>
          <TextInput
            ref={Emailref}
            label="Email or Phonenumber"
            mode="outlined"
            style={{ width: 250, margin: 10 }}
          />
          <TextInput
            label={"Password"}
            mode="outlined"
            secureTextEntry
            style={{ width: 250, margin: 10 }}
            right={
              <TextInput.Icon
                name="eye"
                onPress={() => {
                  setSecure(!secure);
                }}
              />
            }
          />
          <Button
            mode="outlined"
            buttonColor="#f2d3d9"
            onPress={() => {
              navigation.navigate("HomeScreenStack");
            }}
          >
            Sign In
          </Button>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignUpScreen");
              }}
            >
              <Text>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Surface>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 20,
    maxWidth: 350,
    gap: 10,
  },
});
