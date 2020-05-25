import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet, View, Platform, Text } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";
import Geolocation from "@react-native-community/geolocation";

import Marker from "./Marker";
import { Position } from "./MapInterface";
import UserDot from "./UserDot";
import { MAPBOX_KEY } from "./../../../.env.js";

MapboxGL.setAccessToken(MAPBOX_KEY);
MapboxGL.setConnected(true);

const Mapbox = () => {
  const [permission, setPermission] = useState(false);

  useEffect(() => {
    const task = async () => {
      //need to call function on android
      if (Platform.OS === "android" && Platform.Version > 23) {
        const isGranted = await MapboxGL.requestAndroidLocationPermissions();
        setPermission(isGranted);
      } else {
        setPermission(true);
      }
    };
    task();
    Geolocation.setRNConfiguration({});
  }, []);
  Geolocation.getCurrentPosition((info) => console.log(info));
  const pos: Position = {
    latitude: 17.998924,
    longitude: 59.363347,
  };
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView
          style={styles.map}
          styleURL={MapboxGL.StyleURL.Light}
          logoEnabled={false}
          attributionPosition={{ left: 8, bottom: 8 }} // The i in a circle position, it has to be present
        >
          <MapboxGL.Camera followZoomLevel={14} followUserLocation={permission} />
          {permission && <UserDot />}

          <Marker position={pos} />
        </MapboxGL.MapView>
      </View>
      {permission && <Text>Permission enabled</Text>}
      {!permission && <Text>Permission disabled</Text>}
    </View>
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
  },
  map: {
    flex: 1,
  },
});

export default Mapbox;
