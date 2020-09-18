import { StyleSheet } from "react-native";
import Params from "../../Params";

export default StyleSheet.create({
  field: {
    height: Params.blockSize,
    width: Params.blockSize,
    borderWidth: Params.borderSize,
  },
  regular: {
    backgroundColor: "#999",
    borderLeftColor: "#CCC",
    borderTopColor: "#CCC",
    borderRightColor: "#333",
    borderBottomColor: "#333",
  },
  opened: {
    backgroundColor: "#999",
    borderColor: "#777",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontWeight: "bold",
    fontSize: Params.fontSize,
  },
  exploded: {
    backgroundColor: "red",
    borderColor: "red",
  },
});
