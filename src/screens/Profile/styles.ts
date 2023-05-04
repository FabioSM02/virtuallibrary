import { StyleSheet } from 'react-native';
// import { getBottomSpace } from 'react-native-iphone-x-helper';

import { theme } from '../../styles/theme';

export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
    },

    text: {
        color: theme.colors.text,
    },

    name: {
        fontFamily: theme.fonts.RobotoRegular
    },

    userIcon: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderColor: theme.colors.primary,
        borderWidth: 2,
    },

    email: {
        fontFamily: theme.fonts.RobotoBold,
        marginBottom: 40,
        marginTop: 8
    },

    subtitle: {
        marginBottom: 20,
        // fontSize: 18
    },

    list: {
        width: '80%',
        alignItems: 'center'
    }

})