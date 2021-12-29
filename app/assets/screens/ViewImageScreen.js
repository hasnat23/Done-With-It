import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '../../config/colors'

function ViewImageScreen(props) {
    return(
        <View style={styles.container}>

            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>

            <Image
            resizeMode='contain'
            style={styles.image}
             source={require("../chair.jpg")}></Image>
        </View>

   
    );
}

const styles = StyleSheet.create({
    closeIcon:{
        height: 50,
        width: 50,
        backgroundColor: colors.primary,
        position: 'absolute',
        left: 30,
        top: 40
    },
    container:{
        backgroundColor: colors.black,
        flex: 1
    },
    deleteIcon:{
        height: 50,
        width: 50,
        backgroundColor: colors.secondary,
        position: 'absolute',
        right: 30,
        top: 40
    },
    image:{
        height: '100%',
        width: '100%'
    }
})
export default ViewImageScreen;