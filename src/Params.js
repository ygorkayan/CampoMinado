import { Dimensions } from "react-native";

export default {
  blockSize: 30,
  borderSize: 5,
  fontSize: 15,
  headerRation: 0.15, // Proporçao do painel superior na tela
  difficultLevel: 0.1,
  getColumnsAmount() {
    const width = Dimensions.get("window").width;
    return Math.floor(width / this.blockSize);
  },
  getRowsAmount() {
    const totalHeight = Dimensions.get("window").height;
    const boardHeight = totalHeight * (1 - this.headerRation);
    return Math.floor(boardHeight / this.blockSize);
  },
};
