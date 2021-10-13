import { Entypo, Octicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import TelaInicial from '../screens/TelaInicial';
import TelaPerfil from '../screens/TelaPerfil';

var IconSize = 30;

function Focus(IconSize, focused){

	if (focused == true) return IconSize + 10;
	else return IconSize;

}

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

	tabBarStyle: {
		paddingHorizontal: 10,
		paddingBottom: 5,
		height: 64,
		elevation: 4,
		borderRadius: 15,
		marginBottom: 20,
		marginHorizontal: 17,
		borderWidth: 2,
		borderColor: '#c0c2c0',
	},
};

export default function TabBar() {

	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator screenOptions={headerStyle}>
			<Tab.Screen name="Home" component={TelaInicial} options={{
				tabBarIcon: ({color, focused}) => (<Entypo name="home" size={Focus(IconSize, focused)} color={color} />)}}/>

			<Tab.Screen name="Perfil" component={TelaPerfil} options={{
				tabBarIcon: ({color, focused}) => (<Octicons name="person" size={Focus(IconSize, focused)} color={color} />)}}/>
		</Tab.Navigator>
	);}