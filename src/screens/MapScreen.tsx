import React from "react";

import Layout from "./Layout";
import Mapbox from "./../components/Map/Mapbox";
import { skyBlue } from "../styling/colors";
import Mountains from "./../styling/images/map.svg";

const Map = ({ navigation }) => {
  return (
    <Layout gradient={[skyBlue.dark, skyBlue.light]} mountainHeight={198} Mountains={Mountains}>
      <Mapbox />
    </Layout>
  );
};

export default Map;
