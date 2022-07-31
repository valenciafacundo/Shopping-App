import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import Constants from "expo-constants";
import { RFValue } from "react-native-responsive-fontsize";
import { Header, Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native";

const CustomHeader = ({
  navigation,
  rightPress,
  title,
  align,
  rightName,
  rightType,
  goBack,
}) => {
  const { colors, theme } = useSelector((state) => state.theme);
  const route = useRoute();

  const changeDark = () => {
    dispatch({ type: "change_theme", payload: "dark" });
    setDarkTheme(true);
  };
  const changeLight = () => {
    dispatch({ type: "change_theme", payload: "light" });
    setDarkTheme(false);
  };

  const leftComponent = (
    <Icon
      type="material-community"
      name="arrow-left"
      size={hp("3.1%")}
      color={colors.textSecondary}
      onPress={() => navigation.goBack()}
    />
  );


  const centerComponent = (
    <Text
      style={[styles.titulo, { color: colors.textPrimary }]}
      allowFontScaling={false}
    >
      {title ? title : route.name}
    </Text>
  );

  const rightComponent = (
    <Icon
      name={rightName ? rightName : "menu"}
      type={rightType ? rightType : "material-community"}
      color={colors.textSecondary}
      size={hp("3.1%")}
      onPress={rightPress}
    />
  );

  return (
    <Header
      statusBarProps={{
        barStyle: "light-content",
      }}
      placement={align ? align : "center"}
      containerStyle={styles.container}
      backgroundColor={colors.bgMain}
      leftComponent={goBack ? leftComponent : null}
      centerComponent={centerComponent}
      rightComponent={rightPress ? rightComponent : null}
    />
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    height: hp("10%") + Constants.statusBarHeight,
    paddingHorizontal:wp('4%')
  },
  titulo: {
    fontSize: RFValue(18, 667),
  },
});
