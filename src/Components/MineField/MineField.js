import React from "react";
import { View, StyleSheet } from "react-native";
import Field from "../Field/Field";

export default (props) => {
  const rows = props.board.map((row, r) => {
    const columns = row.map((field, c) => {
      return (
        <Field
          {...field}
          key={c}
          onOpen={() => props.onOpenField(r, c)}
          onSelect={(e) => props.onSelectField(r, c)}
        />
      );
    });
    return (
      <View style={{ flexDirection: "row" }} key={r}>
        {columns}
      </View>
    );
  });
  return <View style={style.container}>{rows}</View>;
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#EEE",
  },
});
