import React from "react";
import { StyleSheet, Text } from "react-native";

import Layout from "./Layout";
import { skyBlue } from "../styling/colors";
import Mountains from "./../styling/images/map2.svg";

const Map = ({ navigation }) => {
  return (
    <Layout gradient={[skyBlue.dark, skyBlue.light]} mountainHeight={136} Mountains={Mountains}>
      <Text>Map stuff</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({});

export default Map;
