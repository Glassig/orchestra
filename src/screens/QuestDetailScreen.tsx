import React from "react";
import { StyleSheet, View } from "react-native";

import Layout from "./Layout";
import { Quest } from "./../components/Quest/QuestInterfaces";
import MText from "./../components/Utils/MText";
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
        <MText styles={styles.title}>{quest.title}</MText>
        <MText styles={styles.description}>{quest.description}</MText>
        {quest.map_circle && <MText>Position: {quest.map_circle}</MText>}
        {quest.reward && <MText>Reward: {quest.reward}</MText>}
        <MText styles={styles.creator}>//{quest.creator.displayname}</MText>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontVariant: ["small-caps"],
    textAlign: "center",
  },
  description: {
    fontSize: 16,
  },
  creator: {
    fontSize: 32,
    fontFamily: "Penna",
    textAlign: "right",
  },
});

export default QuestDetail;
