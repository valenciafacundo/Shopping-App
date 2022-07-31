import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

export const AuthRoute ={
    homeScreen : 'Home',
    detailScreen: 'Detail',
    cartScreen:'Cart',
    messageScreen:'Messages',
    profileScreen:'Profile',
    settingsScreen:'Settings',
    drawerMap: 'DrawerMap'
}
export const NoAuthRoute = {
    register : 'Register'
}
export const AuthStack = createNativeStackNavigator();
export const NoAuthStack = createNativeStackNavigator();
export const DrawerStack = createDrawerNavigator();