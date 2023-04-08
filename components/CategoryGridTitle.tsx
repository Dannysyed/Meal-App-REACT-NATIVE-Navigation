import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'

const CategoryGridTitle: FC<{ title: string, color: string, onPress: () => void }> = (prop) => {
    return (
        <View style={[styles.gridItem, { backgroundColor: prop.color }]}>
            <Pressable android_ripple={{ color: "#ccc" }} onPress={prop.onPress} style={({ pressed }) => [styles.innnerContainer, pressed ? styles.innnerContainer : null]}>
                <View style={styles.innnerContainer}>

                    <Text>{prop.title}</Text>
                </View>
            </Pressable>
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

})