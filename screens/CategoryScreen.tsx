import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import Category from '../models/category'
import CategoryGridTitle from '../components/CategoryGridTitle'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { NavigationProp, ParamListBase } from '@react-navigation/native'

const CategoryScreen: React.FC<{ navigation: NavigationProp<ParamListBase> }> = (prop) => {
    let pressHandler = () => {
        prop.navigation.navigate('MealOverview', { categoryId: '1' })
    }

    let renderScreen: ListRenderItem<Category> = ({ item }) => {
        return <CategoryGridTitle title={item.title} color={item.color} onPress={pressHandler.bind(null, item)} />
    }
    return (

        <View>
            <FlatList data={CATEGORIES} renderItem={renderScreen} keyExtractor={(item) => item.id} numColumns={2} />
        </View >
    )
}

export default CategoryScreen

const styles = StyleSheet.create({})