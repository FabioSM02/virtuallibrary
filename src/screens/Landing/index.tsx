import React from 'react';
import { View, Text, Image } from 'react-native';
import { Svg } from 'react-native-svg';

import {
    SafeAreaView, 
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
    initialWindowMetrics
} from 'react-native-safe-area-context';

import { styles } from './styles'
import Buttons from '../../components/Buttons';
import Book from '../../assets/illustrations/book.png';

export function Landing(){
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Seu cronograma de leitura na palma da sua mão
            </Text>
            <Image source={Book} style={styles.illustration} />
            <View style={styles.wrapperButtons}>
                <Buttons />
            </View>
        </SafeAreaView>
    );
}