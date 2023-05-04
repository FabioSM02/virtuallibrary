import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Profile } from '../screens/Profile';
import { Landing } from '../screens/Landing';

const { Navigator, Screen } = createStackNavigator();

export function Routes(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="SignIn" component={Landing} />
                <Screen name="Profile" component={Profile} />
            </Navigator>
        </NavigationContainer>
    );
}