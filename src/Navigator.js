import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'
import AddPhoto from './screens/AddPhoto'
import Profile from './screens/Profile'

const Tab = createBottomTabNavigator()

const Tabs = () => (
    <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
            activeTintColor: '#e91e63',
            showLabel: false
        }}
    >
        <Tab.Screen
            name="Feed"
            component={Feed}
            options={{
                tabBarLabel: 'Home',

                tabBarIcon: ({ tintColor }) => <Icon name="home" size={30} color={ tintColor } />
            }}
        />
        <Tab.Screen
            name="AddPhoto"
            component={AddPhoto}
            options={{
                tabBarLabel: 'Updates',
                tabBarIcon: ({ tintColor }) => <Icon name="camera" size={30} color={ tintColor } />
            }}
        />
        <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ tintColor }) => <Icon name="user" size={30} color={ tintColor } />
            }}
        />
    </Tab.Navigator>
)

export default () => (
    <NavigationContainer>
        <Tabs />
    </NavigationContainer>
)
