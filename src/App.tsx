/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import { SafeAreaView, StyleSheet, ScrollView, View, Text, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { Quest } from "./components/Quest/Quest";
import { skyblue } from "./styling/colors";
import Mountains from "./styling/images/mission_detail.svg";

/*
SafeAreaView is for IOS, protect content from rounded corner and camera notch.
*/
const App = () => {
  return (
    <>
      <SafeAreaView style={{ height: "100%" }}>
        <LinearGradient colors={[skyblue.dark, skyblue.light]} style={styles.linearGradient}></LinearGradient>
        {/* <LinearGradient colors={[skyblue.dark, skyblue.light]} style={styles.linearGradient}> */}
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollview}>
          <View>
            <Quest />
            <Text>
              Cupcake ipsum dolor sit amet lollipop wafer pudding. Chocolate biscuit ice cream muffin pudding caramels
              topping. Tart powder cotton candy macaroon lemon drops cookie cotton candy chupa chups gingerbread.
              Jelly-o halvah jelly-o tootsie roll. Chocolate bar brownie biscuit croissant cake brownie caramels.
              Jelly-o caramels brownie tootsie roll apple pie. Tart jelly beans danish gummies jelly-o tart macaroon.
              Soufflé cheesecake cookie danish apple pie jelly pie. Cake lemon drops cotton candy croissant sweet roll
              candy pudding. Bonbon powder marshmallow cake cake apple pie bonbon chocolate cake. Biscuit biscuit candy
              canes icing ice cream gingerbread jelly beans. Cupcake gingerbread marshmallow muffin pie dessert
              cheesecake candy canes. Tart dragée jelly chocolate bar. Lemon drops sugar plum marzipan carrot cake candy
              canes liquorice pie topping jelly. Cookie biscuit jelly beans gummies. Soufflé cheesecake gummi bears.
              Soufflé tart donut. Halvah wafer jelly beans. Donut candy pastry candy. Lemon drops pastry jelly beans
              marzipan cake marshmallow. Fruitcake marzipan bonbon cotton candy marzipan gummies. Biscuit jelly-o
              lollipop jelly-o. Tart jelly sesame snaps lollipop pie bear claw powder oat cake. Danish cookie fruitcake
              pastry wafer gummies tart jelly beans lemon drops. Cookie macaroon jujubes carrot cake soufflé liquorice.
              Chocolate sesame snaps tart lemon drops. Topping sweet roll macaroon. Candy canes marzipan marzipan jelly
              beans. Cheesecake biscuit danish tootsie roll. Jelly-o fruitcake tiramisu jelly beans gingerbread danish
              jelly-o. Icing sweet cake candy canes sweet sugar plum. Cheesecake marzipan tart carrot cake pudding
              cotton candy. Chocolate cake muffin sweet roll sugar plum cookie chocolate cake. Pastry danish jelly
              candy. Cake dessert chocolate bar bear claw. Caramels tart lemon drops halvah oat cake marshmallow apple
              pie. Powder oat cake fruitcake. Liquorice cupcake sweet dragée cupcake gummi bears gummi bears.
              Marshmallow donut chocolate cake gummi bears jelly beans apple pie. Pie pastry toffee pudding dessert
              pastry bear claw powder. Lollipop lemon drops cookie pudding cheesecake gummi bears cotton candy.
              Croissant sesame snaps marshmallow muffin tootsie roll dessert. Macaroon tiramisu macaroon jelly beans
              tart candy sweet roll icing pudding. Cheesecake lemon drops oat cake. Marzipan carrot cake sugar plum. Oat
              cake pastry oat cake candy canes oat cake lemon drops. Jelly-o bonbon gummies cake powder. Wafer
              marshmallow oat cake cupcake chupa chups halvah marzipan cookie dessert. Gummies muffin carrot cake
              gummies fruitcake chocolate cake pastry. Ice cream cookie marzipan gingerbread cotton candy topping
              marshmallow lemon drops dragée. Cake macaroon biscuit pastry. Croissant cookie jelly dragée cupcake
              chocolate cake chocolate bar tiramisu. Sesame snaps pudding lollipop lollipop. Halvah donut cake cotton
              candy. Macaroon cake bonbon macaroon dessert macaroon tart chocolate. Donut gummies chupa chups. Chocolate
              cake chocolate cake fruitcake marzipan tiramisu cake. Topping soufflé topping caramels dragée bear claw
              marshmallow. Chocolate cheesecake halvah liquorice tootsie roll croissant. Oat cake dragée lemon drops
              candy apple pie. Cupcake sesame snaps cotton candy liquorice cupcake donut gummies marshmallow.
            </Text>
          </View>
          <View style={styles.paddingView}></View>
        </ScrollView>
        <View style={styles.mountainsView} pointerEvents={"none"}>
          <Mountains style={styles.mountains} />
        </View>
      </SafeAreaView>
    </>
  );
};

const svgHeight: number = 165; //this is different for different svgs

const styles = StyleSheet.create({
  linearGradient: {
    position: "absolute",
    right: 0,
    top: 0,
    left: 0,
    bottom: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    zIndex: -1,
  },
  scrollview: {
    backgroundColor: "transparent",
    padding: 20,
  },
  paddingView: {
    height: svgHeight,
  },
  mountainsView: {
    width: Dimensions.get("window").width,
    position: "absolute",
    bottom: 0,
    height: svgHeight,
  },
  mountains: {
    bottom: 0,
    position: "absolute",
  },
});

export default App;
