import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MealOverViewScreen = () => {
    return (
        <View style={styles.container}>
            <Text>MealOverViewScreen</Text>
        </View>
    )
}

export default MealOverViewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
})