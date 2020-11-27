import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Modal,
  TouchableHighlight,
} from "react-native";
// import { Header } from "./component/Header";

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Dogmeat Mobile</Text>
    </View>
  );
}


export default function App() {
  let flag = false;
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      {Header()}
      {/* <Transaction /> */}
      <View style={styles.menu}>
        <Text style={styles.titleText}>Bem vindo ao dogmeat Mobile!</Text>
        <StatusBar style="auto" />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Por favor, digite os dados da transação
              </Text>

              <TextInput style={styles.input}>preço</TextInput>
              <TextInput style={styles.input}>
                quantidade de ração comprada
              </TextInput>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Confirmar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "stretch",
    justifyContent:'space-evenly',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },

  container: {
    flex: 1,
    backgroundColor: "#FFF1E7",

    // justifyContent: "center",
  },

  menu: {
    display: "flex",
    height: "50%",
    justifyContent: "space-around",
    alignItems: "center",
    alignContent: "center",
  },

  header: {
    width: "100%",
    height: "8%",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
    backgroundColor: "rgb(25, 114, 120)",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
});
