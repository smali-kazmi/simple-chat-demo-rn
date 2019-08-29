import React, { Component } from "react";
import { ScrollView, Text, Image, View, TextInput, Button } from "react-native";
import { Images } from "../Themes";

// Styles
import styles from "./Styles/LaunchScreenStyles";

export default class ChatScreen extends Component {
  constructor(props) {
    super(props);
    const { state } = this.props.navigation;
    this.state = { name: state.params.name, text: "", messages: [] };
  }
  sendMessage() {
    console.log("i m called");
    const sender = this.state.name;
    const message = this.state.text;

    const messages = this.state.messages;

    messages.push({ sender, message });

    this.setState({ text: "", messages: messages });

    console.log(this.state.messages);
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {this.state.name}! Welcome to chat screen
            </Text>
          </View>

          <View style={styles.section}></View>

          <View style={styles.section}>
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
            <Button title="Send" onPress={() => this.sendMessage()} />
          </View>
        </ScrollView>
      </View>
    );
  }
}
