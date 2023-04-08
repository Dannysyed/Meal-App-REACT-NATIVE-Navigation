import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { CATEGORIES } from './data/dummy-data';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealOverViewScreen from './screens/MealOverViewScreen';
export default function App() {
  let Stack = createNativeStackNavigator()
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name='MealCategory' component={CategoryScreen} />
          <Stack.Screen name="MealOverview" component={MealOverViewScreen} />
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
