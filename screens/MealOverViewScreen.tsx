import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native'

type RootParamList = {
    CategoryId: string
    BlurredSuccess: { blurredSuccessCallback: () => void };
};
const MealOverViewScreen: React.FC<{ navigation: NavigationProp<ParamListBase>, route: RouteProp<ParamListBase> }> = ({ route }) => {
    let CatId = route.params
    // let obj = JSON.parse(prop.route.params.categoryId);
    console.log(CatId)
    return (
        <View style={styles.container}>
            <Text>MealOverViewScreen- with id { }</Text>
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