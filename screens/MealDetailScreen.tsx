import { Image, StyleSheet, Text, View, ScrollView, Button } from 'react-native'
import React, { FC, useState } from 'react'
import { MEALS } from '../data/dummy-data'
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native'
import MealDetails from '../components/MealDetails'
import Sublist from '../components/MealDetails/Sublist'
import List from '../components/MealDetails/List'
import IconDetail from '../components/IconDetail'

interface Props {
    navigation?: NavigationProp<ParamListBase>
    route?: {
        params?: {
            id?: string | undefined
        }
    }
}
const MealDetail: FC<{ route: RouteProp<ParamListBase> }> = ({ route, navigation }: Props) => {

    navigation?.setOptions({
        headerRight: () => {
            return <IconDetail icon={'star'} color={'white'} onPress={() => alert(' Added to favorite')} />
        }
    })

    let [mealdetail] = MEALS.filter(val => val.id == route?.params?.id)
    console.log(mealdetail)
    return (
        <ScrollView style={styles.container}>

            <Image source={{ uri: mealdetail.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{mealdetail.title}</Text>

            <MealDetails Duration={mealdetail.duration} Affordiablity={mealdetail.affordability} Complexity={mealdetail.complexity} style={styles.detailText} />
            <View style={{ alignItems: 'center' }}>

                <View style={styles.parentList}>

                    <Sublist>Step</Sublist>
                    <List dataPoint={mealdetail.ingredients} />

                    <Sublist>Ingredeients</Sublist>
                    <List dataPoint={mealdetail.steps} />
                </View>

            </View>
        </ScrollView>
    )
}

export default MealDetail

const styles = StyleSheet.create({
    container: {
        marginBottom: 32,
        borderColor: 'white',
    },
    image: {
        width: '200%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 26,
        textAlign: 'center',
        color: 'white'

    },
    detailText: {
        color: 'white'
    },
    subtitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        // margin: 6,
        textAlign: 'center',

    },
    subContainer: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        padding: 6,
        marginHorizontal: 28,
        marginVertical: 4
    },
    parentList: {
        width: '80%'
    }

})