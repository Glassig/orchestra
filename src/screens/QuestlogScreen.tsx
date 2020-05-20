import React from "react";
import { ActivityIndicator, StyleSheet, ScrollView, View } from "react-native";
import { gql, useQuery } from "@apollo/client";

import Layout from "./Layout";
import QuestlogEntry from "../components/Quest/QuestlogEntry";
import { Quest } from "../components/Quest/QuestInterfaces";
import { ComponentLink } from "./../components/Utils/Link";
import MText from "./../components/Utils/MText";
import { skyBlue } from "../styling/colors";
import Mountains from "./../styling/images/missions_list.svg";

const svgHeight: number = 165; //this is different for different svgs

// How to do this,
const getQuests = gql`
  query MyQuery {
    quests(where: { quest_statuses: { status: { _neq: 2 } } }) {
      description
      title
      type
      quest_statuses {
        status
      }
      creator_id
      map_circle
      reward
      id
      creator {
        displayname
      }
    }
  }
`;

// const getQuestDetails = gql`
//   query MyQuery2 {
//     quests {
//       id
//       title
//       description
//       creator {
//         displayname
//       }
//     }
//   }
// `;

const Quests: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { loading, error, data } = useQuery(getQuests);
  if (loading) return <ActivityIndicator color={"#f00"} />;
  if (error) return <MText>ERROR! {error.message}</MText>;
  return data.quests.map((value: Quest) => (
    <ComponentLink
      onPress={() => {
        navigation.navigate("QuestDetail", {
          quest: value,
        });
      }}
      key={value.id}>
      <QuestlogEntry quest={value} />
    </ComponentLink>
  ));
};

const Questlog: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <Layout gradient={[skyBlue.dark, skyBlue.light]} mountainHeight={svgHeight} Mountains={Mountains}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollview}>
        <View>
          <Quests navigation={navigation} />
        </View>
        <View style={styles.paddingView}></View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: "transparent",
  },
  paddingView: {
    height: svgHeight,
  },
});

export default Questlog;
