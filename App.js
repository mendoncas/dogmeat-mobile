import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  TouchableHighlight,
} from "react-native";
import axios from "axios";
import DropDownPicker from "react-native-dropdown-picker";

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Dogmeat Mobile</Text>
    </View>
  );
}

async function SendData(price, amount) {
  let dateObj = new Date();
  let month = dateObj.getUTCMonth() + 1; //months from 1-12
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();

  const res = await axios
    .post("localhost:3000/deal/create", {
      date: `${year}-${month}-${day}`,
      value: price,
      amount: amount,
    })
    .then(console.log(res));

  console.log(res);
}

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  let [price, amount] = [null, null];
  let pet = null;

  return (
    <View style={styles.container}>
      {Header()}

      <View style={styles.menu}>
        <Text style={styles.titleText}>Bem vindo ao dogmeat Mobile!</Text>
        <StatusBar style="auto" />
        <Modal
          display="flex"
          alignContent="space-evenly"
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

              <TextInput
                style={styles.input}
                placeholder={"preço"}
                onChangeText={(value) => {}}
              ></TextInput>
              <TextInput
                style={styles.input}
                placeholder={"quantidade de ração comprada"}
                onChangeText={(value) => {
                  amount = value;
                }}
              ></TextInput>

              <DropDownPicker
                items={[
                  {
                    label: "Bolinha",
                    value: "usa",
                  },
                  {
                    label: "Zeus",
                    value: "uk",
                  },
                  {
                    label: "Thor",
                    value: "thosr",
                  },
                ]}
                containerStyle={{ height: 40 }}
                style={{ backgroundColor: "#fafafa" }}
                onChangeItem={(item) => {
                  pet = item;
                }}
              />

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  //funnção do axios pra enviar post request
                  SendData(pet, price, amount);
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
          <Text style={styles.textStyle}>Cadastrar compra</Text>
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
    justifyContent: "space-evenly",

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
    backgroundColor: "#14565c",
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
