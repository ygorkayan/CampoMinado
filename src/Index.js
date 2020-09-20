import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Alert } from "react-native";
import Header from "./Components/Header/Header";

import Params from "./Params";
import MineField from "./Components/MineField/MineField";
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed,
} from "./logica";

function minesAmount() {
  const rows = Params.getRowsAmount();
  const cols = Params.getColumnsAmount();
  return Math.ceil(cols * rows * Params.difficultLevel);
}

function createBoard() {
  const rows = Params.getRowsAmount();
  const cols = Params.getColumnsAmount();

  return createMinedBoard(rows, cols, minesAmount());
}

function onOpenField(board, setBoard, lost, won) {
  return (row, column) => {
    const newBoard = cloneBoard(board);
    openField(newBoard, row, column);
    const lost = hadExplosion(board);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert("Perdeeeeeeu!");
    }

    if (won) {
      Alert.alert("Veeeeeeeeenceu!");
    }
    setBoard(newBoard);
  };
}

function onSelectField(board, setBoard, won) {
  return (row, column) => {
    const newBoard = cloneBoard(board);
    invertFlag(newBoard, row, column);
    const won = wonGame(board);

    if (won) {
      Alert.alert("Parabens");
    }

    setBoard(newBoard);
  };
}

export default (props) => {
  const [board, setBoard] = useState(createBoard());
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);

  return (
    <SafeAreaView style={style.container}>
      <Header
        flagsLeft={minesAmount() - flagsUsed(board)}
        onNewGame={() => setBoard(createBoard())}
      />
      <View style={style.board}>
        <MineField
          board={board}
          onOpenField={onOpenField(board, setBoard, lost, won)}
          onSelectField={onSelectField(board, setBoard, won)}
        />
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  board: {
    alignItems: "center",
    backgroundColor: "#AAA",
  },
});
