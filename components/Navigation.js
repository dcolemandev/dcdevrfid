import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { SettingsContainer } from '../routes/Settings';
import Catalog from '../routes/Catalog';
import Tags from '../routes/Tags';
import { Map } from '../routes/Map';
import {Home} from '../routes/Home'
import {ManageContainer} from '../routes/Manage';

const Tab = createBottomTabNavigator();

export const Navigation = () => (
  // <Tab.Navigator>
  //   <Tab.Screen name="Map" component={Map} />
  //   <Tab.Screen name="Settings" component={Settings} />
  //   <Tab.Screen name="Tags" component={Tags} />
  //   <Tab.Screen name="Catalog" component={Catalog} />
  // </Tab.Navigator>
   <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
    <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
    <Tab.Screen
        name="Tags"
        component={Tags}
        options={{
          tabBarLabel: 'Play',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="controller-classic" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Manage"
        component={ManageContainer}
        options={{
          tabBarLabel: 'Manage',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-list" color={color} size={size} />
          ),
        }}
      />
      {
    // <Tab.Screen
    //     name="Catalog"
    //     component={Catalog}
    //     options={{
    //       tabBarLabel: 'Catalog',
    //       tabBarIcon: ({ color, size }) => (
    //         <MaterialCommunityIcons name="account" color={color} size={size} />
    //       ),
    //     }}
    //   />
      }
      <Tab.Screen
        name="Settings"
        component={SettingsContainer}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
          tabBarBadge: 3,
        }}
      />
      
    </Tab.Navigator>
);
