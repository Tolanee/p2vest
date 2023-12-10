import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from '../screens/Splash';
import {useEffect, useState} from 'react';
import Login from '../screens/Login';
import Wallet from '../screens/Wallet';
import Withdraw from '../screens/Withdraw';

const Stack = createStackNavigator();

export default function RootNavigation() {
  const [loadSplash, setLoadSplash] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoadSplash(false);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  return loadSplash ? (
    <Splash />
  ) : (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Wallet"
          component={Wallet}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Withdraw"
          component={Withdraw}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
