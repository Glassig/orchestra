import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet, View, Platform, Text, TouchableOpacity, PermissionsAndroid } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";
import Geolocation from "@react-native-community/geolocation";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Marker from "./Marker";
import { Position } from "./MapInterface";
import UserDot from "./UserDot";
import { MAPBOX_KEY } from "../../../env";
import Locate_User_Icon from "./../../styling/images/locate_user.svg";
import { skyBlue } from "./../../styling/colors";

MapboxGL.setAccessToken(MAPBOX_KEY);
if (Platform.OS === "android") MapboxGL.setConnected(true);
Geolocation.setRNConfiguration({ skipPermissionRequests: true, authorizationLevel: "always" });

const getUserPosition = (): Promise<Position> => {
  return new Promise((resolve, _) => {
    Geolocation.getCurrentPosition(
      (info) => {
        resolve({
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        });
      },
      (error) => {
        //ERROR HANDLING
        console.error("ERROR: ", error);
      },
      { maximumAge: 60000, timeout: 5000, enableHighAccuracy: true }
    );
  });
};

const Mapbox: React.FC<{ marker?: Position }> = ({ marker }) => {
  const [permission, setPermission] = useState(false);
  const [markerPosition, setMarkerPosition] = useState(
    marker
      ? marker
      : {
          latitude: 17.998924,
          longitude: 59.363347,
        }
  );
  // if (marker) setMarkerPosition(marker);
  const insets = useSafeAreaInsets();
  const askForPermission = async () => {
    if (Platform.OS === "android") {
      const isGranted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
        title: "Location Permission",
        message: "Orchestra is dependent on where you are on a map, it will not work without it",
        buttonPositive: "Accept",
      });
      // const isGranted = await MapboxGL.requestAndroidLocationPermissions();
      setPermission(isGranted === PermissionsAndroid.RESULTS.GRANTED);
    } else {
      setPermission(true);
    }
  };

  useEffect(() => {
    askForPermission();
  }, []);

  let camera: MapboxGL.Camera | null;
  return (
    <View style={styles.page}>
      <View
        style={{
          ...styles.container,
          height: Dimensions.get("window").height - 198 - 60 - (insets.bottom + insets.top),
        }}>
        <MapboxGL.MapView
          style={styles.map}
          styleURL={MapboxGL.StyleURL.Light}
          logoEnabled={false}
          compassEnabled={true}
          attributionPosition={{ left: 8, bottom: 8 }} // The i in a circle position, it has to be present
        >
          <MapboxGL.Camera
            ref={(ref) => {
              camera = ref;
              getUserPosition().then((pos) => {
                camera?.setCamera({
                  centerCoordinate: [pos.longitude, pos.latitude],
                  animationDuration: 400,
                  zoomLevel: 14,
                });
              });
            }}
          />
          {permission && <UserDot />}

          <Marker position={markerPosition} />
        </MapboxGL.MapView>
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            if (!permission) await askForPermission();
            getUserPosition().then((pos) => {
              camera?.setCamera({
                centerCoordinate: [pos.longitude, pos.latitude],
                animationDuration: 400,
                zoomLevel: 14,
              });
            });
          }}>
          <Locate_User_Icon />
        </TouchableOpacity>
      </View>
      {permission && <Text>Permission enabled</Text>}
      {!permission && <Text>Permission disabled</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 2,
    alignItems: "flex-start",
  },
  container: {
    // height: Dimensions.get("window").height - 198 - 60, // 198 for mountains, and 60 because random
    width: Dimensions.get("window").width - 40, // padding 20
  },
  map: {
    flex: 1,
  },
  button: {
    zIndex: 100,
    position: "absolute",
    right: 8,
    bottom: 8,
    width: 26,
    height: 26,
    padding: 3,
    borderRadius: 13,
    backgroundColor: skyBlue.dark,
  },
});

export default Mapbox;
