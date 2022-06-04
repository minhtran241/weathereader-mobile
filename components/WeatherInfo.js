import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colors } from "../utils/index";

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors;

export default function WeatherInfo({ currentWeather }) {
	const {
		main: { temp },
		weather: [details],
		name,
	} = currentWeather;

	const { icon, main, description } = details; // icon ID
	const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

	return (
		<View style={styles.wetherInfo}>
			<Text style={styles.textSecondary}> {name}</Text>
			<Image
				style={styles.weatherIcon}
				source={{ uri: iconUrl }}
			/>
			<Text style={styles.textPrimary}>{temp}°</Text>
			<Text style={styles.textSecondary}>{main}</Text>
			<Text style={styles.weatherDescription}>
				{description}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	wetherInfo: {
		alignItems: "center",
	},
	weatherDescription: {
		textTransform: "capitalize",
		color: SECONDARY_COLOR,
		fontSize: 15,
	},
	weatherIcon: {
		width: 200,
		height: 200,
	},
	textPrimary: {
		fontSize: 70,
		color: PRIMARY_COLOR,
		fontWeight: "300",
		marginTop: -30,
	},
	textSecondary: {
		fontSize: 30,
		color: SECONDARY_COLOR,
		fontWeight: "400",
		marginTop: 10,
		// marginBottom: -30,
	},
});
