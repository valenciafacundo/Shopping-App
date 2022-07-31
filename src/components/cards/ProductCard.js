import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ImageBackground,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Rating } from "react-native-ratings";
import { useSelector } from "react-redux";
import ButtonRounded from "../buttons/ButtonRounded";
import * as rootNavigation from "../../../rootNavigation";

const width = Dimensions.get("screen").width;
const device = width > 600 ? "tablet" : "phone";
const widthDevice = device === "phone" ? wp("90%") : wp("45%");
const ProductCard = ({ items }) => {
  const URI = items.images[0]
    ? items.images[0]
    : "https://patuelligroup.vteximg.com.br/arquivos/ids/263861-1000-1000/img_2D_0001_large.jpg";
  const colors = useSelector((state) => state.theme.colors);

  return (
    <View
      style={[
        styles.container,
        { width: widthDevice, backgroundColor: colors.bgPrimary },
      ]}
    >
      <ImageBackground style={{backgroundColor:'#fff',borderTopLeftRadius:5,
 borderTopRightRadius:5}}>
              <Image source={{ uri: URI }} style={styles.image} />

      </ImageBackground>

      <View style={styles.textContainer}>
        <Text style={[styles.title,{color:colors.textMain}]}>{items.title}</Text>
        <Text style={[styles.cardText,{color:colors.textPrimary}]}>{items.brand}</Text>
        <Text style={[styles.price, { color: colors.main }]}>
          ${items.price}
        </Text>
        <Rating
          type="custom"
          ratingCount={5}
          imageSize={20}
          startingValue={items.rating}
          style={{ alignSelf: "flex-start", paddingVertical: 3 }}
          tintColor={colors.bgPrimary}
          ratingBackgroundColor={colors.gray}
          ratingColor={colors.main}
          fractions={2}
        />
        <Text style={[styles.cardText,{color:colors.textPrimary}]}>Disponibles: {items.stock}</Text>
        <Text style={[styles.cardText,{color:colors.textPrimary}]}>{items.category}</Text>
        <ButtonRounded
          title={"Ver detalles"}
          onPress={() => {
            rootNavigation.navigate("Detail", { idParam: items.id });
          }}
        />
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginBottom: 30,
    paddingBottom: 15,
    borderRadius:5
  },
  image: {
    height: hp("22%"),
 resizeMode: "contain",
 borderTopLeftRadius:5,
 borderTopRightRadius:5
  },
  textContainer: {
    paddingHorizontal: 15,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    paddingVertical: 5,
  },

  price: {
    color: "gray",
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 2,
  },
  cardText: {
    paddingVertical: 5,
    fontSize: 16,
  },
});
