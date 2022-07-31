import * as React from "react";
import { AuthRoute, AuthStack } from "../routes";
import Detail from "../screens/Autenticated/Detail";
import DrawerMap from "./DrawerMap";

const AuthMap = () => {
  return (
    <>
      <AuthStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <AuthStack.Screen name={AuthRoute.drawerMap} component={DrawerMap} />
        <AuthStack.Screen name={AuthRoute.detailScreen} component={Detail} />
      </AuthStack.Navigator>
    </>
  );
};
export default AuthMap;
