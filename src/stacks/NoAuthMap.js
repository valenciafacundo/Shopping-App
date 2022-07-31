import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NoAuthRoute, NoAuthStack } from "../routes";
import Register from "../screens/NoAutenticated/Register";
const NoAuthMap = () => {
  return (
    <>
      <NoAuthStack.Navigator>
        <NoAuthStack.Screen name={NoAuthRoute.register} component={Register} />
      </NoAuthStack.Navigator>
    </>
  );
};

export default NoAuthMap;

const styles = StyleSheet.create({});
