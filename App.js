import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './src/screens/Feed'
import AddPhoto from './src/screens/AddPhoto'
import Profile from './src/screens/Profile'
import Login from './src/screens/Login'
import Register from './src/screens/Register'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const authRouter = () => (
    <Stack.Navigator
        initialRouteName='Login'
    >
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="Register" component={Register} options={{ title: 'Registrar' }} />
    </Stack.Navigator>
)

const loginOrProfileRouter = () => (
    <Stack.Navigator
        initialRouteName='Profile'
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Auth" component={authRouter} />
    </Stack.Navigator>
)

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
            component={loginOrProfileRouter}
            options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ tintColor }) => <Icon name="user" size={30} color={ tintColor } />
            }}
        />
    </Tab.Navigator>
)

const AppContainer = () => (
    <NavigationContainer>
        <Tabs />
    </NavigationContainer>
)

export default AppContainer
