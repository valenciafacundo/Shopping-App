import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RFValue } from "react-native-responsive-fontsize";

const ButtonRounded = ({ title, onPress }) => {
  const colors = useSelector((state) => state.theme.colors);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor: colors.main }]}
    >
      <Text style={[styles.text, { color: colors.bgMain }]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonRounded;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    alignItems: "center",
    padding: 7,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  text: {
    color: "#fff",
    fontSize: RFValue(14, 667),
  },
});
