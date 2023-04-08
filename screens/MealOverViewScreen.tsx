import { StyleSheet, Text, View, ListRenderItem } from 'react-native'
import React from 'react'
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native'
import { MEALS } from '../data/dummy-data'
import { FlatList } from 'react-native-gesture-handler'
import Meal from '../models/meal'
import MealItem from '../components/MealItem'

interface Props {
    route?: {
        params?: {
            categoryId?: string | undefined
        }
    }
}
const MealOverViewScreen: React.FC<{ navigation: NavigationProp<ParamListBase>, route: RouteProp<ParamListBase> }> = ({ route }: Props) => {
    let CatId: string | undefined = route?.params?.categoryId
    console.log(CatId)
    const DisplayedMeals =
        MEALS.filter(val => val.categoryIds.indexOf(CatId!) >= 0)

    console.log(DisplayedMeals, '???/')


    let renderMealItem: ListRenderItem<Meal> = (itemdata) => {

        return <MealItem title={itemdata.item.title} />

    }
    return (
        <View style={styles.container}>
            <FlatList data={DisplayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
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