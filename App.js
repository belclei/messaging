import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Status from "./components/Status";
import MessageList from "./components/MessageList";
import {
  createImageMessage,
  createLocationMessage,
  createTextMessage
} from "./utils/MessageUtils";

export default class App extends React.Component {
  state = {
    messages: [
      createImageMessage("https://unsplash.it/300/300"),
      createLocationMessage({ latitude: 37.78825, longitude: -122.4324 }),
      createTextMessage("Vô tomá banho"),
      createImageMessage("https://unsplash.it/300/300"),
      createTextMessage("Céu!"),
      createTextMessage("do"),
      createTextMessage("Mano"),
      createLocationMessage({ latitude: 0, longitude: 0 }),
      createTextMessage(
        "Silvio Santos Ipsum mah roda a roduamm. É bom ou não é? É fácil ou no é? Mah você mora com o papai ou com a mamãem? Ma voc está certo dissoam? Mah roda a roduamm. É por sua conta e riscoamm? Estamos em ritmo de festamm. Ma o Silvio Santos Ipsum é muitoam interesanteam. Com ele ma você vai gerar textuans ha haae."
      ),
      createTextMessage(
        "Ha haeeee. Hi hi. Mah roda a roduamm. Ha haeeee. Hi hi. É dinheiro ou não é? Ma vejam só, vejam só. Ha hai. Bem boladoam, bem boladoam. Bem gozadoam. Ha haeeee. Hi hi. Mah você mora com o papai ou com a mamãem? No duro?"
      )
    ]
  };
  handlePressMessage = () => {};
  renderMessageList() {
    const { messages } = this.state;
    return (
      <View style={styles.content}>
        <MessageList
          messages={messages}
          onPressMessage={this.handlePressMessage}
        />
      </View>
    );
  }
  renderInputMethorEditor() {
    return <View style={styles.inputMethodEditor} />;
  }
  renderToolbar() {
    return <View style={styles.toolbar} />;
  }
  render() {
    return (
      <View style={styles.container}>
        <Status />
        {this.renderMessageList()}
        {this.renderToolbar()}
        {this.renderInputMethorEditor()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  content: {
    flex: 1,
    backgroundColor: "white"
  },
  inputMethodEditor: {
    flex: 1,
    backgroundColor: "white"
  },
  toolbar: {
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.04)",
    backgroundColor: "white"
  }
});
