import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { Badge } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const BadgeIcon = ({ value, name, badgeType,onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon
        type="material-community"
        name={name}
        color={"gray"}
        size={hp('4%')}
        style={{ padding: 5 }}
      />
      <Badge
        value={value}
        status={badgeType ? badgeType : null}
        //success, error, primary, warning
        containerStyle={{ position: "absolute", top: -4, right: -4 }}
      />
    </TouchableOpacity>
  );
};

export default BadgeIcon;

const styles = StyleSheet.create({});
