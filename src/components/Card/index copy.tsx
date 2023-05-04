import React from 'react';
import { View, Image, Text, ImageProps } from 'react-native';

import { styles } from './styles';

const bookList = [
    {
        "id": 1,
        "name": "Se não eu, quem vai fazer você feliz?: Minha história de amor com Chorão",
        "cover": "../../assets/bookList/Se nao eu quem vai fazer voce feliz.jpg"
    },
    {
        "id": 2,
        "name": "Sobrevivendo no inferno",
        "cover": "../assets/bookList/Sobrevivendo no inferno.jpg"
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

type CardProps = ImageProps & {
    name: string
}

export default function Card({ name, ...rest } : CardProps){
    return (
        <View style={styles.wrapper}>
            <Image style={styles.book} resizeMode='cover' {...rest} />
            <Text style={styles.title}>
                {name}
            </Text>
        </View>
    );
}