import React from "react";
import { StyleSheet, View } from "react-native";
import { Position } from "./MapInterface";
import MapboxGL from "@react-native-mapbox-gl/maps";

const Marker: React.FC<{ position: Position }> = ({ position }) => {
  return (
    <MapboxGL.MarkerView coordinate={[position.latitude, position.longitude]}>
      <View style={styles.dot}></View>
    </MapboxGL.MarkerView>
  );
};

const styles = StyleSheet.create({
  dot: {
    width: 25,
    height: 25,
    backgroundColor: "red",
    borderRadius: 25,
    opacity: 0.2,
  },
});

export default Marker;
