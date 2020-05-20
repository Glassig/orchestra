import React from "react";
import { StyleSheet, View } from "react-native";
import MText from "./../Utils/MText";
import { Quest, QuestType } from "./QuestInterfaces";

import Sword from "./../../styling/images/sword.svg";

const QuestlogEntry: React.FC<{ quest: Quest }> = ({ quest }) => {
  if (quest.type == QuestType.KILL_MONSTERS) {
    // console.log("beep");
  }
  return (
    <View style={styles.wrapper}>
      <Sword />
      <View style={styles.text}>
        <MText styles={styles.title}>{quest.title}</MText>
        <MText styles={styles.description} nrOfLines={1}>
          {quest.description}
        </MText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "row",
  },
  text: {
    flex: 1,
    paddingBottom: 10,
  },
  title: {
    fontSize: 24,
    fontVariant: ["small-caps"],
  },
  description: {
    fontSize: 16,
  },
});

export default QuestlogEntry;
