import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'

const MealItem: FC<{ title: string, imageUrl: string, Duration: number, Complexity: string, Affordiablity: string }> = (prop) => {
    return (
        <View style={styles.container}>
            <Pressable android_ripple={{ color: '#ccc' }}>
                <View>
                    <Image source={{ uri: prop.imageUrl }} style={styles.Image} />
                    <Text style={styles.title}>{prop.title}</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={styles.detailItem}>{prop.Duration}</Text>
                    <Text style={styles.detailItem}>{prop.Complexity.toUpperCase()}</Text>
                    <Text style={styles.detailItem}> {prop.Affordiablity.toUpperCase()}</Text>

                </View>
            </Pressable>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // borderWidth: 1,
        margin: 16,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4
    },
    Image: {
        width: '200%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 8
    },
    detail: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'
    },
    detailItem: {
        marginHorizontal: 5,
        fontSize: 12
    }
})