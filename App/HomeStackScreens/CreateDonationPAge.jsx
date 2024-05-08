import { StyleSheet, View } from "react-native";
import React from "react";
import {
  Appbar,
  Provider,
  RadioButton,
  TextInput,
  Text,
  Button,
  Checkbox,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const CreateDonationPAge = () => {
  const [Value, setValue] = React.useState("first");
  const [stateCheckBox, setStateCheckBox] = React.useState(false);
  const navigator = useNavigation();
  return (
    <Provider>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigator.goBack();
          }}
        />
        <Appbar.Content title="Submit a New Request" />
      </Appbar.Header>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          padding: 20,
        }}
      >
        <RadioButton.Group
          onValueChange={(value) => setValue(value)}
          value={Value}
        >
          <View
            style={{
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>Donation</Text>
            <RadioButton value="first" />
          </View>
          <View
            style={{
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>Resources</Text>
            <RadioButton value="second" />
          </View>
        </RadioButton.Group>
        {Value === "first" ? (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              gap: 30,
            }}
          >
            <TextInput label="Title" mode="outlined" style={{ width: 300 }} />
            <TextInput
              label="Issue Description"
              mode="outlined"
              multiline={true}
              numberOfLines={4}
              style={{ width: 300 }}
            />
            <Button mode="elevated">Attach proof</Button>
            <TextInput
              label="Account Details"
              mode="outlined"
              style={{ width: 300 }}
            />
            <TextInput label="Amount" mode="outlined" style={{ width: 300 }} />
            <Button mode="elevated">Submit</Button>
          </View>
        ) : (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
            }}
          >
            <TextInput
              label="Enter the product name"
              mode="outlined"
              style={{ width: 300 }}
            />
            <TextInput
              label="Enter the quantity of the product"
              mode="outlined"
              style={{ width: 300 }}
            />
            <Button mode="elevated">Attach Proof</Button>
            <TextInput
              mode="outlined"
              label="Enter your contact details "
              style={{ width: 300 }}
            />
            <TextInput
              mode="outlined"
              label="Enter the description of why you need these resources"
              style={{ width: 300 }}
              multiline={true}
              numberOfLines={4}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
              }}
            >
              <Checkbox
                status={stateCheckBox ? "checked" : "unchecked"}
                onPress={() => {
                  setStateCheckBox(!stateCheckBox);
                }}
              />
              <Text>
                I agree to the terms and conditions of the organization
              </Text>
            </View>
            <Button mode="elevated">Submit</Button>
          </View>
        )}
      </View>
    </Provider>
  );
};

export default CreateDonationPAge;

const styles = StyleSheet.create({});
