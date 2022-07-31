import * as React from "react";
import { AuthRoute } from "../routes";
import Home from "../screens/Autenticated/Home";
import { DrawerStack } from "../routes";
import CustomDrawer from "../components/drawers/CustomDrawer";
import Cart from "../screens/Autenticated/Cart";
import Messages from "../screens/Autenticated/Messages";
import Profile from "../screens/Autenticated/Profile";
import Settings from "../screens/Autenticated/Settings";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import { RFValue } from "react-native-responsive-fontsize";

const DrawerMap = () => {
  const colors = useSelector((state)=>state.theme.colors)
  const theme = useSelector((state)=>state.theme.theme)

  return (
    <DrawerStack.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor:colors.main,
        drawerActiveTintColor:colors.white,
        drawerInactiveTintColor:colors.textMain,
        drawerLabelStyle:{
          fontSize:RFValue(14,667),
          marginLeft:-25
        }
      }}
      initialRouteName={'Home'}
    >
      <DrawerStack.Screen name={AuthRoute.homeScreen} component={Home}
      options={{
        drawerIcon: ({color})=>(
          <Icon type="material-community" name='home' size={25} color={color}/>
        )
      }}
      />
      <DrawerStack.Screen name={AuthRoute.cartScreen} component={Cart} 
      options={{
        drawerIcon: ({color})=>(
          <Icon type="material-community" name='cart' size={25} color={color}/>
        )
      }}
      />
      <DrawerStack.Screen name={AuthRoute.messageScreen} component={Messages} 
      
      options={{
        drawerIcon: ({color})=>(
          <Icon type="material-community" name='message' size={25} color={color}/>
        )
      }}
      />
      <DrawerStack.Screen name={AuthRoute.profileScreen} component={Profile} 
      
      options={{
        drawerIcon: ({color})=>(
          <Icon type="material-community" name='account' size={25} color={color}/>
        )
      }}
      />
      <DrawerStack.Screen
        name={AuthRoute.settingsScreen}
        component={Settings}
        options={{
          drawerIcon: ({color})=>(
            <Icon type="material-community" name='tools' size={25} color={color}/>
          )
        }}
      />
    </DrawerStack.Navigator>
  );
};
export default DrawerMap;
