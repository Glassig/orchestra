import React from "react";

import Layout from "./Layout";
import MText from "./../components/Utils/MText";
import { skyBlue } from "../styling/colors";
import Mountains from "./../styling/images/profile.svg";

const Profile = ({ navigation }) => {
  return (
    <Layout gradient={[skyBlue.dark, skyBlue.light]} mountainHeight={180} Mountains={Mountains}>
      <MText>Profile stuff</MText>
    </Layout>
  );
};

export default Profile;
