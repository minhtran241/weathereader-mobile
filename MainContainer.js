import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "./utils/index";
import { enableScreens } from "react-native-screens";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors;
enableScreens(false);
// Screens
import CScreen from "./screens/CScreen";
import FScreen from "./screens/FScreen";
import ForecastScreen from "./screens/Forecast";

//Screen names
const cName = "Celsius";
const fName = "Fahrenheit";
const forecastName = "Forecast";

const Tab = createBottomTabNavigator();
// const CStack = createStackNavigator();
// const FStack = createStackNavigator();

export default function MainContainer({ navigation }) {
	return (
		<LinearGradient
			colors={["#0f0c29", "#302b63", "#24243e"]}
			start={{ x: 1, y: 1 }}
			end={{ x: 2, y: 2 }}
			style={styles.container}
		>
			<NavigationContainer>
				<Tab.Navigator
					initialRouteName={cName}
					screenOptions={({ route }) => ({
						tabBarIcon: ({ focused, color, size }) => {
							let rn = route.name;

							if (rn === cName) {
								return (
									<MaterialCommunityIcons
										name="temperature-celsius"
										size={30}
										color={PRIMARY_COLOR}
									/>
								);
							} else if (rn === fName) {
								return (
									<MaterialCommunityIcons
										name="temperature-fahrenheit"
										size={30}
										color={PRIMARY_COLOR}
									/>
								);
							} else if (rn === forecastName) {
								return (
									<MaterialCommunityIcons
										name="format-list-bulleted-square"
										size={30}
										color={PRIMARY_COLOR}
									/>
								);
							}

							// You can return any component that you like here!
						},
						tabBarStyle: {
							backgroundColor: "transparent",
							borderTopColor: "transparent",
						},
						tabBarActiveTintColor: PRIMARY_COLOR,
						tabBarInactiveTintColor: SECONDARY_COLOR,
						labelStyle: {
							paddingBottom: 10,
							fontSize: 10,
						},
						headerShown: false,
					})}
				>
					<Tab.Screen name={cName} component={CScreen} />
					<Tab.Screen name={fName} component={FScreen} />
					<Tab.Screen
						name={forecastName}
						component={ForecastScreen}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		</LinearGradient>
	);
}

// const HomeStackScreen = ({ navigation }) => (
// 	<HomeStack.Navigator>
// 		<HomeStack.Screen
// 			name={homeName}
// 			component={HomeScreen}
// 			options={{
// 				title: "Overview",
// 				headerShown: false,
// 			}}
// 		/>
// 	</HomeStack.Navigator>
// );

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: "purple",
		justifyContent: "center",
	},
});
