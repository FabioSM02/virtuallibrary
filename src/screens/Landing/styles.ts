import { StyleSheet, Dimensions } from 'react-native';
// import { getBottomSpace } from 'react-native-iphone-x-helper';

const { width, height } = Dimensions.get('window');

import { theme } from '../../styles/theme';

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.background,
        width: '100%',
        height: '100%',
    },

    title: {
        fontFamily: theme.fonts.BalsamiqRegular,
        fontSize: 14,
        color: theme.colors.text,
        marginTop: height * .85,
        maxWidth: '80%',
    },

    illustration: {
        width: width * .8,
        height: height * .4,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        resizeMode: 'center'
    },

    wrapperButtons: {
        marginBottom: 300,
        maxWidth: '100%'
    }

})