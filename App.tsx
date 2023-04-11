import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet } from 'react-native';
import { CATEGORIES } from './data/dummy-data';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealOverViewScreen from './screens/MealOverViewScreen';
import MealDetail from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoriteScreen from './screens/FavoriteScreen';
import { Ionicons } from '@expo/vector-icons'
export default function App() {
  let Stack = createNativeStackNavigator()
  let Drawer = createDrawerNavigator()
  let drawerNavigator = () => {
    return <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#562305' },
      headerTintColor: 'white',
      drawerStyle: { backgroundColor: '#562305' },
      sceneContainerStyle: { backgroundColor: '#ccc0' },
      drawerInactiveTintColor: 'white'
    }

    }>
      <Drawer.Screen name='MealCategory' component={CategoryScreen} options={{
        drawerLabel: 'Meal Category',
        drawerActiveBackgroundColor: '#e05e0c4e',
        drawerActiveTintColor: 'white', drawerIcon: ({ color, size }) => (<Ionicons name='home' color={color} size={size} />)
      }} />
      <Drawer.Screen name='Favourite' component={FavoriteScreen} options={{
        drawerLabel: 'Favourite',
        drawerActiveBackgroundColor: '#e05e0c4e',
        drawerActiveTintColor: 'white',
        drawerIcon: ({ color, size }) => (<Ionicons name='star' color={color} size={size} />)

      }} />
    </Drawer.Navigator>
  }
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='MealCategory' screenOptions={{ headerStyle: { backgroundColor: '#ccc2' }, headerTintColor: 'white', contentStyle: { backgroundColor: '#ccc0' } }}>
          <Stack.Screen name='MealCategory' component={drawerNavigator} options={{ title: 'Welcome to Dominos', headerStyle: { backgroundColor: '#ccc6' }, headerTintColor: 'white', contentStyle: { backgroundColor: '#ccc0', }, headerShown: false }} />
          <Stack.Screen name="MealOverview" component={MealOverViewScreen} />
          <Stack.Screen name="MealDetail" component={MealDetail} />

        </Stack.Navigator>
      </NavigationContainer>
      {/* <CategoryScreen /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
