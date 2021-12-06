import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import TelaInicial from '../screens/TelaInicial';
import TelaPerfil from '../screens/TelaPerfil';

var IconSize = 30;

export default function TabBar() {

	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator screenOptions={headerStyle}>

			<Tab.Screen name="Início" component={TelaInicial} options={{
				tabBarIcon: ({color, focused}) =>
					(<MaterialCommunityIcons name={focused ? 'home' : 'home-outline'} size={focused ? IconSize + 15 : IconSize + 5} color={color} />)
			}}/>

			<Tab.Screen name="Perfil" component={TelaPerfil} options={{
				tabBarIcon: ({color, focused}) =>
					(<Ionicons name={focused ? 'person' : 'person-outline'} size={focused ? IconSize + 10 : IconSize} color={color} />)
			}}/>

		</Tab.Navigator>
	);}

const headerStyle = {

	headerMode: 'float',
	headerTitleAlign: 'center',
	headerTintColor: 'purple',
	transitionSpec: 'horizontal',
	animation: 'slide_from_right',
	presentation: 'card',
	gestureEnabled: true,
	headerBackTitle: false,
	
	headerTitleStyle: {
		fontWeight: 'bold',
		color: 'purple'
	},
	
	tabBarShowLabel: false,
	tabBarActiveTintColor: 'purple',
	tabBarInactiveTintColor: '#ba9fc4',
	
	tabBarStyle: {
		paddingHorizontal: 10,
		position: 'absolute',
		paddingBottom: 5,
		height: '9%',
		elevation: 7,
		borderRadius: 10,
		marginBottom: '4%',
		marginHorizontal: 17,
		borderWidth: 2,
		borderColor: '#c0c2c0',
		
	},
	
};