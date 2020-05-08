import React from "react";

import Layout from "./Layout";
import Link from "./../components/Utils/Link";
import { skyRed } from "../styling/colors";
import Mountains from "./../styling/images/startscreen.svg";

const Home = ({ navigation }) => {
  return (
    <Layout gradient={[skyRed.dark, skyRed.light]} mountainHeight={136} Mountains={Mountains}>
      <Link onPress={() => navigation.navigate("MainView")}>Step Out</Link>
    </Layout>
  );
};

export default Home;
