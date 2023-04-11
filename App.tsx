import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet } from 'react-native';
import { CATEGORIES } from './data/dummy-data';
import CategoryScreen from './screens/CategoryScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealOverViewScreen from './screens/MealOverViewScreen';
import MealDetail from './screens/MealDetailScreen';
export default function App() {
  let Stack = createNativeStackNavigator()
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName='MealCategory' screenOptions={{ headerStyle: { backgroundColor: '#ccc2' }, headerTintColor: 'white', contentStyle: { backgroundColor: '#ccc0' } }}>
          <Stack.Screen name='MealCategory' component={CategoryScreen} options={{ title: 'Welcome to Dominos', headerStyle: { backgroundColor: '#ccc6' }, headerTintColor: 'white', contentStyle: { backgroundColor: '#ccc0' } }} />
          <Stack.Screen name="MealOverview" component={MealOverViewScreen} />
          <Stack.Screen name="MealDetail" component={MealDetail} options={{
            headerRight: () => {
              return <Button title='Tap me' onPress={() => alert(' YOu are fool')} />
            }
          }} />
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
