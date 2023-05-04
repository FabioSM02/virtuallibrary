import { StyleSheet, Dimensions } from 'react-native';

import { theme } from '../../styles/theme';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        width: '100%',
        height: '100%',
        marginBottom: height * .4
    },
    
    button: {
        width: width * .7,
        height: 40,
        backgroundColor: theme.colors.shape,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontFamily: theme.fonts.BalsamiqBold,
        color: theme.colors.text,        
    },

    googleButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '60%',
        height: 40,
        paddingHorizontal: 20,
        backgroundColor: theme.colors.note,
        borderRadius: 5
    }  
})