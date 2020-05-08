import React from "react";
import { Text } from "react-native";

import Layout from "./Layout";
import { skyBlue } from "../styling/colors";
import Mountains from "./../styling/images/map.svg";

const Map = ({ navigation }) => {
  return (
    <Layout gradient={[skyBlue.dark, skyBlue.light]} mountainHeight={198} Mountains={Mountains}>
      <Text>Map stuff</Text>
    </Layout>
  );
};

export default Map;
