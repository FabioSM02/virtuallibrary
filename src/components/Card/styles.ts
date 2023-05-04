import { Dimensions, StyleSheet } from 'react-native';
// import { getBottomSpace } from 'react-native-iphone-x-helper';

const { height, width } = Dimensions.get('window');

import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
    wrapper: {
        height: 60,
        width: width * .8,
        backgroundColor: theme.colors.shape,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 12,
        marginVertical: 15,

    },

    book: {
        height: 60,
        width: 60,
        // backgroundColor: theme.colors.shadow,
        resizeMode: 'stretch',
        borderBottomLeftRadius: 12,
        borderTopRightRadius: 12
    },

    title: {
        fontSize: 16,
        fontFamily: theme.fonts.BalsamiqBold,
        marginRight: '30%',
        paddingLeft: 20,
        color: theme.colors.text,
        width: width - 150,
        alignItems: 'center',
        justifyContent: 'center'
    }

})