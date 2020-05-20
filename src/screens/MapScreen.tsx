import React from "react";

import Layout from "./Layout";
import MText from "./../components/Utils/MText";
import { skyBlue } from "../styling/colors";
import Mountains from "./../styling/images/map.svg";

const Map = ({ navigation }) => {
  return (
    <Layout gradient={[skyBlue.dark, skyBlue.light]} mountainHeight={198} Mountains={Mountains}>
      <MText>Map stuff</MText>
    </Layout>
  );
};

export default Map;
