import React, { Component } from "react";
import { ScrollView, Text, Image, View, TextInput, Button } from "react-native";
import { Images } from "../Themes";

// Styles
import styles from "./Styles/LaunchScreenStyles";

export default class LaunchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Simple chat app</Text>
            <TextInput
              style={{
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                marginTop: 10,
                paddingLeft: 10
              }}
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
            />
            <Button title="Enter" />
          </View>
        </ScrollView>
      </View>
    );
  }
}
