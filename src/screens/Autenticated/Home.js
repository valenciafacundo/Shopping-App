import {
  ActivityIndicator,
  FlatList,
  StatusBar,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import CustomHeader from "../../components/headers/CustomHeader";
import Welcome from "../../components/Welcome";
import ProductCard from "../../components/cards/ProductCard";
import axios from "axios";
import configData from "../../../config.json";
import { useSelector } from "react-redux";
const Home = ({ navigation }) => {
  const [productos, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const colors = useSelector((state) => state.theme.colors);
  
  useEffect(() => {
    const getProducts = async () => {
      const data = await axios.get("https://dummyjson.com/products");
      setProducts(data.data.products);
      setLoading(false);
    };
    getProducts();
  }, []);
  const width = Dimensions.get("screen").width;
  const device = width > 600 ? "tablet" : "phone";
  return (
    <View style={{ backgroundColor: colors.bgMain }}>
      <CustomHeader
        title={configData["app-name"]}
        rightPress={() => navigation.openDrawer()}
      />
      <StatusBar barStyle={configData["status-bar"]} />
      <Welcome
        userName={configData.user.name}
        userImg={configData.user.avatar}
        greetingColor={configData["primary-color"]}
      />
      <View
        style={{
          marginTop: 10,
          alignSelf: device === "phone" && "center",
        }}
      >
        {loading ? (
          <ActivityIndicator size={"large"} color={colors.main} />
        ) : (
          <FlatList
            data={productos}
            renderItem={({ item }) => <ProductCard items={item} />}
            keyExtractor={(items) => items.id}
            showsVerticalScrollIndicator={false}
            numColumns={device === "tablet" && 2}
            columnWrapperStyle={
              device === "tablet" && { justifyContent: "space-evenly" }
            }
            style={{borderRadius:20}}
          />
        )}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
