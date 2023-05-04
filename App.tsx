import React from 'react';
import { View } from 'react-native';
import AppLoading from 'expo-app-loading';

import {
    useFonts,
    BalsamiqSans_400Regular,
    BalsamiqSans_700Bold
} from '@expo-google-fonts/balsamiq-sans';

import {
    RobotoMono_400Regular,
    RobotoMono_500Medium,
    RobotoMono_700Bold
} from '@expo-google-fonts/roboto-mono';

import {
    SafeAreaView, 
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics
} from 'react-native-safe-area-context';

import { Routes } from './src/routes';
import { StatusBar } from 'expo-status-bar';
import { theme } from './src/styles/theme';

export default function App(){

    const [fontsLoaded] = useFonts({
        RobotoMono_400Regular,
        RobotoMono_500Medium,
        RobotoMono_700Bold,
        BalsamiqSans_400Regular,
        BalsamiqSans_700Bold
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: theme.colors.background
            }}
        >
            <StatusBar
                style="light"
                backgroundColor="transparent"
                translucent
            />
            <Routes />
        </View>
    );
}