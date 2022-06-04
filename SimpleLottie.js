import React from "react";
import { StyleSheet, View, Text } from "react-native";
import LottieView from "lottie-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "./utils/index";

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors;

export default function SimpleLottie({ animation }) {
	return (
		<LinearGradient
			// Background Linear Gradient
			colors={["#0f0c29", "#302b63", "#24243e"]}
			start={{ x: 1, y: 1 }}
			end={{ x: 2, y: 2 }}
			style={styles.animationContainer}
		>
			<View
				style={{ ...styles.animationContainer, bottom: 50 }}
			>
				<LottieView
					autoPlay
					ref={animation}
					style={styles.animation}
					source={require("./assets/103912-purple.json")}
					loop
				/>
			</View>
			<View style={styles.createdBy}>
				<Text
					style={{ color: SECONDARY_COLOR, fontSize: 15 }}
				>
					from
				</Text>
				<Text
					style={{
						color: PRIMARY_COLOR,
						fontSize: 23,
						fontWeight: "500",
					}}
				>
					Minh Tran
				</Text>
			</View>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	animationContainer: {
		// backgroundColor: "#ff00cc",
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	},
	animation: {
		width: 180,
		height: 180,
	},
	createdBy: {
		alignItems: "center",
		bottom: 70,
	},
});
