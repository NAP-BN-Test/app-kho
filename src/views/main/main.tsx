import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import importexport from '../ImportExport';
import Inventory from '../Inventory';
import commodity from '../commodity';
import info from '../Info/index';

const Tab = createBottomTabNavigator();
function main() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="commodity"
        tabBarOptions={{
          activeTintColor: '#ECB10D',
          inactiveTintColor: '#fff',
          style: {
            backgroundColor: '#009387',
            position: 'absolute',
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            borderRadius: 15,
            height: 60,
            paddingBottom: 5,
          },
        }}>
        <Tab.Screen
          name="commodity"
          component={commodity}
          options={{
            tabBarLabel: 'Hàng hóa',
            tabBarIcon: ({color, size}) => (
              <Icon name="truck" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="ImportExport"
          component={importexport}
          options={{
            tabBarLabel: 'Nhập xuất',
            tabBarIcon: ({color, size}) => (
              <Icon name="minimize-2" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Inventory"
          component={Inventory}
          options={{
            tabBarLabel: 'Tồn kho',
            tabBarIcon: ({color, size}) => (
              <Icon name="archive" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Info"
          component={info}
          options={{
            tabBarLabel: 'Info',
            tabBarIcon: ({color, size}) => (
              <Icon name="user" color={color} size={size} />
            ),
          }}
        />
{/* 
        <Tab.Screen
          name="Info"
          component={info}
          options={{
            tabBarLabel: 'Info',
            tabBarIcon: ({color, size}) => (
              <Icon name="user" color={color} size={size} />
            ),
          }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default main;
