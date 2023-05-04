import React from 'react';
import { TouchableOpacity, Text, View, TouchableOpacityProps, AppState } from 'react-native';
import * as AuthSession from 'expo-auth-session';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { SimpleLineIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { theme } from '../../styles/theme';

interface AuthResponse {
    type: string;
    params: {
        access_token: string;
    };
};

export default function Buttons(){

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

    async function handleSignInWithGoogle(){

        // const CLIENT_ID = "858318048545-d2bid94g44ogem7fi4cclq5704i551i5.apps.googleusercontent.com";
        const CLIENT_ID = "858318048545-kiftmhrlgrac794mogbm33qrl76relrj.apps.googleusercontent.com";
        // const REDIRECT_URI = "https://auth.expo.io/@fabiocasa/virtuallibrary";
        const REDIRECT_URI = "https://auth.expo.io/@anonymous/virtuallibrary-5fb3445d-99ed-4862-ab13-d837bf9b4da8";
        const RESPONSE_TYPE = "token";
        const SCOPE = encodeURI("profile email");
        
        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
        // const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=858318048545-d2bid94g44ogem7fi4cclq5704i551i5.apps.googleusercontent.com&redirect_uri=https://auth.expo.io/@fabiocasa/virtuallibrary&response_type=token&scope=profile%20email`;
        
        const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthResponse;

        // console.log(type) // Dismiss
        // console.log(params.access_token) // Undefined

        // { type === 'success' ? navigation.navigate('Profile', { token: params.access_token }) : console.log(AuthSession.AuthError) }

        if (type === 'success'){
            navigation.navigate('Profile', { token: params.access_token });
        } else {
            console.log(AuthSession.AuthError)
        }
    }

    return (
        <View style={styles.container}>

            {/* <Text style={{color: theme.colors.text}}>
                { AppState.currentState }
            </Text> */}

            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>
                    Cadastrar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.googleButton} onPress={handleSignInWithGoogle}>
                {/* <AntDesign name="google" size={20} color="darkred" /> */}
                <SimpleLineIcons size={20} name="social-google" color={theme.colors.secondary} />
                <Text style={styles.text}>
                    Entrar com Google
                </Text>
            </TouchableOpacity>
        </View>
    );
}