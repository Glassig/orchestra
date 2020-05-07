import React from "react";
import { StyleSheet, Text } from "react-native";

import Layout from "./Layout";
import { skyBlue } from "../styling/colors";
import Mountains from "./../styling/images/profile.svg";

const Profile = ({ navigation }) => {
  return (
    <Layout gradient={[skyBlue.dark, skyBlue.light]} mountainHeight={180} Mountains={Mountains}>
      <Text>Profile stuff</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({});

export default Profile;
