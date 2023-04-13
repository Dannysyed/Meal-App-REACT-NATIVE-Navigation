import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import FavouritItem from '../store/context/context-favorit'
import { MEALS } from '../data/dummy-data'

const FavoriteScreen = () => {
    let datafav = useContext(FavouritItem)

    let favdata = MEALS.filter(val => datafav.ids.includes(val.id))
    let da = () => {
        (favdata.length, 'POP')

    }
    return (
        <View>
            <Text style={{ color: 'white' }}>FavoriteScreen</Text>
            <Button title='ads' onPress={da} />
        </View>
    )
}

export default FavoriteScreen

const styles = StyleSheet.create({})