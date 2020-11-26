import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
// import { Header } from "./component/Header";
import { Transaction } from "./component/Transaction";

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Dogmeat Mobile</Text>
    </View>
  );
}


export default function App() {
  return (
    <View style={styles.container}>
      {Header()}
      <View style={styles.menu}>
        <Text style={styles.titleText}>Bem vindo ao dogmeat Mobile!</Text>
        <StatusBar style="auto" />
        <Button
          onPress={() => {
          alert('clicado')
          }}
          title="Registrar nova compra"
          color="rgb(25, 114, 120)"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF1E7",

    // justifyContent: "center",
  },

  menu: {
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
