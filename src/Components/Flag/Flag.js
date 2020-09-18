import React from "react";
import { View } from "react-native";
import FlagStyle from "./FlagStyle";

export default (props) => {
  return (
    <View style={FlagStyle.container}>
      <View
        style={[
          FlagStyle.flagpole,
          props.bigger ? FlagStyle.flagpoleBigger : null,
        ]}
      />
      <View
        style={[FlagStyle.flag, props.bigger ? FlagStyle.flagBigger : null]}
      />
      <View
        style={[FlagStyle.base1, props.bigger ? FlagStyle.base1Bigger : null]}
      />
      <View
        style={[FlagStyle.base2, props.bigger ? FlagStyle.base2Bigger : null]}
      />
    </View>
  );
};
