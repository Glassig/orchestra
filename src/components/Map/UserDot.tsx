import React from "react";
import MapboxGL from "@react-native-mapbox-gl/maps";

const UserDot: React.FC<{}> = () => {
  return <MapboxGL.UserLocation />;
};

export default UserDot;
