import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'

const List: FC<{ dataPoint: string[] }> = ({ dataPoint }) => {
    // //(dataPoint, ';;;;;;;;;;;')

    return (
        <>{dataPoint.map(val => <View style={styles.listItem}>

            <Text style={styles.itemtxt} >{val}</Text>
        </View>)}</>
    )
}

export default List

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 8,
        marginHorizontal: 12,
        backgroundColor: '#e2b497'
    }
    , itemtxt:
    {
        color: '#351401',
        textAlign: 'center'
    }
})