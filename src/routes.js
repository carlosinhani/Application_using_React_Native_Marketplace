import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Catolog from './pages/Catalog';

const Stack = createStackNavigator();

export default function Routes() {
  return(
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
              name='Catalog'
              component={Catolog}
              options={{
                 title: 'Catalog',
                 headerTitleAlign: 'center',
              }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
