import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import FavouritItem from '../store/context/context-favorit'
import { MEALS } from '../data/dummy-data'

const FavoriteScreen = () => {
    let datafav = useContext(FavouritItem)
    console.log(datafav.ids, '???????????????????????????????')
    let favdata = MEALS.filter(val => val.id == datafav.ids)
    return (
        <View>
            <Text>FavoriteScreen</Text>
        </View>
    )
}

export default FavoriteScreen

const styles = StyleSheet.create({})