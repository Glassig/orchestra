import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Layout from "./Layout";
import { Quest } from "./../components/Quest/QuestInterfaces";
import { skyBlue } from "../styling/colors";
import Mountains from "./../styling/images/mission_detail.svg";

/*
Notes on what to do: remove header from App.tsx for stack navigator. 
Create own back button. 
Then remove paddingTop: 50, in the stylesheet.
*/
const QuestDetail: React.FC<{ route: any; navigation: any }> = ({ route, navigation }) => {
  const quest: Quest = route.params.quest;
  return (
    <Layout gradient={[skyBlue.dark, skyBlue.light]} mountainHeight={187} Mountains={Mountains}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>{quest.title}</Text>
        <Text style={styles.description}>{quest.description}</Text>
        {quest.map_circle && <Text>Position: {quest.map_circle}</Text>}
        {quest.reward && <Text>Reward: {quest.reward}</Text>}
        <Text style={styles.creator}>//{quest.creator.displayname}</Text>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 50,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontVariant: ["small-caps"],
  },
  description: {
    color: "white",
    fontSize: 16,
  },
  creator: {
    color: "white",
    fontSize: 16,
  },
});

export default QuestDetail;
