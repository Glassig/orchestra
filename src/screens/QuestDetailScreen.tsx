import React from "react";
import { StyleSheet, Text } from "react-native";

import Layout from "./Layout";
import { skyBlue } from "../styling/colors";
import Mountains from "./../styling/images/mission_detail.svg";

const QuestDetail = ({ route, navigation }) => {
  const questId = route.params.id;
  return (
    <Layout gradient={[skyBlue.dark, skyBlue.light]} mountainHeight={136} Mountains={Mountains}>
      <Text>Quest Detail id: {questId}</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({});

export default QuestDetail;
