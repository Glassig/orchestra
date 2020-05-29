import React from "react";

import Layout from "./Layout";
import Mapbox from "./../components/Map/Mapbox";
import { skyBlue } from "../styling/colors";
import Mountains from "./../styling/images/map.svg";
import { Position } from "src/components/Map/MapInterface";

const Map: React.FC<{ route: any; navigation: any }> = ({ route, navigation }) => {
  const position: Position = route?.params?.position;
  console.log("pos: ", position);
  return (
    <Layout gradient={[skyBlue.dark, skyBlue.light]} mountainHeight={198} Mountains={Mountains}>
      {position && <Mapbox marker={position} />}
      {!position && <Mapbox />}
    </Layout>
  );
};

export default Map;
