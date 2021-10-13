
import { Entypo, Octicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import TelaInicial from '../screens/TelaInicial';
import TelaPerfil from '../screens/TelaPerfil';




export default function TabBar() {

	const Tab = createBottomTabNavigator();

	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={TelaInicial} options={{
				tabBarIcon: ({size, color}) => (<Entypo name="home" size={size} color={color} />)}}/>
			<Tab.Screen name="Perfil" component={TelaPerfil} options={{
				tabBarIcon: ({size, color}) => (<Octicons name="person" size={size} color={color} />)}}/>
		</Tab.Navigator>
	);}