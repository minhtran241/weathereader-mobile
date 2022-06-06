import { StatusBar } from "expo-status-bar";
import React, { useRef, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import { LinearGradient } from "expo-linear-gradient";
import LoadingScreen from "../LoadingLottie";
import WeatherForecast from "../components/WeatherForecast";
import { WEATHER_API_KEY } from "@env";
import { LogBox } from "react-native";
// import { colors } from "../utils/index";
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
	"https://api.openweathermap.org/data/2.5/forecast?";

export default function Forecast({ navigation }) {
	const animation = useRef(null);
	const [errorMessage, setErrorMessage] = useState(null);
	const [weatherForecast, setWeatherForecast] = useState(null);
	const [unitsSystem, setUnitsSystem] = useState("metric");

	useEffect(() => {
		load();
	}, []);

	async function load() {
		setWeatherForecast(null);
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
			const weatherUrl = `${BASE_WEATHER_URL}lat=${latitude}&lon=${longitude}&cnt=40&units=${unitsSystem}&appid=${WEATHER_API_KEY}`;

			const response = await fetch(weatherUrl);
			await window.setTimeout(() => {}, 10000);
			const result = await response.json();

			if (response.ok) {
				setWeatherForecast(result);
			} else {
				setErrorMessage(result.message);
			}
		} catch (err) {
			// console.log(err.message);
			setErrorMessage(err.message);
		}
	}
	if (weatherForecast) {
		return (
			<View style={styles.container}>
				<LinearGradient
					colors={["#0f0c29", "#302b63", "#24243e"]}
					start={{ x: 1, y: 1 }}
					end={{ x: 2, y: 2 }}
					style={styles.container}
				>
					<StatusBar style="auto" />
					<View style={styles.main}></View>
					<WeatherForecast
						weatherForecast={weatherForecast}
						unitsSystem={unitsSystem}
					/>
				</LinearGradient>
			</View>
		);
	} else if (errorMessage) {
		animation.current?.play();
		return (
			<View style={styles.container}>
				<Text style={{ textAlign: "center" }}>
					{errorMessage}
				</Text>
				<StatusBar style="auto" />
			</View>
		);
	} else {
		return (
			<View style={styles.container}>
				<LoadingScreen animation={animation} />
				<StatusBar style="auto" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
	main: {
		justifyContent: "center",
		flex: 1,
	},
});
