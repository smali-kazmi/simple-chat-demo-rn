import React, { Component } from "react";
import { ScrollView, Text, Image, View, TextInput, Button } from "react-native";
import { Images } from "../Themes";

// Styles
import styles from "./Styles/LaunchScreenStyles";

export default class ChatScreen extends Component {
  constructor(props) {
    super(props);
    const { state } = this.props.navigation;
    this.state = { name: state.params.name };
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
        </ScrollView>
      </View>
    );
  }
}
