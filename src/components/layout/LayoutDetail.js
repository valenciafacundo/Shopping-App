import { StyleSheet, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const LayoutDetail = ({ children }) => {
  const colors = useSelector((state)=>state.theme.colors)
  return <View style={[styles.container,{backgroundColor:colors.bgMain}]}>{children}</View>;
};

export default LayoutDetail;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    height: "35%",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 30,
  },
});
