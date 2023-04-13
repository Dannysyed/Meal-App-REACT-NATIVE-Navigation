import { Button, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import FavouritItem from '../store/context/context-favorit'
import { MEALS } from '../data/dummy-data'
import Meal from '../models/meal'
import MealItem from '../components/MealItem'
import { FlatList } from 'react-native-gesture-handler'

const FavoriteScreen = () => {
    let datafav = useContext(FavouritItem)

    let favdata = MEALS.filter(val => datafav.ids.includes(val.id))
    let da = () => {
        (favdata.length, 'POP')

    }
    let renderMealItem: ListRenderItem<Meal> = (itemdata) => {
        const item = itemdata.item
        const mealItemProp = {
            title: item.title, imageUrl: item.imageUrl, Duration: item.duration, Affordiablity: item.affordability, Complexity: item.complexity, id: item.id
        }

        return <MealItem {...mealItemProp} />

    }
    return (
        <View style={styles.container}>
            {favdata.length == 0 ? <Text style={styles.title}>Looks Empty :( </Text> : <FlatList data={favdata} keyExtractor={(item) => item.id} renderItem={renderMealItem} />}
        </View>
    )
}

export default FavoriteScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    title: {
        color: 'white',
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 18

    }
})