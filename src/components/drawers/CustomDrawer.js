import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import {
  DrawerContent,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import configData from "../../../config.json";
import { useSelector , useDispatch} from "react-redux";
import { Switch } from "react-native-elements";
//https://fondosmil.com/fondo/11475.jpg

const imageBG =
  "https://t4.ftcdn.net/jpg/03/16/92/61/360_F_316926143_cVdnI6bJPbhlo1yZVTJk0R0sjBx4vVnO.jpg";
const CustomDrawer = (props) => {
  const [darkTheme, setDarkTheme] = useState(theme);
  const colors = useSelector((state) => state.theme.colors);
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  const changeDark = () => {
    dispatch({ type: "change_theme", payload: "dark" });
    setDarkTheme(true);
  };
  const changeLight = () => {
    dispatch({ type: "change_theme", payload: "light" });
    setDarkTheme(false);
  };
  const changeTheme = ()=> {
      if(theme==='light'){
          changeDark();
          setDarkTheme(true)
      }else{
          changeLight()
          setDarkTheme(false)
      }
  }
  return (
    <View style={{ flex: 1 ,backgroundColor: colors.bgSecondary }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: colors.bgSecondary }}
      >
        <ImageBackground
          source={{
            uri: imageBG,
          }}
          style={{ padding: 20 }}
        >
          <View style={{ alignItems: "flex-start" }}>
            <Image
              source={{ uri: configData.user.avatar }}
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
                marginBottom: 10,
              }}
            />
            <Text style={{ color: "#fff", fontSize: 20 }}>
              Bienvenido {configData.user.name}
            </Text>
            <Switch value={!darkTheme} color={colors.black} onChange={changeTheme}/>
          </View>
        </ImageBackground>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
