import { StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'
import FavouritItem from './context-favorit'
import { Favdata } from './context-favorit'
const FavContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
    let [favoriteMeal, setFavoriteMeal] = useState<string[]>([])
    let addtoFavorite = (id: string) => {

        setFavoriteMeal(prev => prev.concat(id))
    }
    let removetoFavorite = (id: string) => {
        setFavoriteMeal(prev =>
            prev.filter(mealid => mealid != id))
    }
    console.log(favoriteMeal, 'vildddddddddddddddd')
    let valued: Favdata = {
        ids: favoriteMeal,
        addFavorite: addtoFavorite,
        removeFavorite: removetoFavorite,
    }


    return (
        <FavouritItem.Provider value={valued}>{children}</FavouritItem.Provider>
    )
}

export default FavContextProvider

const styles = StyleSheet.create({})