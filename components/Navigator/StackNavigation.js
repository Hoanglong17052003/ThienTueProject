import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import Charging from '../Screens/Charging';
import DetailsComponent from '../Screens/DetailsComponent';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Charge"
        component={Charging}
        options={{
          headerShown: false,
          presentation: 'transparentModal',
          animation: 'fade',
        }}
      />
      <Stack.Screen name="Details" component={DetailsComponent} />
    </Stack.Navigator>
  );
}
