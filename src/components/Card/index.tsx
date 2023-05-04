import React from 'react';
import { View, Image, Text, ImageProps, ImageBackground } from 'react-native';

import { styles } from './styles';

type CardProps = ImageProps & {
    name: string;
    source: Image;
}

export default function Card({ name, source } : CardProps){
    return (
        <View style={styles.wrapper}>
            <Image style={styles.book} source={source} />
            <Text style={styles.title}>
                {name}
            </Text>
        </View>
    );
}