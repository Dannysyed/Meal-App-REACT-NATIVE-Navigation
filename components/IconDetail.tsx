import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { color } from 'react-native-reanimated'
const IconDetail: FC<{ icon: string | any, color: string, onPress: () => void }> = ({ onPress, icon, color }) => {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
            <Ionicons name={icon} size={24} color={color} />
        </Pressable >
    )
}

export default IconDetail

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.7
    }
})