import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";
import { useSelector } from "react-redux";
import BadgeIcon from "./icons/BadgeIcon";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Welcome = ({ userName, userImg, greetingColor }) => {
  const themeStatus = useSelector((state) => state.theme);
  const { colors } = themeStatus;
  const URI = userImg
    ? userImg
    : "https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Penguin-512.png";
  return (
    <View style={[styles.container, {backgroundColor:colors.bgPrimary}]}>
      <View style={styles.cardContainer}>
        <Avatar source={{ uri: URI }} size={hp('8%')} rounded />

        <View style={styles.textPosition}>
          <Text
            style={[
              styles.text1,
              { color: greetingColor ? greetingColor : colors.main },
            ]}
          >
            Hello!,
          </Text>
          <Text style={[styles.text2, {color:colors.textPrimary}]}>{userName}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <BadgeIcon name={"cart-outline"} badgeType={"error"} value={1} />
        <BadgeIcon name={"bell-outline"} badgeType={"error"} value={1} />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp('4%'),
    marginBottom:10
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
  },
  textPosition: {
    marginLeft: 15,
  },
  text1: {
    fontSize: RFValue(18, 667),
    fontWeight: "bold",
  },
  text2: {
    fontSize: RFValue(18, 667),
    fontWeight: "bold",
    color: "gray",
  },
});
