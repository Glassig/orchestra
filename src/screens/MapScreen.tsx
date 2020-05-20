import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";

import Layout from "./Layout";
import { skyBlue } from "../styling/colors";
import Mountains from "./../styling/images/map.svg";
import { MAPBOX_KEY } from "./../../.env.js";

MapboxGL.setAccessToken(MAPBOX_KEY);
MapboxGL.setConnected(true);
const Map = ({ navigation }) => {
  return (
    <Layout gradient={[skyBlue.dark, skyBlue.light]} mountainHeight={198} Mountains={Mountains}>
      <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map} logoEnabled={false} />
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    height: Dimensions.get("window").height - 198 - 60, // 198 for mountains, and 60 because random
    width: Dimensions.get("window").width - 40, // padding 20
    backgroundColor: "tomato",
  },
  map: {
    flex: 1,
  },
});

export default Map;
