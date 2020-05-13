import React from "react";
import { StyleSheet, ScrollView, View, Text } from "react-native";
import { gql, useQuery } from "@apollo/client";

import Layout from "./Layout";
import { Quest } from "../components/Quest/Quest";
import Link from "./../components/Utils/Link";
import { skyBlue } from "../styling/colors";
import Mountains from "./../styling/images/missions_list.svg";

const svgHeight: number = 165; //this is different for different svgs

const getQuests = gql`
  query MyQuery2 {
    quests {
      id
      title
      description
      creator {
        displayname
      }
    }
  }
`;

const Quests = () => {
  const { loading, error, data } = useQuery(getQuests);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>ERROR! {error.message}</Text>;
  return data.quests.map((value) => <Text key={value.title}>{value.title}</Text>);
};

const Questlog = ({ navigation }) => {
  return (
    <Layout gradient={[skyBlue.dark, skyBlue.light]} mountainHeight={svgHeight} Mountains={Mountains}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollview}>
        <View>
          <Quest />
          <Link
            onPress={() => {
              navigation.navigate("QuestDetail", {
                questId: 86,
              });
            }}>
            Go to Quest
          </Link>
          <Quests />
        </View>
        <View style={styles.paddingView}></View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: "transparent",
    padding: 20,
  },
  paddingView: {
    height: svgHeight,
  },
});

export default Questlog;
