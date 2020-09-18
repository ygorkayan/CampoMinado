import React from "react";
import { View, Text } from "react-native";
import Style from "./FieldStyle";

import Mine from "../Mine/Mine";
import Flag from "../Flag/Flag";

export default (props) => {
  const { mined, opened, nearMines, exploded, flagged } = props;

  const styleField = [Style.field];
  if (opened) styleField.push(Style.opened);
  if (exploded) styleField.push(Style.exploded);
  if (flagged) styleField.push(Style.flagged);
  if (!opened && !exploded) styleField.push(Style.regular);

  let color = null;
  if (nearMines > 0) {
    if (nearMines == 1) color = "#2A28D7";
    if (nearMines == 2) color = "#2B520F";
    if (nearMines > 2 && nearMines < 6) color = "#F9060A";
    if (nearMines >= 6) color = "#F221A9";
  }

  const mina = <Text style={[Style.label, { color }]}>{nearMines}</Text>;

  return (
    <View style={styleField}>
      {!mined && opened && nearMines > 0 ? mina : false}
      {mined && opened ? <Mine /> : false}
      {flagged && !opened ? <Flag /> : false}
    </View>
  );
};
