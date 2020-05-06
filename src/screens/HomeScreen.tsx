import React from "react";
import { StyleSheet, Button } from "react-native";

import Layout from "./Layout";
import CakeIpsum from "../components/CakeIpsum";
import { skyRed } from "../styling/colors";
import Mountains from "./../styling/images/startscreen.svg";

const Home = ({ navigation }) => {
  return (
    <Layout gradient={[skyRed.dark, skyRed.light]} mountainHeight={136} Mountains={Mountains}>
      <Button title="Go to Details" onPress={() => navigation.navigate("MainView")} />
      <CakeIpsum />
    </Layout>
  );
};

const styles = StyleSheet.create({});

export default Home;