import { StyleSheet, Text, View, ListRenderItem } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationProp, ParamListBase, RouteProp, } from '@react-navigation/native'
import { CATEGORIES, MEALS } from '../data/dummy-data'
import { FlatList } from 'react-native-gesture-handler'
import Meal from '../models/meal'
import MealItem from '../components/MealItem'

interface Props {
    navigation?: NavigationProp<ParamListBase>
    route?: {
        params?: {
            categoryId?: string | undefined
        }
    }
}
const MealOverViewScreen: React.FC<{ navigation: NavigationProp<ParamListBase>, route: RouteProp<ParamListBase> }> = ({ route, navigation }: Props) => {

    let CatId = route?.params?.categoryId



    const DisplayedMeals =
        MEALS.filter(val => val.categoryIds.indexOf(CatId!) >= 0)

    // console.log(DisplayedMeals, '???/')

    useEffect(() => {
        let titleoption = CATEGORIES.find(val => val.id === CatId)?.title
        console.log(titleoption)
        navigation?.setOptions({ title: titleoption })
    }, [CatId, navigation])
    let renderMealItem: ListRenderItem<Meal> = (itemdata) => {
        const item = itemdata.item
        const mealItemProp = {
            title: item.title, imageUrl: item.imageUrl, Duration: item.duration, Affordiablity: item.affordability, Complexity: item.complexity, id: item.id
        }

        return <MealItem {...mealItemProp} />

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