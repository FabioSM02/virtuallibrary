import React, { useEffect, useState } from 'react';
import { View, Text, Image, FlatList, ScrollView } from 'react-native';

import {
    SafeAreaView, 
    SafeAreaProvider,
    initialWindowMetrics
} from 'react-native-safe-area-context';

import { styles } from './styles';
import avatar from '../../assets/user.png';
import Card from '../../components/Card';

const bookList = [
    {
        "id": 1,
        "name": "Se não eu, quem vai fazer você feliz?: Minha história de amor com Chorão",
        "cover": "../../assets/bookList/01.jpg"
    },
    {
        "id": 2,
        "name": "Sobrevivendo no inferno",
        "cover": "../../assets/bookList/Sobrevivendo no inferno.jpg"
    },
    {
        "id": 3,
        "name": "Quarto de despejo",
        "cover": "../assets/bookList/Quarto de despejo.jpg"
    },
    {
        "id": 4,
        "name": "Dez argumentos para você deletar agora suas redes sociais",
        "cover": "../assets/bookList/10 argumentos para voce deletar agora suas redes sociais.jfif"
    },
    {
        "id": 5,
        "name": "Admirável mundo novo",
        "cover": "../assets/bookList/Admiravel mundo novo.jpg"
    },
    {
        "id": 6,
        "name": "Fahrenheit 451",
        "cover": "../assets/bookList/Fahrenheit 451.jpg"
    },
    {
        "id": 7,
        "name": "O Colecionador de Pedras.jpg",
        "cover": "../assets/bookList/O colecionador de pedras.jpg"
    },
    {
        "id": 8,
        "name": "Cestas Sagradas",
        "cover": "../assets/bookList/Cestas Sagradas.jpg"
    },
    {
        "id": 9,
        "name": "O Conto de Aia",
        "cover": "../assets/bookList/O Conto de Aia.jpg"
    },
    {
        "id": 10,
        "name": "Heresia",
        "cover": "../assets/bookList/Heresia.jpg"
    }
]

interface itemProps {
    item: {
        name: string;
        cover: string;
        id: number;
    }
}

export function Profile(){
    return (
        <SafeAreaView style={styles.container}>
            <Image source={avatar} style={styles.userIcon} />
            <Text style={styles.text}>
                Nome
            </Text>
            <Text style={[styles.email, styles.text]}>
                aaaaaaa
            </Text>
            <View style={styles.list}>
                <Text style={[styles.text, styles.subtitle]}>
                    Lista dos próximos livros
                </Text>
                <FlatList 
                    data={bookList}
                    renderItem={({item}) => <Card source={item.cover ? {uri: item.cover}: null} name={item.name} />}
                    keyExtractor={(item) => item.id.toString()}
                    style={styles.flatlist}
                />
            </View>
        </SafeAreaView>
    );
}