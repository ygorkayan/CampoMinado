import React from "react";
import { View } from "react-native";
import MineStyle from "./MineStyle";

function rotacionar(qtd) {
  return { transform: [{ rotate: `${qtd}deg` }] };
}

export default (props) => {
  return (
    <View style={MineStyle.container}>
      <View style={MineStyle.coreMine}></View>
      <View style={MineStyle.line}></View>
      <View style={[MineStyle.line, rotacionar(45)]}></View>
      <View style={[MineStyle.line, rotacionar(90)]}></View>
      <View style={[MineStyle.line, rotacionar(135)]}></View>
    </View>
  );
};
