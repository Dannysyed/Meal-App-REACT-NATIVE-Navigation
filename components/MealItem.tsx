import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'

const MealItem: FC<{ title: string }> = (prop) => {
    return (
        <View>
            <Text>{prop.title}</Text>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({})