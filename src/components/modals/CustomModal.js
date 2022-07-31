import React from "react";

import LayoutModal from "../layout/LayoutModal";
import Modal from "react-native-modal";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSelector } from "react-redux";

const CustomModal = ({ visible, setVisible, children }) => {
  const colors = useSelector((state) => state.theme.colors);
  return (
    <Modal
      deviceHeight={hp("100%")}
      deviceWidth={wp("100%")}
      backdropColor={colors.opacity.main}
      onBackdropPress={() => setVisible(!visible)}
      useNativeDriverForBackdrop={true}
      isVisible={visible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      swipeDirection={"down"}
      onSwipeComplete={() => setVisible(!visible)}
      style={{ margin: 0, justifyContent: "flex-end" }}
    >
      <LayoutModal>{children}</LayoutModal>
    </Modal>
  );
};

export default CustomModal;
