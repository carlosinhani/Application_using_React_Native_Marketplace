import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import FeatherIcon from 'react-native-vector-icons/Feather';
import  Header from './components/Header';
import Catolog from './pages/Catalog';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

export default function Routes() {
  return(
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShow: true,
                cardStyle: { backgroundColor: '#2c3e50' },
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
            <Stack.Screen name='Cart'
              name="Cart"
              component={Cart}
              options={{
                 headerTransparent: true,
                 headerTitle: () => <Header />,
                 headerBackTitleVisible: false,
                 headerLeftContainerStyle: {
                   marginLeft: 20,
                 },
                 headerBackImage: () => (
                   <FeatherIcon name="chevron-left" size={24} color="#f3f9ff" />
                 )
              }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
