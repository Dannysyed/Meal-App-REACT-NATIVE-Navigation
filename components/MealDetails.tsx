import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MealDetails: React.FC<{ Duration: number, Complexity: string, Affordiablity: string, style: object }> = (prop) => {
    return (
        <View style={[styles.detail, prop.style]}>
            <Text style={[styles.detailItem, prop.style]}>{prop.Duration}</Text>
            <Text style={[styles.detailItem, prop.style]}>{prop.Complexity.toUpperCase()}</Text>
            <Text style={[styles.detailItem, prop.style]}> {prop.Affordiablity.toUpperCase()}</Text>

        </View>
    )
}

export default MealDetails

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
        fontSize: 13
    },

})