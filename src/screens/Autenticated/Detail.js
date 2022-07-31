import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import CustomHeader from "../../components/headers/CustomHeader";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
import LayoutDetail from "../../components/layout/LayoutDetail";
import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Rating } from "react-native-ratings";
import { useSelector } from "react-redux";

const Detail = ({ navigation, route }) => {
  const [loading, setLoading] = useState(true);
  const [articulo, setArticulo] = useState({});
  const [focused, setFocused] = useState(false);
  const { idParam } = route.params;
  const colors = useSelector((state) => state.theme.colors);
  useEffect(() => {
    const getProducts = async () => {
      if (focused) {
        const data = await axios.get(
          `https://dummyjson.com/products/${idParam}`
        );
        setArticulo(data.data);
        setLoading(false);
        setFocused(false);
      }
    };
    getProducts();
  }, [focused]);

  useFocusEffect(
    useCallback(() => {
      setFocused(true);
      setLoading(true);
      return () => {};
    }, [])
  );
  const cover_url = "https://fondosmil.com/fondo/17538.jpg";
  return (
    <View style={{ flexGrow: 1 }}>
      <CustomHeader navigation={navigation} goBack />
      <ImageBackground
        source={{ uri: loading ? cover_url : articulo.images[0] }}
        resizeMode="cover"
        style={{ flex: 1, height: "65%", justifyContent: "center" }}
      />
      {loading ? (
        <ActivityIndicator size={"large"} />
      ) : (
        <LayoutDetail>
          <ScrollView>
            <Text style={[styles.title, { color: colors.textMain }]}>
              {articulo.title}
            </Text>
            <View style={styles.iconsContainer}>
              <Rating
                type="custom"
                ratingCount={5}
                imageSize={RFValue(22, 667)}
                startingValue={articulo.rating}
                style={{ alignSelf: "flex-start", paddingVertical: 3 }}
                tintColor={colors.bgMain}
                ratingBackgroundColor={colors.gray}
                ratingColor={colors.main}
                fractions={2}
              />
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={()=>{}}>
                  <Icon
                    type="material-community"
                    name="heart"
                    color={colors.main}
                    size={RFValue(22, 667)}
                    style={{ padding: 5 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                  <Icon
                    type="material-community"
                    name="share"
                    color={colors.main}
                    size={RFValue(22, 667)}
                    style={{ padding: 5 }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <Text style={[styles.description, { color: colors.textPrimary }]}>
              {articulo.description}{" "}
            </Text>
          </ScrollView>
        </LayoutDetail>
      )}
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  title: {
    fontSize: RFValue(18, 667),
    fontWeight: "bold",
    marginBottom: hp("2%"),
  },
  iconsContainer: {
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "row",
    marginBottom: hp("2%"),
    alignItems: "center",
  },
  description: {
    fontSize: RFValue(18, 667),
  },
});
