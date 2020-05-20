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
        <MText style={styles.title}>{quest.title}</MText>
        <MText style={styles.description} numberOfLines={1}>
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
    color: "white",
    fontSize: 24,
  },
  description: {
    color: "white",
    fontSize: 16,
  },
});

export default QuestlogEntry;
