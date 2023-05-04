import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, ScrollView } from 'react-native';
import { SafeAreaView, SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';

import { styles } from './styles';

import Card from '../../components/Card';

type Params = {
    token: string;
}

interface Profile {
    name: string;
    email: string;
    given_name: string;
    picture: string;
    type: string;
}

export function Profile(){

    const [ profile, setProfile ] = useState({} as Profile);
    const route = useRoute();

    const { token } = route.params as Params;

    async function loadProfile(){
        const response = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${token}`);
        const userInfo = await response.json();
        setProfile(userInfo);
    }

    useEffect(() => {
        loadProfile();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            {/* <ScrollView style={styles.scroll}> */}
            <Image source={{ uri: profile.picture }} style={styles.userIcon} />
            <Text style={[styles.text, styles.name]}>
                { profile.name }
            </Text>
            <Text style={[styles.email, styles.text]}>
                { profile.email }
            </Text>
            <View style={styles.list}>
                <Text style={[styles.text, styles.subtitle]}>
                    Lista dos próximos livros
                </Text>
                <Card source={require('../../assets/bookList/Colecionador.jpg')} name='O Colecionador de Pedras' />
                <Card source={require('../../assets/bookList/QuartodeDespejo.jpg')} name='Quarto de Despejo' />
                <Card source={require('../../assets/bookList/Heresia.jpg')} name='Heresia' />
                <Card source={require('../../assets/bookList/Fahrenheit451.jpg')} name='Fahrenheit 451' />
                <Card source={require('../../assets/bookList/AdmiravelMundoNovo.jpg')} name='Admiravel Mundo Novo' />
            </View>
            {/* </ScrollView> */}
        </SafeAreaView>
    );
}