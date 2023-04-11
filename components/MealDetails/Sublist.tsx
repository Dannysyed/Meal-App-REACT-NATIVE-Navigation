import { StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'

const Sublist: React.FC<PropsWithChildren> = (prop) => {
    return (
        <View style={styles.subContainer}>

            <Text style={styles.subtitle}>{prop.children}</Text>
        </View>
    )
}

export default Sublist

const styles = StyleSheet.create({
    subtitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        // margin: 6,
        textAlign: 'center',

    },
    subContainer: {
        borderBottomWidth: 2,
        borderBottomColor: '#e2b497',
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4
    }
})