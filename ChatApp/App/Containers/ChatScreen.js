import React, { Component } from "react";
import { ScrollView, Text, Image, View, TextInput, Button } from "react-native";
import { Images } from "../Themes";
import Message from "../Components/Message";
import SocketIOClient from "socket.io-client";

// Styles
import styles from "./Styles/LaunchScreenStyles";

export default class ChatScreen extends Component {
  constructor(props) {
    super(props);
    const { state } = this.props.navigation;
    const _this = this;
    this.state = { name: state.params.name, text: "", messages: [] };
    this.socket = SocketIOClient("http://local-ws.hucu.ai:3002", {
      transports: ["polling", "websocket"]
    });

    this.receiveMessage = this.receiveMessage.bind(this);

    this.socket.on("ChatApp:NewMsgRece", function(payload) {
      console.log("ChatApp:NewMsgRece", payload);
      _this.receiveMessage(payload);
    });
  }

  sendMessage() {
    console.log("i m called");
    const sender = this.state.name;
    const message = this.state.text;

    const messages = this.state.messages;

    this.socket.emit("ChatApp:NewMsg", { sender, message });
    this.receiveMessage({ sender, message });
  }

  receiveMessage(message) {
    const messages = this.state.messages;

    messages.push(message);

    this.setState({ text: "", messages: messages });

    console.log(this.state.messages);
  }
  showMessages() {
    return this.state.messages.length ? (
      this.state.messages.map((message, index) => {
        return <Message message={message} key={index} />;
      })
    ) : (
      <View>
        <Text>No New Message</Text>
      </View>
    );
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
          <View style={styles.section}>{this.showMessages()}</View>
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
