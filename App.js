import { StatusBar } from "expo-status-bar";
import React, { useRef, useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	ActivityIndicator,
} from "react-native";
import * as Location from "expo-location";
import { LinearGradient } from "expo-linear-gradient";
import SimpleLottie from "./SimpleLottie";
import WeatherInfo from "./components/WeatherInfo";
import UnitsPicker from "./components/UnitsPicker";
import ReloadIcon from "./components/ReloadIcon";
import WeatherDetails from "./components/WeatherDetails";
import { WEATHER_API_KEY } from "@env";
import { LogBox } from "react-native";
import ignoreWarnings from "ignore-warnings";

ignoreWarnings("warn", [
	"ViewPropTypes",
	"[react-native-gesture-handler]",
]);

LogBox.ignoreLogs([
	"ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
	"NativeBase: The contrast ratio of",
	"[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const BASE_WEATHER_URL =
	"https://api.openweathermap.org/data/2.5/weather?";

export default function App() {
	const animation = useRef(null);
	const [errorMessage, setErrorMessage] = useState(null);
	const [currentWeather, setCurrentWeather] = useState(null);
	const [unitsSystem, setUnitsSystem] = useState("metric");

	useEffect(() => {
		load();
	}, [unitsSystem]);

	async function load() {
		setCurrentWeather(null);
		setErrorMessage(null);
		try {
			let { status } =
				await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				setErrorMessage(
					"Access to location is needed to run the app"
				);
				return;
			}
			const location = await Location.getCurrentPositionAsync();
			const { latitude, longitude } = location.coords;
			const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${WEATHER_API_KEY}`;

			const response = await fetch(weatherUrl);
			const result = await response.json();

			if (response.ok) {
				setCurrentWeather(result);
			} else {
				setErrorMessage(result.message);
			}
		} catch (err) {
			// console.log(err.message);
			setErrorMessage(err.message);
		}
	}
	if (currentWeather) {
		return (
			<View style={styles.container}>
				<LinearGradient
					// Background Linear Gradient
					// background-image: radial-gradient( circle farthest-corner at 83.7% 4.3%,  rgba(173,0,171,1) 0%, rgba(15,51,92,1) 90% );
					colors={["#0f0c29", "#302b63", "#24243e"]}
					start={{ x: 1, y: 1 }}
					end={{ x: 2, y: 2 }}
					style={styles.container}
				>
					<StatusBar style="auto" />
					<View style={styles.main}>
						<UnitsPicker
							unitsSystem={unitsSystem}
							setUnitsSystem={setUnitsSystem}
						/>
						<ReloadIcon load={load} />
						<WeatherInfo
							currentWeather={currentWeather}
						/>
					</View>
					<WeatherDetails
						currentWeather={currentWeather}
						unitsSystem={unitsSystem}
					/>
				</LinearGradient>
			</View>
		);
	} else if (errorMessage) {
		animation.current?.play();
		return (
			<View style={styles.container}>
				<ReloadIcon load={load} />
				<Text style={{ textAlign: "center" }}>
					{errorMessage}
				</Text>
				<StatusBar style="auto" />
			</View>
		);
	} else {
		// animation.current?.reset();
		animation.current?.play();
		return (
			// <View style={styles.container}>
			// 	<ActivityIndicator
			// 		size="large"
			// 		color={colors.PRIMARY_COLOR}
			// 	/>
			// 	<StatusBar style="auto" />
			// </View>

			<View style={styles.container}>
				<SimpleLottie animation={animation} />
				<StatusBar style="auto" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: "purple",
		justifyContent: "center",
	},
	main: {
		justifyContent: "center",
		flex: 1,
	},
});
