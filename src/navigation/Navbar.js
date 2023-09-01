import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import {
  createBottomTabNavigator,
  ButtomTabBar,
} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard/Dashboard';
import ItemDetail from '../screens/ItemDetail/ItemDetail';
import Home from '../screens/Home/Home';
import {COLORS, SIZES} from '../constants';
import {icons} from '../constants/icons';

import {Image, StyleSheet} from 'react-native';





const Tab = createBottomTabNavigator();
const homeStack = createStackNavigator();



const Navbar = () => {

const HomeStackScreen = () => (
  <homeStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Dashboard">
    <homeStack.Screen name="Dashboard" component={Dashboard} />
    <homeStack.Screen name="home" component={Home} />
    <homeStack.Screen name="itemDetail" component={ItemDetail} />
    
  </homeStack.Navigator>
);



  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 0,
          borderTopLeftRadius: SIZES.radius,
          borderTopRightRadius: SIZES.radius,
          elevation: 0,
          zIndex: 0,
          ...Styles.shadow,
          position: 'absolute',
        },
      }}>
      <Tab.Screen
        name="homeContainer"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={icons.home}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.darkBlue : COLORS.skyBlue,
              }}
            />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}

const Styles = StyleSheet.create({
  shadow: {
    shadowColor: COLORS.darkBlue,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Navbar