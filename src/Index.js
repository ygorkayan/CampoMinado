import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";
import Field from "./Components/Field/Field";

export default (props) => {
  return (
    <SafeAreaView style={style.container}>
      <Text>Campo Minado</Text>
      <Field />
      <Field opened nearMines={5} />
      <Field mined />
      <Field mined opened />
      <Field flagged />
      <Field flagged opened />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
