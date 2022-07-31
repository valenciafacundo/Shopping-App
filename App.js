import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import StoreProvider from "./src/redux/store/StoreProvider";
import AuthMap from "./src/stacks/AuthMap";
import NoAuthMap from "./src/stacks/NoAuthMap";
import { navigationRef } from "./rootNavigation";
export default function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <StoreProvider>
      <NavigationContainer ref={navigationRef}>
        {isLogin ? <AuthMap /> : <NoAuthMap />}
      </NavigationContainer>
    </StoreProvider>
  );
}
