import { Pressable, StyleSheet, Text, View, ImageBackground } from 'react-native'
import React, { FC } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const CategoryGridTitle: FC<{ title: string, color: string, onPress: () => void, image: string }> = (prop) => {
    return (

        <View style={[styles.gridItem, { backgroundColor: prop.color }]}>
            <ImageBackground source={{ uri: prop.image }} resizeMode="cover" style={styles.container} imageStyle={styles.imageBackground} >
                <SafeAreaView style={styles.container}>


                    <Pressable android_ripple={{ color: "#ccc" }} onPress={prop.onPress} style={({ pressed }) => [styles.innnerContainer, pressed ? styles.innnerContainer : null]}>
                        <View style={styles.innnerContainer}>

                            <Text style={styles.title}>{prop.title}</Text>
                        </View>
                    </Pressable>
                </SafeAreaView>
            </ImageBackground>
        </View>
    )
}

export default CategoryGridTitle

const styles = StyleSheet.create({
    gridItem: {
        // backgroundColor: 'red',
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        overflow: 'hidden'
        // padding: 10
    },
    innnerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center'
    }
    , container: {
        flex: 1
    },
    imageBackground: {
        opacity: 0.9
    },
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: -30,
        zIndex: 1000
    }
})