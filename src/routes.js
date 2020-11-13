import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import  Header from './components/Header';
import Catolog from './pages/Catalog';

const Stack = createStackNavigator();

export default function Routes() {
  return(
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShow: true,
                cardStyle: { backgroundColor: '#313746' },
            }}
             initialRoutesName="Catalog"
             >
            <Stack.Screen
              name='Catalog'
              component={Catolog}
              options={{
                 headerShown:true,
                 headerTransparent: true,
                 headerTitle: () => <Header />,
              }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
