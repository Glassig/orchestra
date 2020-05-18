import React from "react";
import { StyleSheet, Text, View } from "react-native";
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
        <Text style={styles.title}>{quest.title}</Text>
        <Text style={styles.description} numberOfLines={1}>
          {quest.description}
        </Text>
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
