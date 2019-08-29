import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import styles from "./Styles/AlertMessageStyles";

export default class Message extends Component {
  static propTypes = {
    message: PropTypes.object
  };

  render() {
    const { sender, message } = this.props.message;
    console.log("i m called ", sender, message);
    return (
      <View>
        <Text>
          {sender && sender.toUpperCase()}: {message}
        </Text>
      </View>
    );
  }
}
